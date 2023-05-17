import React from "react";
import { RestfulProvider } from "restful-react";
import App, { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
         <RestfulProvider base="https://soap2day.to/pic/movie">
         <Component {...pageProps} />
         </RestfulProvider>
  </>
    )
  }
  export default MyApp;