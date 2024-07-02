"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface SideBarItemProps {
  icon: ReactNode;
  label: string;
  link: string;
}

function SideBarItem({ icon, label, link = "/" }: SideBarItemProps) {
  const pathName = usePathname();
  const isActive = pathName.startsWith(link);
  const activeClass = isActive
    ? "text-white group-hover:text-white duration-500 font-bold"
    : "text-gray-400 group-hover:text-white duration-500 font-bold";

  return (
    <Link
      href={link}
      className="flex group hover:text-white duration-500 items-center gap-3 w-[292px] h-[40px]"
    >
      <div
        className={
          isActive ? "text-white" : "text-gray-400 group-hover:text-white"
        }
      >
        {icon}
      </div>
      <p className={activeClass}>{label}</p>
    </Link>
  );
}

export default SideBarItem;
