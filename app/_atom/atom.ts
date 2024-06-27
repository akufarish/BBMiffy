import { atom } from "jotai";
import { Music } from "../_utils/Music";

const dataMusik = atom<Music>({});
const isPlayed = atom(false);
const laguPlayed = atom(null);
const lagus = atom<HTMLAudioElement | null>(null);
const searchLagu = atom<Music[]>([])
const searchInput = atom("")

export { dataMusik, isPlayed, laguPlayed, lagus, searchLagu, searchInput };
