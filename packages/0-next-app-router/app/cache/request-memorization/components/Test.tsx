import React from "react";

const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products/1");
  return await res.json();
};

export default async function Test() {
  const res = await getProduct();
  return <div>Test</div>;
}
