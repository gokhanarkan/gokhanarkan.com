import Layout from "../../components/Layout";
import Link from "next/link";

const NOTION_BLOG_ID = "1099525da7e5405c961706de56622ccd";

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
