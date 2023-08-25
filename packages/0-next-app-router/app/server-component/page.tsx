import { getData } from "@/request/common";
import React from "react";

export default async function page() {
  // 1. server-component can not use react hooks like useState, useEffect...
  // 2. use async func can get data while server-render, it will return [name] into html to client
  const data = await getData();
  return (
    <>
      <div>server-page</div>
      <div>data: {data}</div>
    </>
  );
}
