import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

export interface Album {
  data: {
    id?: string;
    collectionId?: string;
    cover?: string;
    judul?: string;
    album?: string;
    expand?: {
      artist?: {
        artist: string;
      };
    };
  };
}

function AlbumVertical({ data }: Album) {
  const url = process.env.API_URL;

  return (
    <Link href={"/"} className="w-[229px] h-[283px] group">
      <div className="flex flex-col gap-3 relative">
        <Image
          width={205}
          height={205}
          src={`${url}/api/files/${data.collectionId}/${data.id}/${data.cover}`}
          className="w-[205px] h-[205px] rounded-md"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-white font-bold ">{data?.album}</p>
          <p className="text-gray-400 line-clamp-1">
            {data?.expand?.artist?.artist}
          </p>
        </div>
        <div className="absolute w-12 h-12 opacity-0  bg-green-500 rounded-full bottom-16 right-8 flex justify-center group-hover:opacity-100 items-center duration-500 transition-all hover:bg-green-400">
          <FaPlay className="text-black w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

export default AlbumVertical;
