"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-gray-900 p-10 text-gray-100">
      <h2 className="text-2xl font-bold">Failed to load products</h2>
      <p>The store API might be unavailable. Please try again.</p>
      <button
        onClick={() => retry()}
        className="rounded-md bg-teal-600 px-4 py-2 hover:bg-teal-500"
      >
        Try Again
      </button>
    </div>
  );
}
