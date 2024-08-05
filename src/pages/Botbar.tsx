import Link from 'next/link'
import React from 'react'

const Botbar = () => {
  return (
    <div className='absolute bottom-0 w-full flex flex-wrap items-center gap-2 py-5'>
      <div className='w-1/2 p-[1.5px] bg-latte-mauve'></div>
      <Link
        href='#jargon'
        className='bg-black px-3 py-1 text-white'
      >
        Jargon
      </Link>
      <div className='flex-1 p-[1.5px] bg-latte-mauve'></div>
      <Link
        href='#'
        className='bg-black px-3 py-1 text-white'
      >
        Performance
      </Link>
      <div className='flex-1 p-[1.5px] bg-latte-mauve'></div>
      <Link
        href='#'
        className='bg-black px-3 py-1 text-white'
      >
        Recap
      </Link>
      <div className='flex-1 p-[1.5px] bg-latte-mauve'></div>
      <Link
        href='#'
        className='bg-black px-3 py-1 text-white'
      >
        GDrive
      </Link>
      <div className='flex-1 p-[1.5px] bg-latte-mauve'></div>
    </div>
  )
}

export default Botbar
