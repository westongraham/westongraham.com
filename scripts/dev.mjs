import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const translated = [];

for (let index = 0; index < args.length; index += 1) {
  if (args[index] === "--host") {
    translated.push("--hostname", args[index + 1] ?? "0.0.0.0");
    index += 1;
  } else if (args[index] !== "--strictPort") {
    translated.push(args[index]);
  }
}

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", ...translated], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
