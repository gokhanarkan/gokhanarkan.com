import Link from "next/link";

const Thought = ({ title, date, slug, preview }) => {
  const fullDate = new Date(date).toDateString();
  return (
    <Link href="/thoughts/[slug]" as={`/thoughts/${slug}`}>
      <div
        className="my-4 overflow-hidden px-2 py-4 sm:px-6 rounded-sm cursor-pointer hover:bg-gray-100 
        dark:bg-specialBlue dark:hover:bg-yellow-500"
      >
        <p className="text-sm text-gray-500">
          <time dateTime="2020-03-16">{date}</time>
        </p>
        <div className="mt-1">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-1 text-base text-gray-500">{preview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Thought;
