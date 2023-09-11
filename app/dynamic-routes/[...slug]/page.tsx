import React from "react";

// 获取动态路由的参数
type RouteParams = { params: { slug: string } };

export default function Page({ params }: RouteParams) {
  if (params.slug?.[0] === "test-error") {
    // 生产环境才会被 error.js 捕获异常
    throw new Error("test-error");
  }
  return (
    <>
      <div> dynamic-page </div>
      <div> slug: {params.slug} </div>
    </>
  );
}
