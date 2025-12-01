/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-head",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JANGAN KLIK!",
  description: "Situs kesadaran keamanan siber - Jangan jadi korban penipuan online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <script src="/script.js"></script>
        {children}
      </body>
    </html>
  );
}
