import { useEffect } from "react";
import { NotionRenderer } from "react-notion";
import Prism from "prismjs";

import Back from "./Back";
import PostNavigation from "./PostNavigation";
import Newsletter from "./Newsletter";

const PostView = ({ post, blocks, path, detailed }) => {
  if (detailed) {
    useEffect(() => {
      Prism.highlightAll();
    });
  }

  return (
    <div className="container mx-auto">
      <div className="relative py-16 bg-white overflow-hidden dark:bg-specialBlue">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <Back href={path} />
            <h1>
              <span className="block text-base text-center text-yellow-600 font-semibold tracking-wide uppercase">
                {new Date(post.date).toDateString()}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {post.title}
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-yellow prose-lg text-gray-500 mx-auto list-none line-numbers match-braces">
            <NotionRenderer blockMap={blocks} />
            {detailed ? (
              <PostNavigation next={post.next} previous={post.previous} />
            ) : null}
          </div>
        </div>
        {detailed ? <Newsletter /> : null}
      </div>
    </div>
  );
};

export default PostView;
