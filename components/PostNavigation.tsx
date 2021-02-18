import Link from "next/link";

const PostNavigation = ({next="", previous=""}) => {
    return (
      <div className="flex items-center justify-between pb-14">
        {previous.length > 0 ? (
          <div>
            <Link href={previous}>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm 
            leading-4 font-medium rounded-md text-white bg-specialBlue hover:bg-gray-500 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:border-specialBlue dark:bg-yellow-500
              dark:hover:bg-yellow-400"
              >
                <svg
                  className="-ml-0.5 mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  ></path>
                </svg>
                Previous Post
              </button>
            </Link>
          </div>
        ) : null}
        {next.length > 0 ? (
          <div>
            <Link href={next}>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 text-center border border-transparent shadow-sm text-sm 
            leading-4 font-medium rounded-md text-white bg-specialBlue hover:bg-gray-500 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:border-specialBlue dark:bg-yellow-500
              dark:hover:bg-yellow-400"
              >
                Next Post
                <svg
                  className="-mr-0.5 ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    );
}

export default PostNavigation
