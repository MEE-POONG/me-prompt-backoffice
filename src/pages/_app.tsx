import "bootstrap/dist/css/bootstrap.css"
import '@/assets/scss/index.scss'
import React from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <SSRProvider>
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Notus NextJS by Creative Tim</title>
        </Head>
          <Component {...pageProps} />
      </React.Fragment>
    </SSRProvider >
  )
}
