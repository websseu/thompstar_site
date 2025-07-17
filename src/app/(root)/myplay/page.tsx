'use client'

import React from 'react'
import MusicMylist from '@/components/music/music-mylist'

export default function MyplayPage() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-gmarket my-12'>나의 음악 리스트</h1>
      </div>

      {/* 나의 재생목록 */}
      <MusicMylist />
    </>
  )
}
