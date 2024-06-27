"use client"

import React from 'react'
import useMusicClient from '../_services/music.client'
import SongsList from './SongsList'
import TopSong from './TopSong'

function SearchItem() {
    const {queryLagu, searchState} = useMusicClient()

  return (
    <section className='w-full'>
      {searchState ? <>
        <h3 className="mb-5 text-white font-bold text-xl hover:underline-offset-4 hover:underline">Top result</h3>
        <div className="flex justify-between w-full">
            {queryLagu[0] ? <TopSong data={queryLagu[0]} /> : <>
            <p className="text-white">Not found</p></>  }
            
        <div className="flex flex-col">
        {queryLagu.map((data, index) => (
            <div className="flex flex-col">
                <SongsList data={data} index={index} />
            </div>
      ))}
      </div>
      </div></> : <></>}
    </section>
  )
}

export default SearchItem
