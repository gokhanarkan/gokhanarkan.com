import Layout from "../../components/Layout";
import Link from "next/link";

const NOTION_BLOG_ID = "4e5c7cf91b0543ca83cd90388f3bd38d";

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

export default function Blog({ posts }) {
  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <div>{post.title}</div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
