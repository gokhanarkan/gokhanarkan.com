import { useState, useEffect } from "react";

import Head from "next/head";
import Navigation from "./Navigation";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

import styles from "../styles/Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isDarkMode = resolvedTheme === "dark";

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
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="absolute top-0 right-0 z-50 mt-6 mr-8 md:mt-20 md:mr-20"
          />
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
