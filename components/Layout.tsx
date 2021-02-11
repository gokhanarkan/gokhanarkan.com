import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
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
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
