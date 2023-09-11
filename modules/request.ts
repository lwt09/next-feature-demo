// 只要文件不用 page.js / route.js 命名，就不会向系统外暴露

export async function getData() {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  });
  const data = (await res.json()) as any;
  return data || "no data";
}
