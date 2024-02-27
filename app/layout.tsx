import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { NextUIProvider } from "./_components/nextui-provider";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruslan Wanandi | Web Developer",
  description: "Hi, im Ruslan",
  keywords: [
    "Ruslan",
    "Ruslan Wanandi",
    "Web Developer",
    "Fron-tend engineer",
    "Back-end Engineer",
    "Fullstack Engineer",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
  return (
    <html>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextUIProvider>{children}</NextUIProvider>
        </ThemeProvider>

        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
