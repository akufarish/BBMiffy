import pb from "./pocketbase";
import { useAtom } from "jotai";
import { dataMusik, isPlayed, lagus } from "../_atom/atom";
import { Music } from "../_utils/Music";

export default function useMusic() {
  const [lagu, setLagu] = useAtom(dataMusik);
  const [played, setPlayed] = useAtom(isPlayed);
  const [laguss, setLaguss] = useAtom(lagus);

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
      setLagu(data);
      setPlayed(true);
  }

  return {
    indexMusic,
    showMusic,
    lagu,
    played,
    setPlayed,
    setLaguss,
    laguss,
    allMusic,
  };
}
