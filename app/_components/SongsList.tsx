import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

export interface Music {
  index: number;

  data: {
    id?: string;
    musik?: string;
    collectionId?: string;
    cover?: string;
    judul?: string;
    expand?: {
      artist?: {
        artist?: string;
      };
      album?: {
        album: string;
      };
    };
  };
}

function SongsList({ data, index }: Music) {
  const url = "http://127.0.0.1:8090";

  return (
    <section className="flex flex-col">
      <div className="w-[627px] h-[56px] flex items-center gap-5 group hover:bg-white hover:bg-opacity-20 px-5">
        <div className="relative w-[40px] h-[40px] ">
          <FaPlay className="w-4 h-4 text-white absolute top-3 left-3 opacity-0 group-hover:opacity-100" />
          <Image
            width={40}
            height={40}
            src={`${url}/api/files/${data.collectionId}/${data.id}/${data.cover}`}
            alt="cover"
            className="rounded-lg  group-hover:opacity-50"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-white">{data.judul}</p>
          <p className="text-gray-400">{data.expand?.artist?.artist}</p>
        </div>
      </div>
    </section>
  );
}

export default SongsList;
