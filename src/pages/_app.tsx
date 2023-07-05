import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-primary-cream`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
