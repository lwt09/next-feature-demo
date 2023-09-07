import Link from "next/link";
import React from "react";

// full-route-cache
//  动态server-comp: 在服务端不缓存 rsc payload
//  静态server-comp: 在服务端缓存 rsc payload
// data cache: 缓存 fetch 的结果

// 1. no-store ===> 动态组件 服务端不缓存 payload
// 2. no-store ===> Data Cache 不缓存 fetch 的结果
// 所以我刷新一定是会重新请求数据的 测试通过
// 打包后期望结果: 同样是刷新能够重新请求数据 测试通过
const getDate = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
export default async function page() {
  const data = await getDate();
  return (
    <>
      <Link href={"/cache/request-memorization"} className="font-bold">
        go request-memorization
      </Link>
      <div> --------- </div>
      <div>content: {JSON.stringify(data)}</div>
    </>
  );
}
