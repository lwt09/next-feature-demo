"use client";
import React, { useEffect } from "react";
import io from "socket.io-client";

export default function Page() {
  useEffect(() => {
    fetch("/api/socket").finally(() => {
      const socket = io();

      socket.on("connect", () => {
        console.log("connect");
        socket.emit("hello");
      });

      socket.on("disconnect", () => {
        console.log("disconnect");
      });
    });
  }, []);
  return <div>page</div>;
}
