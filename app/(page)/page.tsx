import React from "react";
import Header from "../_components/Header";
import Chip from "../_components/Chip";
import Album from "../_components/Album";
import { FaThumbsUp } from "react-icons/fa";
import Artist from "../_components/Artist";
import AlbumVertical from "../_components/AlbumVertical";
import useArtist from "../_services/artist";
import useAlbum from "../_services/album";
import Link from "next/link";

async function HomePage() {
  const { getArtist } = useArtist();
  const { getAlbum } = useAlbum();

  const artist = await getArtist();
  const album = await getAlbum();

  return (
    <div className="mx-auto w-full rounded-md bg-black">
      <div className="flex flex-col p-6 gap-5">
        <Header />
        <div className="flex gap-2">
          <Chip isActive={true} label={"All"} />
          <Chip isActive={false} label={"Music"} />
          <Chip isActive={false} label={"Podcasts"} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[...Array(8)].map((data, index) => (
            <Album
              isFavorite={false}
              key={index}
              icon={<FaThumbsUp className="text-white w-4 h-4" />}
              label={`Daily mix ${index}`}
            />
          ))}
        </div>
        <section className="flex flex-col mt-8">
          <div className="flex w-full justify-between">
            <Link
              href={"/"}
              className="text-white font-bold text-xl hover:underline-offset-4 hover:underline "
            >
              Your favorite artists
            </Link>
            <Link href={"/"} className="text-gray-400 font-bold">
              Show all
            </Link>
          </div>

          <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-5 mt-5">
            {artist.map((data, index) => (
              <Artist key={index} data={data} />
            ))}
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <div className="flex w-full justify-between">
            <Link
              href={"/"}
              className="text-white font-bold text-xl hover:underline-offset-4 hover:underline "
            >
              Jump back in
            </Link>
            <Link href={"/"} className="text-gray-400 font-bold">
              Show all
            </Link>
          </div>

          <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-5 mt-5">
            {album.map((data, index) => (
              <AlbumVertical key={index} data={data} />
            ))}
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <div className="flex w-full justify-between">
            <Link
              href={"/"}
              className="text-white font-bold text-xl hover:underline-offset-4 hover:underline "
            >
              Recently played
            </Link>
            <Link href={"/"} className="text-gray-400 font-bold">
              Show all
            </Link>
          </div>

          <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-5 mt-5">
            {album.map((data, index) => (
              <AlbumVertical key={index} data={data} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
