import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-primary-cream font-sans",
        fontSans.variable,
        fontSerif.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
