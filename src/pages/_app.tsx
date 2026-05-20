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
      {/* Visual layout wrapper forcing a smooth terminal boot fade animation */}
      <div className="animate-fade-in transition-opacity duration-500 ease-out opacity-100">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;