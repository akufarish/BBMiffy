import React from "react";
import { FaHeart, FaHome, FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import LibraryButton from "./LibraryButton";
import SearchBar from "./SearchBar";
import Album from "./Album";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import SideBarItem from "./SideBarItem";

function SideBar() {
  return (
    <div className="bg-black w-[324px] h-screen">
      <div className="flex gap-5  bg-gray-950 rounded-lg p-6 flex-col flex-1">
        <SideBarItem
          icon={<AiOutlineHome className="sidebar-icon" />}
          label="Home"
          link="/home"
        />
        <SideBarItem
          icon={<FaSearch className="sidebar-icon" />}
          label="Search"
          link="/search"
        />
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
