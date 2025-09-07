// components/SeoHead.tsx
import Head from "next/head";

export default function MyHead() {
  return (
    <Head>
      {/* Basic Meta */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Masum Resume</title>
      Favicon & Icons
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon_h9ivit.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-32x32_bchqlp.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-16x16_egxqp4.png"
      />
      <link
        rel="mask-icon"
        href="https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623020/masum-cv/icons/safari-pinned-tab_siqqku.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta
        name="msapplication-config"
        content="https://res.cloudinary.com/ruhi-birthday/raw/upload/v1655623016/masum-cv/icons/browserconfig_wrzts9.xml"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623015/masum-cv/icons/apple-touch-icon_jmwgvp.png"
      />
      {/* Manifest */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
      {/* Fonts */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;500;600;700&family=Dancing+Script:wght@700&display=swap"
        rel="stylesheet"
      /> */}
      {/* Theme Colors */}
      {/* <meta
        name="theme-color"
        content="#fafafa"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#303030"
        media="(prefers-color-scheme: dark)"
      /> */}
      {/* SEO */}
      {/* <meta
        name="description"
        content="This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism"
      />
      <meta
        name="image"
        content="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image"
      /> */}
      {/* Schema.org for Google */}
      {/* <meta itemProp="name" content="Resume of Masum" />
      <meta
        itemProp="description"
        content="This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism"
      />
      <meta
        itemProp="image"
        content="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image"
      /> */}
      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Resume of Masum" />
      <meta
        name="twitter:description"
        content="This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism"
      />
      <meta name="twitter:site" content="@masum_seakh" />
      <meta name="twitter:creator" content="@masum_seakh" />
      <meta
        name="twitter:image:src"
        content="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image"
      /> */}
      {/* Open Graph */}
      {/* <meta property="og:title" content="Resume of Masum" />
      <meta
        property="og:description"
        content="This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism"
      />
      <meta
        property="og:image"
        content="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image"
      />
      <meta property="og:url" content="https://seakh-masum.github.io/resume/" />
      <meta property="og:site_name" content="Resume of Masum" />
      <meta property="og:type" content="website" /> */}
    </Head>
  );
}
