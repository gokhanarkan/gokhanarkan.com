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
      className="absolute top-0 right-0 z-50 mt-6 mr-8 md:mt-20 md:mr-20"
    />
  );
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.root}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <nav>
          <Navigation />
          {ThemeChanger()}
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;