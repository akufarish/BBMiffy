import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import useMusicClient from '../_services/music.client'

interface Music {
  
      data: {
          id?: string
          musik?: string
          collectionId?: string
          cover?: string
          judul?: string
          expand?: {
              artist?: {
                  artist?: string
              }
              album?: {
                  album: string
              }
      }
      }
  }

function TopSong({data}: Music) {
    const url = "http://127.0.0.1:8090";

    const { showMusic, setLaguss, laguss} = useMusicClient();

    function playMusic(music: string | undefined, id: string | undefined) {
        const musicUrl = `${url}/api/files/${data?.collectionId}/${data?.id}/${music}`;
        showMusic(id);
    
        if(laguss)  {
          laguss.pause()
        }
        
        const audio = new Audio(musicUrl);
        setLaguss(audio)
        audio.load()
        audio.play();
        // audio.pause()
      }

  return (
    <div className="w-[415px] cursor-pointer group h-[225px] bg-bg p-6 relative rounded-md flex flex-col gap-4">
        <Image width={92} height={92} src={`${url}/api/files/${data?.collectionId}/${data?.id}/${data?.cover}`} alt='top song' className='rounded-md' />
        <div className="flex flex-col">
    <p className='text-white font-bold text-3xl line-clamp-1'>{data?.judul}</p>
    <div className="flex gap-2">
        <p className="text-gray-400">song</p>
        <p className="text-white">{data?.expand?.artist?.artist}</p>
    </div>
        </div>
        <div onClick={() => playMusic(data?.musik, data?.id)} className="absolute w-12 h-12 opacity-0  bg-green-500 rounded-full bottom-8 right-8 flex justify-center group-hover:opacity-100 items-center duration-500 transition-all hover:bg-green-400">
          <FaPlay  className="text-black w-5 h-5" />
        </div>
        </div>
  )
}

export default TopSong
