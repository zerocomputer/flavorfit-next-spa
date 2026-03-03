import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { Provider } from "./providers/Provider";
import { ReactNode } from "react";
import { Toaster } from "../shared/components/ui/sonner";
import { Header } from "../features/layout/ui/Header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["cyrillic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["cyrillic"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "FlavorFit Next SPA",
  description: "A single-page application built with Next.js for FlavorFit (RED Group marathon).",
  icons: [
    { url: '/favicon.svg', type: 'image/svg+xml' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <Provider>
          {children}
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
