"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const linkData = [
  {
    name: "Performance",
    href: "/performance",
  },
  {
    name: "Reliability",
    href: "/reliability",
  },
  {
    name: "Scale",
    href: "/scale",
  },
];
export default function Header() {
  const pathname = usePathname();
  if (!linkData.find((l) => l.href.includes(pathname))) return null;
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              className={pathname === link.href ? "text-blue-500" : ""}
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
