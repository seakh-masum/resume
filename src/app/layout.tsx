import type { Metadata, Viewport } from "next";
import "./globals.css";
import { dancing, montserrat, poppins } from "@/styles/fonts";
import { homeMetadata } from "@/styles/metadata";

export const metadata: Metadata = homeMetadata;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Theme Colors
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${dancing.variable} antialiased`}
      >
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
