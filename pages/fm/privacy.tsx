import BasicMeta from "../../components/meta/BasicMeta";
import Layout from "../../components/Layout";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <Layout index={true}>
      <BasicMeta url={"/fm/privacy"} />
      <div className={styles.container + " mx-auto"}>
        <div className="pb-6">
          <h1 className={styles.heading}>Fart Machine Privacy Policy</h1>
          <div className="mt-4">
            <p className={styles.paragraph}>
              Gökhan Arkan built the Fart Machine (in short FM) app as a Free
              app. This SERVICE is provided by Gökhan Arkan at no cost and is
              intended for use as is. This page is used to inform visitors
              regarding my policies with the collection, use, and disclosure of
              Personal Information if anyone decided to use my Service. If you
              choose to use my Service, then you agree to the collection and use
              of information in relation to this policy. The Personal
              Information that I collect is used for providing and improving the
              Service. I will not use or share your information with anyone
              except as described in this Privacy Policy. The terms used in this
              Privacy Policy have the same meanings as in our Terms and
              Conditions, which is accessible at FM unless otherwise defined in
              this Privacy Policy.
            </p>
            <p className={styles.paragraph}>
              I value your trust in installing this application. This
              application is not collection and will never collect any personal
              information.
            </p>
            <p className={styles.paragraph}>
              These Services do not address anyone under the age of 13. I do not
              knowingly collect personally identifiable information from
              children under 13 years of age. In the case I discover that a
              child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact me so that I will be able to
              do necessary actions.
            </p>
            <p className={styles.paragraph}>
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page. This policy is effective as of 2021-07-31
            </p>
            <p className={styles.paragraph}>
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at gokhan@arkan.me.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
