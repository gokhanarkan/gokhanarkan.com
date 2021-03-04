import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";

import Thought from "../../components/Thought";

import styles from "../../styles/Blog.module.css";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_THOUGHTS_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  let posts = await getAllPosts();
  return {
    props: {
      posts: posts.filter((post) => post.published),
    },
  };
}

const Thoughts = ({ posts }) => {
  return (
    <Layout>
      <BasicMeta url={"/thoughts"} />
      <div className={styles.container + " mx-auto"}>
        <div>
          <h1 className={styles.heading + " text-center"}>Thoughts</h1>
          <div className="font-normal text-center">
            <h2 className="mb-2">
              Fresh thoughts, straight from the shower.
            </h2>
          </div>
          <div>
            <ul className="space-y-3 py-6">
              {posts.map((post) => (
                <Thought
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thoughts;
