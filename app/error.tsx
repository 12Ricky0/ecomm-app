"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex mt-[15%] flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="h-12 w-40 border hover:bg-secondary-dark tracking-[1px] leading-normal text-primary-very-dark hover:text-secondary-white font-bold text-sm"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
