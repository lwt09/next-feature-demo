"use client";

import { useRouter } from "next/navigation";


export default function Refresh() {
    const route = useRouter();
    const refresh = () => {
        route.refresh()
    }
  return (
    <>
      <div onClick={refresh}>
        点我刷新客户端数据
      </div>
    </>
  );
}
