import { NextResponse } from "next/server";
import { Server } from "socket.io";

export async function GET(req: any) {
  let res = NextResponse.next() as any;
  
  // TODO: res 里面拿不到 socket 数据
  if (!res.socket?.server?.io) {
    console.log("*First use, starting socket.io");
    // debugger
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      socket.broadcast.emit("a user connected");
      socket.on("hello", (msg) => {
        socket.emit("hello", "world!");
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io already running");
  }
  res.end();
}

export const dynamic = "force-dynamic";
