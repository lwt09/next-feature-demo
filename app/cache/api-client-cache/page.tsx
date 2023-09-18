"use client";
import Refresh from "@/app/components/refreshComp/Refresh";
import React, { useEffect } from "react";

const getDate = async () => {
  const res = await fetch("http://localhost:3000/api/test-cache", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export default function Page() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    (async () => {
      setData(await getDate());
    })();
  }, []);
  return (
    <>
      <div>content: {JSON.stringify(data)}</div>
      <div> --------- </div>
      <Refresh />
    </>
  );
}
