import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Muhammad Syahrial",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className="">
      <body
        className={`antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
