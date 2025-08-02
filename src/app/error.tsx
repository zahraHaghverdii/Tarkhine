// app/error.tsx
"use client";

import { JSX } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">خطایی رخ داده است!</h1>
      <p>{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => reset()}
      >
        تلاش مجدد
      </button>
    </div>
  );
}
