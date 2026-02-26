import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Header from '../shared/components/ui/header/header'
import "./globals.css"
import { Provider } from "./providers/Provider";
import { ReactNode } from "react";

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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
