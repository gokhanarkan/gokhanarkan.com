import Link from "next/link";
import cats from "../data/Cats.json";

import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";


export default function FourOhFour() {
    const randomNumber = Math.floor(Math.random() * cats.length);
    const cat = cats[randomNumber];

  return (
    <Layout>
      <div className={styles.container + " mx-auto text-left"}>
        <div className="pb-6">
          <h1 className={styles.heading}>404 - Page Not Found</h1>
          <div>
            <p className={styles.paragraph + " mb-2"}>
              Don't worry, here is a random cat! (Refresh wisely)
            </p>
            <img src={cat[0].url} alt="Random cat picture" className="pb-4 rounded-md" />
            <Link href="/">
              <a className="text-xl">Go back home</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
