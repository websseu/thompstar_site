import React from 'react'
import Image from 'next/image'
import { useMusicPlayer } from '@/context/music-context'
import { CirclePlay } from 'lucide-react'

export default function MusicMylist() {
  const { playlist, setCurrentSongIndex } = useMusicPlayer()

  return (
    <ul className='border-t'>
      {playlist.map((item, index) => {
        return (
          <li
            key={index}
            className='music__list group cursor-pointer'
            onClick={() => setCurrentSongIndex(index)}
          >
            <div className='music__image'>
              <Image src={item.image} width={80} height={80} alt={item.title} />
              <div className='bg group-hover:opacity-100'>
                <CirclePlay />
              </div>
            </div>
            <div className='music__ranking'>
              <span>{index + 1}</span>
            </div>
            <div className='music__title'>
              <p>{item.title}</p>
              <p>{item.artist}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
