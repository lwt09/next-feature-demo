// 只要文件不用 page.js / route.js 命名，就不会向系统外暴露

export async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/a", {
    cache: "no-store",
  });
  const data = (await res.json()) as {
    name: string;
  };
  return data?.name || "no data";
}
