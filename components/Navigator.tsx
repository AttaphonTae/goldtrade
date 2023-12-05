import Image from 'next/image'
import React from 'react'

export default function Navigator() {
  return (
    <div className='bg-slate-800 px-4 py-2'>
        <div className='flex gap-4 items-center'>
        <Image alt='icon' src='/images/tradericon.jpeg' width={50} height={50} className='rounded-full' />
        <p className='text-white font-bold italic text-xl' >Harry Trader</p>
        </div>
    </div>
  )
}
