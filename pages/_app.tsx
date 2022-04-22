import { ThemeProvider } from "next-themes";

import "react-notion/src/styles.css";
import "../styles/globals.css";

import "typeface-open-sans";
import "typeface-merriweather";

import { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Script src="https://sa.gokhanarkan.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://sa.gokhanarkan.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </ThemeProvider>
  );
}

export default MyApp;
