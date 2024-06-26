"use client"

import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface Artist {
    data: {
    id?: string
    collectionId?: string
    cover?: string
    artist?: string
    }
}

function Artist({ data }: Artist) {
  const url = process.env.API_URL;

  return (
    <Link href={`/album/${data?.id}`} className="w-[229px] group h-[283px]">
      <div className="flex flex-col relative">
        <img
          src={`${url}/api/files/${data.collectionId}/${data.id}/${data.cover}`}
          className="w-[205px] h-[205px] rounded-full"
          alt=""
        />
        <p className="text-white font-bold">{data?.artist}</p>
        <p className="text-gray-400 ">Artist</p>
        <div className="absolute w-12 h-12 opacity-0  bg-green-500 rounded-full bottom-14 right-8 flex justify-center group-hover:opacity-100 items-center duration-500 transition-all hover:bg-green-400">
          <FaPlay className="text-black w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

export default Artist;
