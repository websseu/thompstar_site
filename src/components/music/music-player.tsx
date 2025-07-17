'use client'

import React from 'react'
import YouTube from 'react-youtube'
import { useMusicPlayer } from '@/context/music-context'
import { StepBack, StepForward, CirclePlay, ListMusic } from 'lucide-react'
import { useRouter } from 'next/navigation'

const defaultOpts = {
  width: '500',
  height: '281',
  playerVars: {
    autoplay: 1,
  },
}

export default function MusicPlayer() {
  const { currentSong, nextSong, prevSong } = useMusicPlayer()
  const router = useRouter()

  if (!currentSong) return null

  return (
    <div className='music__player'>
      {/* 유튜브 플레이어 */}
      <div className='music__youtube'>
        <YouTube
          videoId={currentSong.youtubeID}
          opts={defaultOpts}
          onEnd={nextSong}
        />
      </div>

      <div className='music__control'>
        <div className='left'>
          <p>{currentSong.title}</p>
          <p>{currentSong.artist}</p>
        </div>
        <div className='center'>
          <button onClick={prevSong} className='btn'>
            <StepBack className='w-6 h-6' />
          </button>
          <button className='btn'>
            <CirclePlay className='w-7 h-7' />
          </button>
          <button onClick={nextSong} className='btn'>
            <StepForward className='w-6 h-6' />
          </button>
        </div>
        <div className='right'>
          <button
            className='bg-accent p-2 rounded-full cursor-pointer'
            onClick={() => router.push('/myplay')}
          >
            <ListMusic className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
