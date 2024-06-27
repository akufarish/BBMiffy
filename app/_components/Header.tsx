"use client"

import React, { useEffect, useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import UserTooltip from "./UserTooltip";
import useMusic from "../_services/music";
import { Music } from "../_utils/Music";
import {  usePathname } from "next/navigation";
import useMusicClient from "../_services/music.client";
import Image from "next/image";

 function SearchInput() {
  const location = usePathname();
  const [search, setSearch] = useState("");
  const { allMusic, music, setQueryLagu, setSearchState } = useMusicClient();

  async function clearText() {
    setSearch("");
  }

  useEffect(() => {
    allMusic()
  }, [music])

  const lagu = useMemo(() => {
    return music.filter((item: Music) => {
      return search
        .toLowerCase()
        .split(" ")
        .every((word) => item.judul?.toLowerCase().includes(word));
    });
  }, [search, music]);

  useEffect(() => {
    setQueryLagu(lagu)
    setSearchState(search)
  }, [search])

  if (location == "/search") {
    return (
      <>
        <div className="relative group">
          <CiSearch className="absolute text-gray-300 group-hover:text-white w-5 h-5 top-3 left-3" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="bg-[#2a2a2a] rounded-full text-white w-[364px] h-[46px] pr-10  focus:outline-0 pl-10 focus:outline-none focus:border-[3px]"
            placeholder="What do you want to play?"
          />
          {search.length ? (
            <>
              <button onClick={clearText} className="cursor-default">
                <IoMdClose className="w-5 h-5 text-white absolute top-3 right-3" />
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

function Header() {
  const [user, setUser] = useState(false);

  function toggleUser() {
    setUser(!user);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <button className="w-[35px] h-[35px] flex justify-center items-center bg-gray-950 rounded-full">
            <MdKeyboardArrowLeft className="text-white w-5 h-5 font-bold" />
          </button>
          <button className="w-[35px] opacity-50 h-[35px] flex justify-center items-center bg-gray-950 rounded-full">
            <MdKeyboardArrowRight className="text-white w-5 h-5 font-bold" />
          </button>
          <SearchInput />
        </div>
        <div className="flex relative items-center gap-5 flex-row-reverse">
          <button onClick={toggleUser} className="">
            <img
              className="w-6 h-6 rounded-full"
              src="https://api.dicebear.com/8.x/initials/svg?seed=Farish"
              alt=""
            />
          </button>
          <button className="w-[32px] h-[32px] flex justify-center items-center bg-gray-950 rounded-full">
            <LuBell className="text-white w-5 h-5 font-bold" />
          </button>
          {user ? <UserTooltip /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Header;
