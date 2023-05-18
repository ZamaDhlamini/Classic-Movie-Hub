import React from "react";
import { RestfulProvider } from "restful-react";
import App, { AppProps } from 'next/app';
import '../styles/navbar.css';
import MovieProvider from "../providers/movies";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
         <RestfulProvider base="https://localhost:44311/api/services/app">
         <Component {...pageProps} />
         </RestfulProvider>
  </>
    )
  }
  export default MyApp;