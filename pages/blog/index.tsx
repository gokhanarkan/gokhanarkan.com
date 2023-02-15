import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";

import { NotionPost } from "../../utils/post";

import PostMenu from "../../components/PostMenu";

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_BLOG_ID}`
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

const Blog = ({ posts }) => {
  const title = "Blog";
  const description =
    "A blog about things, usually the side projects I've worked on.";
  return (
    <Layout>
      <BasicMeta url={"/blog"} title={title} description={description} />
      <PostMenu
        title={title}
        description={description}
        posts={posts}
        newsletter={true}
      />
    </Layout>
  );
};

export default Blog;
