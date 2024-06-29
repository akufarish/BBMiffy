"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import useAuth from "../_services/auth";

type OauthProps = {
  icon: StaticImageData;
  label: string;
};

function OauthItem({ icon, label }: OauthProps) {
  const { oAuth } = useAuth();

  return (
    <button
      onClick={oAuth}
      className="w-[324px]  p-2 rounded-full border border-gray-300 bg-black"
    >
      <div className=" flex gap-4 items-center">
        <Image src={icon} width={30} height={30} alt={label} />

        <p className="text-white">{label}</p>
      </div>
    </button>
  );
}

export default OauthItem;
