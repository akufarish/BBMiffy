import Image, { StaticImageData } from "next/image";
import React from "react";

type OauthProps = {
  icon: StaticImageData;
  label: string;
};

function OauthItem({ icon, label }: OauthProps) {
  return (
    <button className="w-[324px]  p-2 rounded-full border border-gray-300 bg-black">
      <div className=" flex gap-4 items-center">
        <Image src={icon} width={30} height={30} alt={label} />

        <p className="text-white">{label}</p>
      </div>
    </button>
  );
}

export default OauthItem;
