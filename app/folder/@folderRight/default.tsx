import React from "react";

export default function d({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>defaultRight</div>
      {children}
    </>
  );
}
