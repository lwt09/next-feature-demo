"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>base-app-router-error!!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
