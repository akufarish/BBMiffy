"use client"

import React from "react";
import { FaPlay } from "react-icons/fa";
import useMusic from "../_services/music";
import { createStore, useAtom } from "jotai";
import { dataMusik, lagus } from "../_atom/atom";
import useMusicClient from "../_services/music.client";


export interface Music {
    data: {
        id?: string
        musik?: string
        collectionId?: string
        cover?: string
        judul?: string
        expand?: {
            artist?: {
                artist: string
            }
            album?: {
                album: string
            }
    }
    }
}

function MusicItem({ data }: Music) {
  
    const url = "http://127.0.0.1:8090";
  const { showMusic, setLaguss} = useMusicClient();
  // const { showMusic, laguStore } = useMusic();

  function playMusic(music: string | undefined, id: string | undefined) {
    const musicUrl = `${url}/api/files/${data.collectionId}/${data.id}/${music}`;
    showMusic(id);
    console.log(musicUrl);
    
    const audio = new Audio(musicUrl);
    console.log(audio);
    setLaguss(audio)
    
    audio.play();
    console.log(audio.duration);
    // audio.pause()
  }

  return (
    <tr className="group w-full hover:bg-white hover:bg-opacity-5">
      <th
        scope="row"
        className="px-6 py-4 w-12 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <p className="group-hover:hidden">1</p>
        <button
          onClick={() => playMusic(data?.musik, data?.id)}
          className="group-hover:flex hidden"
        >
          <FaPlay className=" w-3 h-3 text-white " />
        </button>
      </th>
      <td className="px-6 py-4 group-hover:text-white">
        <div className="flex gap-3 items-center">
          <div className="w-[40px] h-[40px]">
            <img
              className="rounded-md"
              src={`${url}/api/files/${data.collectionId}/${data.id}/${data.cover}`}
              alt=""
            />
          </div>
          <p className="">{data.judul}</p>
        </div>
      </td>
      <td className="px-6 py-4 group-hover:text-white">
        {data?.expand?.album?.album}
      </td>
    </tr>
  );
}

export default MusicItem;
