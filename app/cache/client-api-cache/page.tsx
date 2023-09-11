"use client";
import Refresh from "@/app/components/refreshComp/Refresh";
import React, { useEffect } from "react";

// 1. 不命中 full-route-cache ，所以开启 cache: no-cache
// 2. 按文档应该是 都应该缓存的

const getDate = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/test-cache");
  const data = await res.json();
  return data;
};

export default function Page() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    const go = async () => {
      const data = await getDate();
      setData(data);
    };
    go();
  }, []);
  return (
    <>
      <div>content: {JSON.stringify(data)}</div>
      <div> --------- </div>
      <Refresh />
    </>
  );
}
