import Link from "next/link";

const Post = ({ title, date, slug }) => {
  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <h3 className="text-sm font-medium cursor-pointer">{title}</h3>
            </Link>
          </div>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </li>
  );
};

export default Post;
