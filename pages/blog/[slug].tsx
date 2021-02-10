import Link from "next/link";
import { NotionRenderer } from "react-notion";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import Back from "../../components/Back";

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

const SinglePost = ({ post, blocks }) => {
  return (
    <Layout>
      <BasicMeta url={`/blog/${post.slug}`} />
      <div className={styles.container + " mx-auto"}>
        <div className="post">
          <Back href="/blog" />
          <h1 className={styles.heading}>{post.title}</h1>
          <NotionRenderer blockMap={blocks} />
          <Back href="/blog" />
        </div>
      </div>
      <style jsx>
        {`
          .post {
            max-width: 768px;
          }
          @media (max-width: 769px) {
            .post {
              max-width: 18rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((row) => `/blog/${row.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export default SinglePost;
