import type { Metadata } from "next";
import "./globals.css";
import { dancing, montserrat, poppins } from "@/styles/fonts";
import { homeMetadata } from "@/styles/metadata";

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${dancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
