import React, { useEffect } from "react";
import Header from "../_components/Header";
import Artist from "../_components/Artist";
import BrowseMusic from "../_components/BrowseMusic";
import useArtist from "../_services/artist";
import Link from "next/link";
import { Metadata } from "next";

export function generateMetadata() : Metadata {
    return {
        title: "Search",
        description: "Search page"
    }
}

async function Search() {

const {getArtist} = useArtist()

  const artist = await getArtist()

  return (
    <div className="mx-auto w-full h-[60rem] rounded-md bg-black">
      <div className="flex flex-col p-6">
        <Header />
        <section className="flex flex-col mt-8">
          <div className="flex w-full justify-between">
            <Link href={"/"} className="text-white font-bold text-xl hover:underline-offset-4 hover:underline ">
              Recent searches
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-5 mt-5">
              {artist?.map((data, index) => (
                <Artist key={index} data={data} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <div className="flex w-full justify-between">
            <Link href={"/"} className="text-white font-bold text-xl hover:underline-offset-4 hover:underline ">
              Browse all
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 mt-5">
            {artist.map((data, index) => (
              <BrowseMusic key={index} data={data} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Search;
