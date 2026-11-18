"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <p className="eyebrow">Error</p>
      <h1 className="text-4xl">Something went wrong.</h1>
      <p className="text-muted">The details couldn&apos;t be loaded. Please try again.</p>
      <button type="button" className="btn btn-primary mt-2" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
