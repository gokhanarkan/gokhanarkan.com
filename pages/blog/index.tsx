import Link from "next/link";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";

const NOTION_BLOG_ID = "4e5c7cf91b0543ca83cd90388f3bd38d";

import styles from "../../styles/Blog.module.css";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <Layout>
      <BasicMeta url={"/blog"} />
      <div className={styles.container + " mx-auto"}>
        <div className="text-center mx-auto">
          <h1 className={styles.heading}>Blog</h1>
          <p>A blog about things, usually the side projects I've worked on.</p>
          <div>
            {posts.map((post) => (
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <div className="link">
                  {post.title} | {post.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
