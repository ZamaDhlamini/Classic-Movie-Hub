import React from "react";
import { RestfulProvider } from "restful-react";
import App, { AppProps } from 'next/app';
import '../styles/moviegallery.css';
import { MovieProvider } from "../providers/movies";
import { UsersProvider } from "../providers/users";



function MyApp({ Component, pageProps }: AppProps) {

    return (
      <>
         <RestfulProvider base="https://localhost:44311/api/services/app/" requestOptions={{}}>
            <UsersProvider>
      <MovieProvider>
         <Component {...pageProps} />
      </MovieProvider>
            </UsersProvider>
         </RestfulProvider>
  </>
    )
  }
  export default MyApp;