import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SHRUTI DHUNGANA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="my Portfolio"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
