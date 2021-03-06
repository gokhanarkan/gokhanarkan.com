import { useState } from "react";

const Newsletter = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const isValid = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const registerSubscriber = async (event) => {
    // Love this function over here
    event.preventDefault();

    // Check if the email is valid
    const email: string = event.target.email.value;
    const validEmail: boolean = isValid(email);

    if (email === "") {
      setError(true);
      setMsg("Please add the email.");
      return;
    }

    if (!validEmail) {
      setError(true);
      setMsg("Email is not valid.");
      return;
    }

    // blog/tiny-contact-api
    const res = await fetch("https://post.arkan.me/subscription", {
      body: JSON.stringify({
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result.duplicate) {
      setError(true);
      setMsg(`${email} is duplicate.`);
      return;
    }

    if (!result.success) {
      setError(true);
      setMsg(result.error);
    } else {
      event.target.email.value = "";
      setError(false);
      setMsg(`${email} successfully saved.`);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6">
      <div className="relative rounded-2xl px-6 py-10 bg-specialBlue overflow-hidden shadow-xl sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-indigo-500 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-indigo-700 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Stay up-to-date
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-white font-normal">
              Subscribe to my newsletter and stay up-to-date. Why not? It's
              free.
            </p>
          </div>
          <form
            onSubmit={registerSubscriber}
            className="mt-8 sm:mx-auto sm:max-w-lg sm:flex"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="cta_email" className="sr-only">
                Email address
              </label>
              <input
                id="cta_email"
                type="email"
                name="email"
                className="block w-full border border-transparent rounded-md px-5 py-3 text-base
                   text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent 
                   focus:ring-2 focus:ring-specialBlue focus:ring-offset-2 focus:ring-offset-indigo-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md border border-gray-800 px-5 py-3 
                  bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 
                  sm:px-10 dark:border-specialBlue"
              >
                Notify me
              </button>
            </div>
          </form>
          {msg ? (
            <div className="flex">
              <p
                className={
                  "mx-auto text-left mt-1 " +
                  (error ? "text-red-500" : "text-green-500") +
                  " font-semibold"
                }
              >
                {msg}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
