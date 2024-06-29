import React, { useEffect } from "react";
import Header from "../../../_components/Header";
import img from "../../public/img/ado.jpg";
import useMusic from "../../../_services/music";
import { FaPlay } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import MusicItem from "../../../_components/MusicItem";
import useArtist from "../../../_services/artist";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { showArtist } = useArtist();
  const artist = await showArtist(params.id);
  return {
    title: artist.artist,
    description: artist.artist,
  };
}

async function DetailAlbum({ params }: Props) {
  const url = process.env.API_URL;

  const { indexMusic } = useMusic();
  const { showArtist } = useArtist();

  const music = await indexMusic(params.id);
  const artist = await showArtist(params.id);

  return (
    <section className="mx-auto w-full h-[50rem] rounded-md bg-black">
      <div className="flex flex-col p-6">
        <Header />
        <div className="flex mt-8 gap-8 items-center">
          <div className="w-[232px] h-[232px]">
            <Image
              width={100}
              height={100}
              src={`${url}/api/files/${artist?.collectionId}/${artist?.id}/${artist?.cover}`}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="flex gap-3 flex-col text-white">
            <p className="">Playlist</p>
            <h3 className="font-bold text-8xl">{artist.artist}</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="mt-8 p-5 flex flex-col bg-gray-900 bg-opacity-65 w-full">
          <div className="flex items-center gap-5">
            <div className="cursor-pointer w-[58px] h-[58px]  mr-2 bg-green-500 rounded-full  flex justify-center  items-center duration-500 transition-all hover:bg-green-400">
              <FaPlay className="text-black w-5 h-5" />
            </div>
            <CiCirclePlus className="cursor-pointer hover:text-white w-9 h-9 text-gray-400" />
            <BsThreeDots className="cursor-pointer hover:text-white w-8 h-8 text-gray-400" />
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 dark:text-gray-400">
                <tr className="border-b dark:border-gray-700">
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Album
                  </th>
                </tr>
              </thead>
              <tbody>
                {music.map((data, index) => (
                  <MusicItem key={index} data={data} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailAlbum;
