import { ThemeProvider } from "next-themes";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

import "typeface-open-sans";
import "typeface-merriweather";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
