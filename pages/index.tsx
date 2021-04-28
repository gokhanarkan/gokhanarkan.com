import BasicMeta from "../components/meta/BasicMeta";
import Layout from "../components/Layout";
import Spotify from "../components/Spotify";

import fetch from "../lib/fetch";
import useSWR from "swr";

import styles from "../styles/Home.module.css";

// export const getServerSideProps = async () => {
//   try {
//     // Trying the repl.it always on feature
//     const res = await fetch(process.env.RECENTLY_PLAYED_REPL);
//     // Lambda where you can check out at gokhanarkan.com/api/spotify/recently-played
//     // const res = await fetch(
//     //   `${process.env.BASE_URL}/api/spotify/recently-played`
//     // );
//     const data = await res.json();
//     return {
//       props: { data: data.data },
//     };
//   } catch (e) {
//     return {
//       props: { data: null },
//     };
//   }
// };

const SpotifyData = () => {
  const { data, error } = useSWR<string[]>(
    "/api/spotify/recently-played",
    fetch
  );

  console.log(data);

  return data ? (
    <Spotify
      album={data.album}
      albumImageUrl={data.albumImageUrl}
      artist={data.artist}
      songUrl={data.songUrl}
      title={data.title}
    />
  ) : null;
};

function Home() {
  return (
    <Layout index={true}>
      <BasicMeta url={"/"} />
      <div className={styles.container + " mx-auto"}>
        <div className="pb-6">
          <h1 className={styles.heading}>Gökhan Arkan.</h1>
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
              email me at{" "}
              <a className="link" href="mailto:gokhan@hey.com">
                gokhan@hey.com,
              </a>
              if you have any enquiries. If you are unreasonable enough; you can{" "}
              <a
                className="link"
                href="https://post.arkan.me"
                target="_blank"
                rel="noreferrer noopener"
              >
                send me a POST request,
              </a>
              too.
            </p>
          </div>
          {SpotifyData()}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
