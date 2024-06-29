import Link from "next/link";
import React, { ReactNode } from "react";

interface sideBarButtonProps {
  icon: ReactNode;
  label: string;
}

function SideBarButton({ icon, label }: sideBarButtonProps) {
  return (
    <Link
      href={"/"}
      className="flex group hover:text-white duration-500 items-center gap-3 w-[292px] h-[40px]"
    >
      <div className="">{icon}</div>
      <div className="text-gray-400 group-hover:text-white duration-500 font-bold">
        {label}
      </div>
    </Link>
  );
}

export default SideBarButton;
