import pb from "./pocketbase";
import { createStore, useAtom } from "jotai";
import { dataMusik, isPlayed, lagus } from "../_atom/atom";
import { Music } from "../_utils/Music";
import { Audio } from "../_utils/Audio";

export default function useMusicClient() {
    const [lagu, setLagu] = useAtom(dataMusik);
    const [played, setPlayed] = useAtom(isPlayed);
    const [laguss, setLaguss] = useAtom<HTMLAudioElement | null>(lagus);  

  async function indexMusic(id: string) {
      const data = await pb.collection("music").getFullList({
        filter: `artist='${id}'`,
        expand: "album",
      });
      console.log(data);
      return data as Music[]
  }

  async function allMusic() {
      const data = await pb.collection("music").getFullList();
      console.log(data);
      return data as Music[]
    }

  async function showMusic(id?: string) {
    if(!id) return

      const data = await pb.collection("music").getOne(id, {
        expand: "artist",
      });
      console.log(data);
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
    setPlayed
  };
}
