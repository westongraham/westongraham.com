import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL } from "@/data/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Weston Graham",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased light"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){function a(t){var r=document.documentElement;r.setAttribute('data-theme',t);r.classList.remove('light','dark');r.classList.add(t)}try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}a(t);document.addEventListener('click',function(e){var b=e.target.closest('[data-theme-toggle]');if(!b)return;var n=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';a(n);localStorage.setItem('theme',n);b.setAttribute('aria-label','Switch to '+(n==='dark'?'light':'dark')+' mode');b.setAttribute('title','Switch to '+(n==='dark'?'light':'dark')+' mode')})}catch(e){}})()",
          }}
        />
      </head>
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
