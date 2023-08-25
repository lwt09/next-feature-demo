export async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/a", {
    method: "GET",
  });
  const data = (await res.json()) as {
    name: string;
  };
  return data?.name || "no data";
}
