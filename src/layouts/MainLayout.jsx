import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import BottomNavigationBar from "../components/BottomNavigationBar";
import RightSideBar from "../components/RightSideBar";
import { isPlayed } from "../atom/atom";
import useMusic from "../services/music";

function MainLayout() {
  const { played } = useMusic();

  return (
    <div className="min-h-full">
      <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0">
        <SideBar />
      </div>
      {played ? (
        <div className=" flex w-60 flex-col fixed inset-y-0 right-20 z-20">
          <RightSideBar />
        </div>
      ) : (
        <></>
      )}

      <div className="lg:pl-[19rem]  h-full flex flex-col flex-1">
        <main className="flex flex-col">
          <div className="px-2 sm:px-8 pt-4 py-32 h-screen ">
            <Outlet />
          </div>
        </main>
      </div>
      <div className="hidden lg:flex lg:w-full lg:flex-col lg:fixed lg:-bottom-2 p-2 z-30">
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default MainLayout;
