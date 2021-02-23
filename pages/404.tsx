import Link from "next/link";
import Image from "next/image";

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
            <div className="pb-2 rounded-md mx-auto">
              <Image
                src="/404.gif"
                alt="Cat hugging another cat"
                width={500}
                height={400}
              />
            </div>
            <Link href="/">
              <a className="text-xl">Go back home</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
