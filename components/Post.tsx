import Link from "next/link";

const Post = ({ title, date, slug, preview, url }) => {
  return (
    <Link href={`/${url}/[slug]`} as={`/${url}/${slug}`}>
      <div
        className="my-4 overflow-hidden px-2 py-4 sm:px-6 rounded-sm cursor-pointer hover:bg-gray-100 
        dark:bg-specialBlue dark:hover:bg-yellow-500"
      >
        <p className="text-sm font-medium text-gray-500">
          <time dateTime={date}>{new Date(date).toDateString()}</time>
        </p>
        <div className="mt-1">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-1 text-base text-gray-900">{preview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
