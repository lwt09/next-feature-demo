import Refresh from "@/app/components/refreshComp/Refresh";
import Link from "next/link";
import React from "react";

// data-cache
// router cache 没有生效（refresh / first view）
// full route cache 没有生效 (动态server-comp： 通过 cache: "no-cache" 开启)
// 到了 data-cache 
// 开启了 no-cache ， 也就直接关闭 data-cache 缓存了 所以没什么好测的

// const getDate = async () => {
//   const res = await fetch("https://dummyjson.com/todos/random", {});
//   const data = await res.json();
//   return data;
// };
const getDate = async () => {
  // 测试post接口
  // const res = await fetch("http://localhost:5000/postRandom", {
  //   method: "POST",
  //   cache: "no-cache",
  // });
  const res = await fetch("https://dummyjson.com/todos/random", {});

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
