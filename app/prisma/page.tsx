import prisma from "@/modules/prisma";
import React from "react";

// 这里dev模式下没有缓存
// build产物缓存了数据（我认为是full-route-cache命中了)

// TODO: dev bug 还是 build 的bug

const getData = async () => {
  const res = await prisma.pokemon.findMany({
    select: {
      id: true,
      name: true,
      type: true,
    },
  });
  return res;
};
export default async function page() {
  const res = (await getData()) as any;
  return <div>{res.length}</div>;
}
