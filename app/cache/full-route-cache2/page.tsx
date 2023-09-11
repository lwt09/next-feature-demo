import Refresh from "@/app/components/refreshComp/Refresh";
import Link from "next/link";
import React from "react";

// full-route-cache2
//  动态server-comp: 在服务端不缓存 rsc payload
//  静态server-comp: 在服务端缓存 rsc payload
// data cache: 缓存 fetch 的结果

// 静态server-comp: 在服务端缓存 rsc payload
// 所以客户端刷新会直接命中这里的数据, 且客户端调用 refresh 清除客户端的 router cache 从服务端拿到的数据也是服务端cache的数据
const getDate = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {});
  const data = await res.json();
  return data;
};
export default async function page() {
  const data = await getDate();
  const random = Math.random();
  return (
    <>
      <Link href={"/cache/request-memorization"} className="font-bold">
        go request-memorization
      </Link>
      <div> --------- </div>
      <div>content: {JSON.stringify(data)}</div>
      <div>random number : {random}</div>
      <div> --------- </div>
      <Refresh />
    </>
  );
}
                                                                                                 