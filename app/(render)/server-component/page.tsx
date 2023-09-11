import { getData } from "@/modules/request";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await getData();
  
  return (
    <>
      <div>server-page</div>
      <div>data: {JSON.stringify(data)}</div>
      <Link href={"/client-component"} prefetch>
        link to a (test prefetch)
      </Link>
    </>
  );
}
