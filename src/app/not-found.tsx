// app/not-found.tsx
"use client";
import Link from "next/link";
import { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[var(--Tint-6)] to-[var(--Tint-5)] text-white font-sans overflow-hidden relative">
      {/* Background Bubbles */}
      <div
        className="bubble"
        style={{ top: "15vh", left: "15vw", height: "22vmin", width: "22vmin" }}
      ></div>
      <div
        className="bubble"
        style={{ top: "20vh", left: "38vw", height: "10vmin", width: "10vmin" }}
      ></div>
      <div
        className="bubble"
        style={{
          top: "12vh",
          right: "30vw",
          height: "13vmin",
          width: "13vmin",
        }}
      ></div>
      <div
        className="bubble"
        style={{
          top: "25vh",
          right: "18vw",
          height: "18vmin",
          width: "18vmin",
        }}
      ></div>
      <div
        className="bubble"
        style={{
          top: "60vh",
          right: "18vw",
          height: "28vmin",
          width: "28vmin",
        }}
      ></div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-lg md:text-xl mb-8">
          صفحه مد نظر یافت نشد
          <br />
          مشکل دارید؟
        </p>
        <Link href="/" className="mt-8 underline">
          بازگشت به خانه
        </Link>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(var(--Tint-1), var(--Shade-4));
          box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
