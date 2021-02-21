import Link from "next/link";

import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";


export default function FourOhFour() {
  return (
    <Layout index={true}>
      <div className={styles.container + " mx-auto"}>
        <div className="pb-6">
          <h1 className={styles.heading}>404 - Page Not Found</h1>
          <div>
            <p className={styles.paragraph + " mb-2"}>
              Don't worry, here is a kitty hugging a kitty!
            </p>
            <img
              src="https://media.tenor.com/images/7e97f887e0069d43d6740c88bfbc5b88/tenor.gif"
              alt="Random cat picture"
              className="pb-4 rounded-md mx-auto"
            />
            <Link href="/">
              <a className="text-xl">Go back home</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
