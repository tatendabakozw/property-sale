import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon?: any;
  children?: ReactNode;
  no_text?: any;
  twitter_title?: string;
  twitter_description?: string;
  canonical_url?: string;
  og_image?: any;
}

function GeneralLayout({
  children,
  no_text,
  title,
  description,
  twitter_title,
  twitter_description,
  canonical_url,
  og_image,
}: Props): ReactElement {
  const desc = "A good place to find a home";
  const original_title = "TendaImba";
  const url = "www.tengaimba.com";
  return (
    <>
      <Head>
        <title>{title ? `${title} | TengaImba ` : original_title}</title>
        <meta name="description" content={description ? description : desc} />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={title ? `${title} | TengaImba` : original_title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={description ? description : desc}
        />
        <meta property="og:site_name" content="www.tengaimba.com" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content={
            og_image
              ? og_image
              : "//cdn.example.com/uploads/images/webpage_300x200.png"
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            twitter_title
              ? `${twitter_title} | tengaimba`
              : "tengaimba | Buy and sell items online"
          }
        />
        <meta name="twitter:description" content={twitter_description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="twitter:image" content={og_image} />
        <link rel="canonical" href={canonical_url ? canonical_url : url} />
      </Head>
      <div className="flex flex-col w-full">
        <nav>
          <Navbar />
        </nav>
        <div className="flex flex-col w-full min-h-screen">{children}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default GeneralLayout;
