import { NotionPost } from "../../utils/post";

import Layout from "../../components/Layout";
import PostView from "../../components/PostView";
import BasicMeta from "../../components/meta/BasicMeta";

import { getAllPosts } from "./";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  let posts = await getAllPosts();
  posts = posts.filter((post: NotionPost) => post.published);
  // Find the current blogpost by slug
  const post = posts.find((t: NotionPost) => t.slug === slug);
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
    <Layout index={true}>
      <BasicMeta url={`/blog/${post.slug}`} />
      <PostView post={post} blocks={blocks} path="/blog" detailed={true} />
    </Layout>
  );
};

export async function getStaticPaths() {
  let posts = await getAllPosts();
  posts = posts.filter((post: NotionPost) => post.published);
  const paths = posts.map((row: NotionPost) => `/blog/${row.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export default SinglePost;
