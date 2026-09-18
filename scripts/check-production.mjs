import assert from "node:assert/strict";
import http from "node:http";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
const port = process.env.TEST_PORT || 4174;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "-p",
    String(port),
    "--hostname",
    "127.0.0.1",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
server.stdout.on("data", (x) => (logs += x));
server.stderr.on("data", (x) => (logs += x));
function request(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(origin + path, { agent: false }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () =>
        resolve({
          status: res.statusCode,
          headers: res.headers,
          text: Buffer.concat(chunks).toString(),
        }),
      );
    });
    req.setTimeout(3000, () => req.destroy(new Error(`Timed out: ${path}`)));
    req.on("error", reject);
  });
}
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error(logs);
    try {
      if ((await request("/")).status === 200) {
        ready = true;
        break;
      }
    } catch {}
    await delay(200);
  }
  assert(ready, logs);
  const routes = [
    "/",
    "/about",
    "/experience",
    "/projects",
    "/projects/dance-studio-costume-manager",
    "/projects/groundwork-ai",
    "/projects/autofarm",
    "/projects/attitudes-performing-arts",
    "/writing",
    "/writing/when-a-spreadsheet-stops-being-enough",
    "/writing/designing-a-small-tool-around-the-work",
    "/tools",
  ];
  for (const route of routes) {
    const res = await request(route);
    assert.equal(res.status, 200, route);
    assert.match(res.text, /id="main-content"/, route);
    assert.match(res.text, /<h1[ >]/, route);
    assert(
      res.text.includes(
        `rel="canonical" href="https://www.westongraham.com${route === "/" ? "" : route}"`,
      ),
      `Canonical: ${route}`,
    );
  }
  const home = (await request("/")).text;
  assert(home.indexOf('id="work"') < home.indexOf('id="experience-title"'));
  assert.doesNotMatch(
    (await request("/writing")).text,
    /Coming soon|In progress/,
  );
  const study = (await request("/projects/groundwork-ai")).text;
  assert.match(study, /Validation/);
  assert.match(study, /Private repository/);
  assert.match(
    (await request("/projects/dance-studio-costume-manager")).text,
    /Records measurements/,
  );
  for (const [from, to] of [
    ["/notes", "/writing"],
    ["/journal", "/writing"],
    ["/build", "/writing"],
    [
      "/notes/designing-a-small-tool-around-the-work",
      "/writing/designing-a-small-tool-around-the-work",
    ],
  ]) {
    const res = await request(from);
    assert.equal(res.status, 308);
    assert.equal(res.headers.location, to);
  }
  for (const route of ["/projects/not-a-project", "/writing/not-an-article"])
    assert.equal((await request(route)).status, 404, route);
  const pdf = await request("/documents/weston-graham-resume.pdf");
  assert.equal(pdf.status, 200);
  assert.match(pdf.headers["content-type"], /application\/pdf/);
  const sitemap = (await request("/sitemap.xml")).text;
  assert.doesNotMatch(sitemap, /\.com\/(notes|journal|build|tools)</);
  console.log(
    `PASS: ${routes.length} routes, canonical URLs, project evidence, redirects, 404s, resume PDF, sitemap.`,
  );
} finally {
  server.kill("SIGTERM");
}
