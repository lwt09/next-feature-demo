import { notFound } from "next/navigation";
import React from "react";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getRandom = () => Math.random() * 10 > 5;
// server-comp
export default async function page() {
  await sleep(2000);

  // 测试跳转去not-found路径
  if (getRandom()) notFound();
  return <div>base-app-router-page</div>;
}
