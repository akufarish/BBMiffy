import pb from "./pocketbase";
import { createStore, useAtom } from "jotai";
import { dataMusik, isPlayed, lagus } from "../_atom/atom";
import { Music } from "../_utils/Music";

export default function useMusic() {
  const laguStore = createStore();
  const playedStore = createStore();
  const lagussStore = createStore();

  async function indexMusic(id: string) {
    const data = await pb.collection("music").getFullList({
      filter: `artist='${id}'`,
      expand: "album",
    });
    return data as Music[];
  }

  async function allMusic() {
    const data = await pb.collection("music").getFullList();
    return data as Music[];
  }

  async function showMusic(id?: string) {
    if (!id) return;

    const data = await pb.collection("music").getOne(id, {
      expand: "artist",
    });
    laguStore.set(dataMusik, data);
    playedStore.set(isPlayed, true);
  }

  return {
    indexMusic,
    showMusic,
    allMusic,
    lagussStore,
    playedStore,
    laguStore,
  };
}
