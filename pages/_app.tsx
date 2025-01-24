import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../app/components/navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;