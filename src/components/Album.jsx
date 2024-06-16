import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function Album({ icon, label, isFavorite }) {
  if (isFavorite == true) {
    return (
      <Link
        to={"/album"}
        className="flex group  hover:bg-white hover:bg-opacity-5 rounded-md cursor-pointer hover:text-white duration-500 items-center gap-3 w-full h-[52px]"
      >
        <div className="w-[48px] flex justify-center items-center h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 ">
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 group-hover:text-white duration-500 font-bold">
            <p className="text-white">{label}</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        to={"/album"}
        className="flex justify-between group bg-white bg-opacity-15 hover:bg-opacity-35  rounded-md cursor-pointer hover:text-white duration-500 items-center gap-3 w-full h-[52px]"
      >
        <div className="flex items-center gap-2">
          <div className="w-[48px] flex justify-center items-center h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 ">
            {icon}
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 group-hover:text-white duration-500 font-bold">
              <p className="text-white">{label}</p>
            </div>
          </div>
        </div>
        <div className=" w-8 h-8 opacity-0 mr-2 bg-green-500 rounded-full  flex justify-center group-hover:opacity-100 items-center duration-500 transition-all hover:bg-green-400">
          <FaPlay className="text-black w-4 h-4" />
        </div>
      </Link>
    );
  }
}

export default Album;
