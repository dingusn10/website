import React from 'react'
import Featured from './Featured'

export default function home() {
  return (
    <div className='overflow-hidden h-screen w-screen bg-gradient-to-br from-amber-900 to-neutral-700 bg-center bg-cover'>
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-stone-900 opacity-70 h-screen w-screen'></div>
        <div>
            <Featured />
        </div>
    </div>
  )
}
