import { getData } from "@/app/modules/request";
import Link from "next/link";
import React from "react";

export default async function page() {
  // 1. server-component can not use react hooks like useState, useEffect...
  // 2. use async func can get data while server-render, it will return [name] into html to client
  // 直接这么请求的话， build 时候会有问题， 直接读缓存， 构建成静态页面了， 所以这个接口应该标注为不缓存
  // 不知道是不是next的bug，在request 里面已经把fetch标记为no-store了，但是还是会被缓存！！导致build出来的该页面还是静态server-component
  // 是静态comp的话，就没办法通过 getData() 获取数据了
  // 这明明提到了 开启 no-store 时候就会被识别为动态server-comp了 fk https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering

  // 找到解决方案： 在route里面强制把该route标记为 不使用缓存 export const dynamic = "force-dynamic";
  // 很不聪明啊，按理来说 在fetch里面设置了 no-store 就不应该把 route 识别为可缓存api， 还需要我强制标记 = =
  // https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching

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
