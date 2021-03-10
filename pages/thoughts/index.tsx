import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";

import { NotionPost } from "../../utils/post";

import PostMenu from "../../components/PostMenu";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_THOUGHTS_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  let posts = await getAllPosts();
  return {
    props: {
      posts: posts.filter((post: NotionPost) => post.published),
    },
  };
}

const Thoughts = ({ posts }) => {
  return (
    <Layout>
      <BasicMeta url={"/thoughts"} />
      <PostMenu
        title="Thoughts"
        description="Fresh thoughts, straight from the shower."
        posts={posts}
        newsletter={false}
      />
    </Layout>
  );
};

export default Thoughts;
