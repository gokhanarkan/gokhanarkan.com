import { NotionPost } from "../../utils/post";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import PostView from "../../components/PostView";

import { getAllPosts } from "./";

export async function getStaticProps({ params: { slug } }) {
  let posts = await getAllPosts();
  posts = posts.filter((post: NotionPost) => post.published);
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

const SingleThought = ({ post, blocks }) => {
  return (
    <Layout index={true}>
      <BasicMeta url={`/thoughts/${post.slug}`} />
      <PostView post={post} blocks={blocks} path="/thoughts" detailed={false} />
    </Layout>
  );
};

export async function getStaticPaths() {
  let posts = await getAllPosts();
  posts = posts.filter((post: NotionPost) => post.published);
  const paths = posts.map((row: NotionPost) => `/thoughts/${row.slug}`);
  return {
    paths,
    fallback: false,
  };
}

export default SingleThought;
