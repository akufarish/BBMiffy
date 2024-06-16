import React from "react";
import SideBarButton from "./SideBarButton";
import { FaHeart, FaHome, FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import LibraryButton from "./LibraryButton";
import SearchBar from "./SearchBar";
import Album from "./Album";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-black w-[324px] h-screen">
      <div className="flex gap-5  bg-gray-950 rounded-lg p-6 flex-col flex-1">
        <Link
          to={"/"}
          className="flex group hover:text-white duration-500 items-center gap-3 w-[292px] h-[40px]"
        >
          <div className="">
            <AiOutlineHome className="text-gray-400 w-6 h-6 group-hover:text-white duration-500" />
          </div>
          <p className="text-gray-400 group-hover:text-white duration-500 font-bold">
            Home
          </p>
        </Link>
        <Link
          to={"/search"}
          className="flex group hover:text-white duration-500 items-center gap-3 w-[292px] h-[40px]"
        >
          <FaSearch className="text-gray-400 w-6 h-6 group-hover:text-white duration-500" />
          <p className="text-gray-400 group-hover:text-white duration-500 font-bold">
            Search
          </p>
        </Link>
      </div>
      <div className="flex  bg-gray-950  rounded-lg mx-5 flex-col">
        <LibraryButton label={"Your Library"} />
        <SearchBar />

        <div className="mt-5 flex flex-col gap-2">
          <Album
            isFavorite={true}
            icon={<FaHeart className="text-white w-4 h-4" />}
            label={"Liked Song"}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
