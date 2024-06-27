import pb from "./pocketbase";
import { createStore, useAtom } from "jotai";
import { dataMusik, isPlayed, lagus, searchInput, searchLagu } from "../_atom/atom";
import { Music } from "../_utils/Music";
import { Audio } from "../_utils/Audio";
import { useState } from "react";

export default function useMusicClient() {
  const [music, setMusic] = useState<Music[]>([]);
    const [lagu, setLagu] = useAtom(dataMusik);
    const [played, setPlayed] = useAtom(isPlayed);
    const [laguss, setLaguss] = useAtom<HTMLAudioElement | null>(lagus);  
    const [queryLagu, setQueryLagu] = useAtom<Music[]>(searchLagu)
    const [ searchState, setSearchState ]= useAtom(searchInput)

  async function indexMusic(id: string) {
      const data = await pb.collection("music").getFullList({
        filter: `artist='${id}'`,
        expand: "album",
      });
      setMusic(data)
      return data as Music[]
  }

  async function allMusic() {
      const data = await pb.collection("music").getFullList({
        expand: "artist"
      });
      setMusic(data)
      return data as Music[]
    }

  async function showMusic(id?: string) {
    if(!id) return

      const data = await pb.collection("music").getOne(id, {
        expand: "artist",
      });
      setLagu(data)
      setPlayed(true)
  }

  return {
    indexMusic,
    showMusic,
    allMusic,
    setLagu,
    lagu,
    laguss,
    setLaguss,
    played,
    setPlayed,
    music,
    setMusic,
    queryLagu,
    setQueryLagu,
    searchState,
    setSearchState
  };
}
