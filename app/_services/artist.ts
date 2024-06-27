import pb from "./pocketbase";
import { Artist } from "../_utils/Artist";

export default function useArtist() {

  async function getArtist() {
      const data = await pb.collection("artist").getList(1, 5);
      return data?.items as Artist[]
  }

  async function showArtist(id: string) {
      const data = await pb.collection("artist").getOne(`${id}`);
      return data as Artist
  }

  return {
    getArtist,
    showArtist,
  };
}
