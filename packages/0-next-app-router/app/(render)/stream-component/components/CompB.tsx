import React from "react";

export default async function CompB() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>CompB</div>;
}
