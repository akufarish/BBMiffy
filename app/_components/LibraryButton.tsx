import Link from "next/link";
import React from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

interface libraryButtonProps {
  label: string;
}

function LibraryButton({ label }: libraryButtonProps) {
  return (
    <div className="flex items-center justify-between gap-3 w-[292px] h-[40px]">
      <Link href={"/"} className="flex group items-center gap-5">
        <VscLibrary className="cursor-pointer text-gray-400 w-6 h-6 group-hover:text-white duration-500" />
        <div className="text-gray-400 group-hover:text-white duration-500 font-bold">
          {label}
        </div>
      </Link>

      <div className="flex gap-3 mr-6">
        <FaPlus className="text-gray-400 w-5 h-5 hover:text-white cursor-pointer duration-500" />
        <FaArrowRight className="text-gray-400 w-5 h-5  hover:text-white cursor-pointer duration-500" />
      </div>
    </div>
  );
}

export default LibraryButton;
