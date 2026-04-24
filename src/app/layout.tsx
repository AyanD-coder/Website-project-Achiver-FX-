import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achiver Landing",
  description: "A simple and scalable Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light scroll-smooth"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = window.localStorage.getItem("theme");
                const theme = stored === "dark" ? "dark" : "light";
                const root = document.documentElement;
                root.classList.remove("light", "dark");
                root.classList.add(theme);
                root.dataset.theme = theme;
              } catch {}
            })();`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${sora.variable} flex min-h-screen flex-col antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
