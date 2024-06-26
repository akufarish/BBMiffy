import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function SearchBar() {
  return (
    <div className="flex group mt-3 hover:text-white duration-500 items-center gap-3 w-[292px] h-[40px]">
      <div className="flex w-full justify-between">
        <FaSearch className="text-gray-400 w-4 h-4 hover:text-white cursor-pointer hover:w-5 hover:h-5 duration-500" />
        <div className="flex gap-2 group  cursor-pointer items-center">
          <p className="text-gray-400 group-hover:text-white duration-500">
            Recents
          </p>
          <RxHamburgerMenu className="text-gray-400 w-5 h-5 mr-6 group-hover:text-white duration-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
