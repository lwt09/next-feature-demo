"use client";

export default function ClientComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  // 因为服务端预渲染客户端组件， 所以日志服务端 客户端都会打印
  console.log("我是客户端组件！");
  return (
    <>
      <div>
        我是客户端组件：
        {children}
      </div>
    </>
  );
}
