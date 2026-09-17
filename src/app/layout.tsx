import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-chrome";
import { SiteFooter } from "@/components/site-footer";
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
            __html:
              "(function(){function a(t){var r=document.documentElement;r.setAttribute('data-theme',t);r.classList.remove('light','dark');r.classList.add(t)}var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';a(t);document.addEventListener('click',function(e){var b=e.target.closest('[data-theme-toggle]');if(!b)return;var n=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';a(n);try{localStorage.setItem('theme',n)}catch(e){}b.setAttribute('aria-label','Switch to '+(n==='dark'?'light':'dark')+' mode');b.setAttribute('title','Switch to '+(n==='dark'?'light':'dark')+' mode')})})()",
          }}
        />
      </head>
      <body className="min-h-full">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
