import Refresh from "@/app/components/refreshComp/Refresh";
import Link from "next/link";
import React from "react";

// 1. 不命中 full-route-cache ，所以开启 cache: no-cache
// 2. 按文档应该是 都应该缓存的

// export const dynamic = "force-dynamic";

const getDate = async () => {
  const res = await fetch("http://localhost:3000/api/test-cache", {
    method: "POST",
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page() {
  const data = await getDate();
  return (
    <>
      <div>content: {JSON.stringify(data)}</div>
      <div> --------- </div>
      <Refresh />
    </>
  );
}
