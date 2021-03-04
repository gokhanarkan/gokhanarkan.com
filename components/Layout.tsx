import { useState, useEffect } from "react";

import Head from "next/head";
import Navigation from "./Navigation";

import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import styles from "../styles/Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  let isDarkMode: boolean = resolvedTheme === "dark";

  const toggleDarkMode = (checked: boolean) => {
    isDarkMode = checked;
    isDarkMode ? setTheme("dark") : setTheme("light");
  };

  if (!mounted) return null;

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className="absolute top-0 right-0 z-10 mt-6 mr-8 md:mt-20 md:mr-20"
    />
  );
};

const Layout = ({ children, ...pageProps }) => {
  return (
    <div>
      <div className={styles.root}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <nav className={pageProps.index ? "w-0" : null}>
          <Navigation />
          {ThemeChanger()}
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
