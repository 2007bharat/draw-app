"use client";
import { useEffect, useRef, useState } from "react";

export default function Canvas({ roomId }: { roomId: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      if (ctx == null) {
        return;
      }
      // ctx.imageSmoothingEnabled = false;
      // ctx.strokeStyle = "#000000"; // Pure black color
      // ctx.lineWidth = 1;
      // ctx.strokeRect(20.5, 20.5, 70, 70);
      let x = 0;
      let y = 0;
      let clicked = false;
      canvas.addEventListener("mousedown", (e: MouseEvent) => {
        clicked = true;
        x = e.clientX; //150
        y = e.clientY; //150
      });
      canvas.addEventListener("mousemove", (e: MouseEvent) => {
        if (clicked) {
          const width = e.clientX - x; //200-150
          const hieght = e.clientY - y; //200-150
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.lineWidth = 3;
          ctx.strokeRect(x, y, width, hieght);
        }
      });
      canvas.addEventListener("mouseup", (e: MouseEvent) => {
        clicked = false;
        console.log(e.clientX);
        console.log(e.clientY);
      });
    }
  }, []);
  return (
    <>
      {console.log(canvasRef)}
      <div className="w-screen h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
    </>
  );
}
