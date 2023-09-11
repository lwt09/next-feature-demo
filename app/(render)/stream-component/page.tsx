import React from "react";
import { Suspense } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

export default async function page() {
  return (
    <>
      <Suspense fallback={<div>loadingA...</div>}>
        <CompA />
      </Suspense>
      <Suspense fallback={<div>loadingB...</div>}>
        <CompB />
      </Suspense>
    </>
  );
}

export const dynamic = "force-dynamic";
