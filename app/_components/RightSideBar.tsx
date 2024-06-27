"use client"

import React from "react";
import useMusic from "../_services/music";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import useMusicClient from "../_services/music.client";

function RightSideBar() {
  const url = "";
  const { lagu, played, setPlayed } = useMusicClient();

  function close() {
    setPlayed(false);
  }

  return (
    <div className="bg-black w-[324px] h-screen">
      <div className="flex gap-5 flex-col p-6">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold">{lagu?.expand?.artist?.artist}</p>
          <div className="flex gap-5 items-center">
            <BsThreeDots className="cursor-pointer hover:text-white w-5 h-5 text-gray-400" />
            <button onClick={close} className="">
              <IoCloseSharp className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
        <Image
        width={288}
        height={288}
          src={`${url}/api/files/${lagu?.collectionId}/${lagu.id}/${lagu?.cover}`}
          className="w-[288px] h-[288px] rounded-lg "
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="text-white text-3xl font-bold">{lagu?.judul}</h3>
          <p className="text-gray-400">{lagu?.expand?.artist?.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
