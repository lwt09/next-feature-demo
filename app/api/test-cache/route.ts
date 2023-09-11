import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await (
    await fetch("https://dummyjson.com/todos/random", {
      cache: "no-store",
    })
  ).json();
  return NextResponse.json(res);
}

export async function POST() {
  const res = await fetch("http://localhost:5000/postRandom", {
    method: "POST",
    cache: "no-cache",
  });
  return NextResponse.json(await res.json());
}
