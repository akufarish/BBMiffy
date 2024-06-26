import { useState } from "react";
import pb from "./pocketbase";
import { useAtom } from "jotai";
import { dataMusik, isPlayed, lagus } from "../atom/atom";

export default function useMusic() {
  const [music, setMusic] = useState([]);
  const [lagu, setLagu] = useAtom(dataMusik);
  const [played, setPlayed] = useAtom(isPlayed);
  const [laguss, setLaguss] = useAtom(lagus);

  async function indexMusic(id) {
    try {
      const data = await pb.collection("music").getFullList({
        filter: `artist='${id}'`,
        expand: "album",
      });
      console.log(data);
      setMusic(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function allMusic() {
    try {
      const data = await pb.collection("music").getFullList();
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
    setLaguss,
    laguss,
    allMusic,
  };
}
