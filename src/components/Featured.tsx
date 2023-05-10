import React from 'react'
import SongCard from './SongCard'

export default function Featured() {
  return (
    <div className='flex flex-row gap-4 mx-auto'>
        <SongCard 
        song='Single One'
        artist='Untiled Band'
        album='Unreleased Album'
        cover='./assets/img/song-one.jpeg'
        />
        <SongCard 
        song='Single Two'
        artist='Untiled Band'
        album='Unreleased Album'
        cover='./assets/img/song-two.webp'
        />
        <SongCard 
        song='Single Three'
        artist='Untiled Band'
        album='Unreleased Album'
        cover='./assets/img/song-three.png'
        />

    </div>
  )
}
