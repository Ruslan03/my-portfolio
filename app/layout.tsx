import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { NextUIProvider } from "./_components/nextui-provider";

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
  return (
    <html>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextUIProvider>{children}</NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
