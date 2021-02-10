import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import Post from "../../components/Post";

const NOTION_BLOG_ID = "4e5c7cf91b0543ca83cd90388f3bd38d";

import styles from "../../styles/Blog.module.css";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
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

const Blog = ({ posts }) => {
  return (
    <Layout>
      <BasicMeta url={"/blog"} />
      <div className={styles.container + " mx-auto"}>
        <div>
          <h1 className={styles.heading + " text-center"}>Blog</h1>
          <div className="font-normal text-center border-b-2">
            <h2 className="mb-4">
              A blog about things, usually the side projects I've worked on.
            </h2>
          </div>
          <div>
            <ul className="space-y-3 py-6">
              {posts.map((post) => (
                <Post
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

export default Blog;
