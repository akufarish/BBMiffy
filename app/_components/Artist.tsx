"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCopy } from "react-icons/bi";
import { BsBroadcast, BsPersonPlus } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { ImEmbed } from "react-icons/im";
import { MdIosShare, MdOutlineReport } from "react-icons/md";

interface Artist {
  data: {
    id?: string;
    collectionId?: string;
    cover?: string;
    artist?: string;
  };
}

function Artist({ data }: Artist) {
  const url = "http://127.0.0.1:8090";

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link href={`/album/${data?.id}`} className="w-[229px] group h-[283px]">
          <div className="flex flex-col relative">
            <Image
              width={205}
              height={205}
              src={`${url}/api/files/${data.collectionId}/${data.id}/${data.cover}`}
              className="w-[205px] h-[205px] rounded-full"
              alt=""
            />
            <p className="text-white font-bold">{data?.artist}</p>
            <p className="text-gray-400 ">Artist</p>
            <div className="absolute w-12 h-12 opacity-0  bg-green-500 rounded-full bottom-14 right-8 flex justify-center group-hover:opacity-100 items-center duration-500 transition-all hover:bg-green-400">
              <FaPlay className="text-black w-5 h-5" />
            </div>
          </div>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[182px] bg-bg text-white border-none">
        <ContextMenuItem className="context-menu-parent">
          <BsPersonPlus className="context-menu-icon" />
          <span>Follow</span>
        </ContextMenuItem>
        <ContextMenuItem className="context-menu-parent">
          <BsBroadcast className="context-menu-icon" />
          <span>Go to artist studio</span>
        </ContextMenuItem>
        <ContextMenuItem className="context-menu-parent">
          <MdOutlineReport className="context-menu-icon" />
          Report
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="context-menu-parent">
            <MdIosShare className="context-menu-icon" />
            <span>Share</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 bg-bg text-white border-none">
            <ContextMenuItem className="context-menu-parent">
              <BiCopy className="context-menu-icon" />
              <span>Copy link to artist</span>
            </ContextMenuItem>
            <ContextMenuItem className="context-menu-parent">
              <ImEmbed className="context-menu-icon" />
              <span>Embed artist</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default Artist;
