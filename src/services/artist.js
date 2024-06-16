import { useState } from "react";
import pb from "./pocketbase";

export default function useArtist() {
  const [artist, setArtist] = useState([]);

  async function getArtist() {
    try {
      const data = await pb.collection("artist").getList(1, 5);
      console.log(data);
      setArtist(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function showArtist(id) {
    try {
      const data = await pb.collection("artist").getOne(`${id}`);
      console.log(data);
      setArtist(data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    artist,
    getArtist,
    showArtist,
  };
}
