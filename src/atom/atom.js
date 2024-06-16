import { atom } from "jotai";

const dataMusik = atom({});
const isPlayed = atom(false);
const laguPlayed = atom();

export { dataMusik, isPlayed, laguPlayed };
