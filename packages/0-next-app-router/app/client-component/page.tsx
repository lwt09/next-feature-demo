"use client";

import { getData } from "@/app/modules/request";
import React, { useEffect, useState } from "react";

export default function Page() {
  // 1. only client-component can use react hooks like useState, useEffect...
  // 2. client-component send ajax with the client browser, not the server
  const [data, setData] = useState<string>("");
  useEffect(() => {
    const set = async () => {
      const data = await getData();
      setData(data);
    };
    set();
  }, []);
  return (
    <>
      <div>client-page</div>
      <div>data: {data}</div>
    </>
  );
}
