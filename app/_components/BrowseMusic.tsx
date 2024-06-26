import Link from "next/link";
import React from "react";

interface BrowseMusicProps {
    data: {
        id?: string
        collectionId?: string
        cover?: string
        artist?: string
        }
    }

function BrowseMusic({ data }: BrowseMusicProps) {
  const url = process.env.API_URL;

  return (
    <Link href={"/"} className="w-[264px] h-[148px] bg-indigo-950 rounded-lg relative overflow-hidden">
      <img
        src={`${url}/api/files/${data?.collectionId}/${data?.id}/${data?.cover}`}
        alt=""
        className="w-full h-full blur-md hue-rotate-30"     
      />
      <p className="text-white font-bold absolute top-5 left-5 text-xl">
        {data?.artist}
      </p>
      <div className="absolute w-[8rem] h-[8rem] bg-black -bottom-5 -right-5 rotate-45">
        <img
          src={`${url}/api/files/${data?.collectionId}/${data?.id}/${data?.cover}`}
          className="w-full h-full absolute"
          alt=""
        />
      </div>
    </Link>
  );
}

export default BrowseMusic;
