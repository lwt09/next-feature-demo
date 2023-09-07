import Refresh from "@/app/components/refreshComp/Refresh";
import Link from "next/link";
import React from "react";

// 0. router-cache 刷新页面就会刷新（但是从 该页面 => 别的页面 => 再回到该页面 会读到client cache）
// 1. full-route-cache
//  动态server-comp: 在服务端不缓存 rsc payload
//  静态server-comp: 在服务端缓存 rsc payload
// 2. request-memorization cache  单次渲染缓存接口数据（layout 和 page 同时访问同一个接口）
// 3. data cache: 缓存 fetch 的结果

// 0.router-cache -test
// server-comp 动态只客户端缓存
// 测试成功 从别的页面过30s Link 回到该页面会重新请求数据 , 30s内会直接读客户端缓存。
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
      <div> --------- </div>
      <Refresh />
    </>
  );
}
