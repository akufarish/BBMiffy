import React from "react";
import { Link } from "react-router-dom";

function SideBarButton({ icon, label }) {
  return (
    <Link
      to={"/"}
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
