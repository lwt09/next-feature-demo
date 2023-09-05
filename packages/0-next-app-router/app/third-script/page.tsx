"use client";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // TODO： setTimeout 加上可以获取到$ ，为什么用useEffect没获取到, script 已经开启beforeInteractive了
    setTimeout(() => {
      console.log((window as any).$);
    });
  }, []);
  return <div id="page">page</div>;
}
