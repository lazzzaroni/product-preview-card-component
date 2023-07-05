import Head from "next/head";

import { cn } from "@/lib/utils";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Picture from "@/components/Picture";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Product preview card component</title>
        <meta
          name="description"
          content="Frontend Mentor | Product preview card component"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/product-preview-card-component/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/product-preview-card-component/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/product-preview-card-component/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/product-preview-card-component/images/favicon-16x16.png"
        />
      </Head>
      <div
        className={cn(
          "flex h-[610px] w-[344px] flex-col rounded-xl bg-neutral-white",
          "md:h-[450px] md:w-[600px] md:flex-row"
        )}
      >
        <Picture />
        <Description />
      </div>
      <Footer />
    </>
  );
}
