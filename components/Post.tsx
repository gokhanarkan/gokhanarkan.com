import Link from "next/link";

const Post = ({ title, date, slug, preview, url }) => {
  return (
    <div
      className="my-4 overflow-hidden px-2 py-4 sm:px-6 rounded-sm
        dark:bg-specialBlue"
    >
      <p className="text-sm font-medium text-gray-500">
        <time dateTime={date}>{new Date(date).toDateString()}</time>
      </p>
      <div className="mt-1">
        <Link href={`/${url}/[slug]`} as={`/${url}/${slug}`}>
          <a className="text-xl font-semibold cursor-pointer text-gray-900">
            {title}
          </a>
        </Link>
        <p className="mt-1 text-base text-gray-900">{preview}</p>
      </div>
    </div>
  );
};

export default Post;
