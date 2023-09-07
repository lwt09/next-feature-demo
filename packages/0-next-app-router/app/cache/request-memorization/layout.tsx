import React from "react";
const fetchData = async () => {
  const { signal } = new AbortController();
  const res = await fetch("https://dummyjson.com/products/1");
  return await res.json();
};

export default async function CacheRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = (await fetchData()) as any;
  return (
    <div>
      {children}
      ----layout:
      <div>{JSON.stringify(res)}</div>
    </div>
  );
}
