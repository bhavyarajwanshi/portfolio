import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles/global.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    // Global click listener bound directly to the window document root
    const handleGlobalClick = () => {
      const promptField = document.getElementById('prompt');
      if (promptField) {
        promptField.focus();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    // Cleanup listener on unmount to prevent memory leaks
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;