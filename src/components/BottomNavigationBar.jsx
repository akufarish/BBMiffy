import React from "react";
import img from "../../public/img/ado.jpg";
import {
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeDown,
} from "react-icons/fa";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { PiDesktopTower } from "react-icons/pi";
import useMusic from "../services/music";
import { isPlayed } from "../atom/atom";

function BottomNavigationBar() {
  const { lagu, played, setPlayed, laguss } = useMusic();

  async function pause() {
    console.log(laguss);

    if (played == true) {
      laguss.pause();
      setPlayed(false);
    } else {
      laguss.play();
      setPlayed(true);
    }
  }

  const url = import.meta.env.VITE_API_URL;
  return (
    <section className="w-full h-[72px] bg-black">
      <div className="flex px-6 justify-between items-center p-2">
        <div className="flex items-center gap-5">
          <img
            src={`${url}/api/files/${lagu.collectionId}/${lagu.id}/${lagu.cover}`}
            alt=""
            className="w-[56px] h-[56px] rounded-md"
          />
          <div className="flex flex-col">
            <p className="text-white font-bold hover:underline cursor-pointer text-sm">
              {lagu.judul}
            </p>
            <p className="text-gray-400 text-sm hover:underline hover:text-white cursor-pointer">
              Lorem, ipsum.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <FaStepBackward className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          {played ? (
            <button
              onClick={pause}
              className="w-[35px] h-[35px] hover:w-[38px] hover:h-[38px] flex items-center justify-center bg-white rounded-full"
            >
              <FaPause className="w-4 h-4 text-black" />
            </button>
          ) : (
            <button
              onClick={pause}
              className="w-[35px] h-[35px] hover:w-[38px] hover:h-[38px] flex items-center justify-center bg-white rounded-full"
            >
              <FaPlay className="w-4 h-4 text-black" />
            </button>
          )}

          <button className="w-[32px] h-[32px] flex justify-center items-center">
            <FaStepForward className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-[32px] h-[32px]">
            <MdOutlineSmartDisplay className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="w-[32px] h-[32px]">
            <TbMicrophone2 className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="w-[32px] h-[32px]">
            <HiOutlineQueueList className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="w-[32px] h-[32px]">
            <PiDesktopTower className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
          <button className="w-[32px] h-[32px]">
            <FaVolumeDown className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BottomNavigationBar;
