import Link from "next/link";

import Layout from "../../components/Layout";
import { NotionRenderer } from "react-notion";

import { getAllPosts } from "./";

import styles from "../../styles/SinglePost.module.css";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
}

const SinglePost = ({ post, blocks }) => (
  <Layout>
    <div className={styles.container + " mx-auto"}>
      <div style={{ maxWidth: 768 }}>
        <div>
          <Link href="/blog">Go back</Link>
        </div>
        <h1 className={styles.heading}>{post.title}</h1>
        <NotionRenderer blockMap={blocks} />
        <div className="pb-6">
          <Link href="/blog">Go back</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((row) => `/blog/${row.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export default SinglePost;
