import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />
        </>
      );
  }
  
  export default MyApp;