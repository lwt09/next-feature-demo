import dynamic from "next/dynamic";
import React from "react";
// import LazyLoad from "./components/LazyLoad";

// 如果导入的是 server component，只有这里面包含的 client component 才会懒加载
const LazyLoad = dynamic(
  () => import("./components/LazyLoad").then((mod) => mod.LazyLoad),
  { ssr: false }
);

export default function page() {
  return (
    <>
      <div>LazyLoad</div>
      <LazyLoad />
    </>
  );
}
