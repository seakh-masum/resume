import type { Metadata } from "next";
import { Dancing_Script, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-poppins",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Masum Resume",
  description:
    "This is a resume of Masum made with Next.js | Firebase , designed with Figma & Neumorphism",

  // Basic SEO
  keywords: ["Resume", "Masum", "React", "Firebase", "Figma", "Neumorphism"],

  // Favicon & Icons
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-32x32_bchqlp.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-16x16_egxqp4.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon_h9ivit.ico",
    apple:
      "https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623015/masum-cv/icons/apple-touch-icon_jmwgvp.png",
    other: [
      {
        rel: "mask-icon",
        url: "https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623020/masum-cv/icons/safari-pinned-tab_siqqku.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Theme Colors
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],

  // Open Graph
  openGraph: {
    title: "Resume of Masum",
    description:
      "This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism",
    url: "https://seakh-masum.github.io/resume/",
    siteName: "Resume of Masum",
    images: [
      {
        url: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image",
        width: 1200,
        height: 630,
        alt: "Resume of Masum",
      },
    ],
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "Resume of Masum",
    description:
      "This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism",
    creator: "@masum_seakh",
    site: "@masum_seakh",
    images: [
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image",
    ],
  },

  // Misc
  other: {
    "msapplication-TileColor": "#00aba9",
    "msapplication-config":
      "https://res.cloudinary.com/ruhi-birthday/raw/upload/v1655623016/masum-cv/icons/browserconfig_wrzts9.xml",
  },
};

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
