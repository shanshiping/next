"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  const [count, setCount] = useState(0);
  return (
    <div className="border border-black border-dashed p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg">
        <Link
          className={
            pathname === "/dashboard/about" ? "text-purple-500" : "text-black"
          }
          href="/dashboard/about"
        >
          About
        </Link>
        <Link
          className={
            pathname === "/dashboard/settings"
              ? "text-purple-500"
              : "text-black"
          }
          href="/dashboard/settings"
        >
          Settings
        </Link>
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      {children}
    </div>
  );
}
