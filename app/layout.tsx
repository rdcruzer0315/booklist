import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookList",
  description: "BookList",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
