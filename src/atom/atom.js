import { atom } from "jotai";

const dataMusik = atom({});
const isPlayed = atom(false);
const laguPlayed = atom();
const lagus = atom(null);

export { dataMusik, isPlayed, laguPlayed, lagus };
