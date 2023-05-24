import React from "react";
import { RestfulProvider } from "restful-react";
import App, { AppProps } from 'next/app';
import '../styles/moviegallery.css';
import { MovieProvider } from "../providers/movies";
import { getDecod } from "../utils/auth";


function MyApp({ Component, pageProps }: AppProps) {

   console.log("get_decoded ::",getDecod())
    return (
      <>
         <RestfulProvider base="https://localhost:44311/api/services/app">
      <MovieProvider>
         <Component {...pageProps} />
      </MovieProvider>
         </RestfulProvider>
  </>
    )
  }
  export default MyApp;