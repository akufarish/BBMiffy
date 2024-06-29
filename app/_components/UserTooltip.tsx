import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import useAuth from "../_services/auth";

function UserTooltip() {
  const { logOut } = useAuth();

  return (
    <div className="w-[196px]  z-30 bg-[#212121] rounded-lg absolute top-12 flex flex-col">
      <Link
        href={"/"}
        className="p-3 hover:bg-white hover:bg-opacity-30 flex items-center justify-between"
      >
        <p className="text-white text-sm font-semibold font-sans">Account</p>
        <BsBoxArrowUpRight className="w-4 h-4 text-white mr-1" />
      </Link>
      <Link href={"/"} className="p-3 hover:bg-white hover:bg-opacity-30 ">
        <p className="text-white text-sm font-semibold font-sans">Profile</p>
      </Link>
      <Link
        href={"/"}
        className="p-3 hover:bg-white hover:bg-opacity-30 flex items-center justify-between"
      >
        <p className="text-white text-sm font-semibold font-sans">
          Upgrade to premium
        </p>
        <BsBoxArrowUpRight className="w-4 h-4 text-white mr-1" />
      </Link>
      <Link href={"/"} className="p-3 hover:bg-white hover:bg-opacity-30 ">
        <p className="text-white text-sm font-semibold font-sans">Settings</p>
      </Link>
      <button
        onClick={() => logOut()}
        className="p-3 w-full text-start hover:bg-white hover:bg-opacity-30"
      >
        <p className="text-white text-sm font-semibold font-sans">Logout</p>
      </button>
    </div>
  );
}

export default UserTooltip;
