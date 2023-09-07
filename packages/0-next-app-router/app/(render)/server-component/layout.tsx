import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="text-green-800 border h-5 border-red-500">
        我是 server-component
      </header>
      <div className="border border-purple-500 h-[calc(100%-1.25rem)]">
        content:
        {/* Suspense 效果和loading.tsx相同 */}
        {/* <Suspense fallback={<>loading...</>}> */}
        {children}
        {/* </Suspense> */}
      </div>
    </>
  );
}
