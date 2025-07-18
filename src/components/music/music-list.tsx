'use client'

import React from 'react'
import Image from 'next/image'
import { CirclePlay } from 'lucide-react'
import { useMusicPlayer } from '@/context/music-context'
import { getSimpleRankChange } from '@/lib/utils'

interface MusicChartItem {
  ranking: string
  title: string
  artist: string
  image: string
  prev: string
  streak: string
  streams: string
  youtubeID?: string
}

interface MusicListProps {
  chartData: MusicChartItem[]
}

export default function MusicList({ chartData }: MusicListProps) {
  const { addToTopList, currentSong } = useMusicPlayer()

  const handleMusicClick = (item: MusicChartItem) => {
    if (item.youtubeID) {
      addToTopList({
        title: item.title,
        artist: item.artist,
        image: item.image,
        youtubeID: item.youtubeID,
      })
    }
  }

  return (
    <ul className='border-t'>
      {chartData.map((item) => {
        const rankChange = getSimpleRankChange(item)
        const isCurrentPlaying = item.youtubeID === currentSong?.youtubeID

        return (
          <li
            key={item.ranking}
            className='music__list group cursor-pointer'
            onClick={() => handleMusicClick(item)}
          >
            <div className='music__image'>
              <Image src={item.image} width={80} height={80} alt={item.title} />
              <div
                className={`bg group-hover:opacity-100 ${
                  isCurrentPlaying ? 'opacity-100 bg-red-500/70' : ''
                }`}
              >
                <CirclePlay />
              </div>
            </div>
            <div className='music__ranking'>
              <span>{item.ranking}</span>
              <span className={`text-xs ${rankChange.color}`}>
                {rankChange.label}
              </span>
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
