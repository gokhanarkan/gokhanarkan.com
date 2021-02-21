import Link from "next/link";

const Post = ({ title, date, slug }) => {
  const fullDate = new Date(date).toDateString();
  return (
    <li
      className="bg-white shadow-sm overflow-hidden px-4 py-4 sm:px-6 rounded-md cursor-pointer hover:bg-gray-100 
        dark:bg-specialBlue dark:hover:bg-yellow-500"
    >
      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        <div className="flex space-x-3">
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            <p className="text-sm font-normal text-gray-500">{fullDate}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Post;
