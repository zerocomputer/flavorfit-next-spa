import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Header from '../shared/ui/header/header'
import "./globals.css"

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "FlavorFit Next SPA",
  description: "A single-page application built with Next.js for FlavorFit (RED Group marathon).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
