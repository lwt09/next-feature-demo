import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({ name: getRandomName() });
}

function getRandomName() {
  const names = ["lwt", "rc", "csj", "cyh", "tbb", "zxy"];
  return names[Math.floor(Math.random() * names.length)];
}
