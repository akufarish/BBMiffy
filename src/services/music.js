import { useState } from "react";
import pb from "./pocketbase";
import { useAtom } from "jotai";
import { dataMusik, isPlayed } from "../atom/atom";

export default function useMusic() {
  const [music, setMusic] = useState([]);
  const [lagu, setLagu] = useAtom(dataMusik);
  const [played, setPlayed] = useAtom(isPlayed);

  async function indexMusic(id) {
    try {
      const data = await pb.collection("music").getFullList({
        filter: `artist='${id}'`,
      });
      console.log(data);
      setMusic(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function showMusic(id) {
    try {
      const data = await pb.collection("music").getOne(id, {
        expand: "artist",
      });
      console.log(data);
      setLagu(data);
      setPlayed(true);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    indexMusic,
    music,
    showMusic,
    lagu,
    played,
    setPlayed,
  };
}
