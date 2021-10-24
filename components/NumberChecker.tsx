import { useState } from "react";
import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  RefreshIcon,
} from "@heroicons/react/solid";

export default function NumberChecker() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse("");
    setLoading(true);
    if (!Boolean(input)) {
      setError(true);
      setLoading(false);
      setResponse("Please enter a valid phone number");
    }
    const response = await fetch(
      `/api/barclays/check-phone-number?number=${encodeURIComponent(input)}`
    );
    const { found } = await response.json();
    if (!found) {
      setError(true);
      setLoading(false);
      setResponse("This isn't an official Barclays number");
      return;
    }
    setError(false);
    setLoading(false);
    setResponse("This is an official Barclays number");
    return;
  };

  return (
    <div className="mx-auto my-8 max-w-xs">
      <label
        htmlFor="number"
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        Barclays Phone Number Checker
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            className={
              (error
                ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                : null) +
              " block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
            }
            aria-invalid="true"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {!error && response && (
              <ShieldCheckIcon
                className="h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            )}
            {loading && !response && (
              <RefreshIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            )}
            {error && !loading && (
              <ShieldExclamationIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            )}
          </div>
        </form>
      </div>
      {response && <p className="mt-2 text-sm text-red-600">{response}</p>}
    </div>
  );
}
