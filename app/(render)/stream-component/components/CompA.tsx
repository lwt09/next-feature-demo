import React from "react";

export default async function CompA() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>CompA</div>;
}
