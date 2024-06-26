import { useState } from "react";
import pb from "./pocketbase";
import { Album } from "../_utils/Album";

export default function useAlbum() {

  async function getAlbum() {
      const res = await pb.collection("album").getList(1, 5, {
        expand: "artist",
      });
      console.log(res.items);
      return res.items as Album[]
  }

  return {
    getAlbum,
  };
}
