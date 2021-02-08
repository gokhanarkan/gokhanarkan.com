import BasicMeta from "../components/meta/BasicMeta";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";


export default function Home() {

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <div className={styles.container + " mx-auto"}>
        <div>
          <h1 className={styles.heading}>Gökhan Arkan</h1>
          <span className={styles.occupation}>
            Software Engineer & Tea Lover
          </span>
          <div className="mt-4">
            <p className={styles.paragraph}>
              I am a full-stack software engineer based in London, UK.
            </p>
            <p className={styles.paragraph}>
              I work in fintech and studying part-time towards my Master's
              degree at the University of Oxford.
            </p>
            <p className={styles.paragraph}>
              I like video-games, listening or creating music, cycling, and
              photography. In fact, I'll be glad to accept invitations as a
              volunteer photographer for charity/community.
            </p>
            <p className={styles.paragraph}>
              Although I am not actively using social media, please feel free to
              email me at&nbsp;
              <a className="link" href="mailto:gokhan@hey.com">
                gokhan@hey.com
              </a>
              , if you have any enquiries. If you are unreasonable enough; you
              can&nbsp;
              <a
                className="link"
                href="https://post.arkan.me"
                target="_blank"
                rel="noreferrer noopener"
              >
                send me a POST request
              </a>
              , too.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
