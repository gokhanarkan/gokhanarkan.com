import Link from "next/link";
import { NotionRenderer } from "react-notion";

import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import Back from "../../components/Back";
import PostNavigation from "../../components/PostNavigation";
import Newsletter from "../../components/Newsletter";

import { getAllPosts } from "./";

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
      <div className="container mx-auto lg:pr-32">
        <div className="relative py-16 bg-white overflow-hidden dark:bg-specialBlue">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <Back href="/blog" />

              <h1>
                <span className="block text-base text-center text-yellow-600 font-semibold tracking-wide uppercase">
                  {post.date}
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  {post.title}
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-yellow prose-lg text-gray-500 mx-auto list-none">
              <NotionRenderer blockMap={blocks} />
              <PostNavigation next={post.next} previous={post.previous} />
            </div>
          </div>
          <Newsletter />
        </div>
      </div>
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
