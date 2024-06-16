import { useState } from "react";
import pb from "./pocketbase";

export default function useAlbum() {
  const [album, setAlbum] = useState([]);

  async function getAlbum() {
    try {
      const data = await pb.collection("album").getList(1, 5, {
        expand: "artist",
      });
      console.log(data.items);
      setAlbum(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    album,
    getAlbum,
  };
}
