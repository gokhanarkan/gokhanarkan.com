import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home() {

  return (
    <Layout>
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
  
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}
  //         >
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
  // )
}
