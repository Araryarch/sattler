import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Design = () => {
  return (
    <div
      className={`${inter.className} containers relative w-full min-h-screen bg-latte-base`}
    >
      {/* Navbar */}
      <nav className='w-full p-5 flex justify-between fixed backdrop-blur-sm border-b-2 border-latte-mauve'>
        <div className='logo'>
          <h1 className='font-bold text-md xl:text-2xl text-latte-text'>
            ELLIE SATTLER
          </h1>
        </div>
        <div className='desc'>
          <h1 className='font-bold text-sm xl:text-xl text-latte-text'>
            UNIT 2 - Jurrasic Park
          </h1>
        </div>
      </nav>

      {/* Main */}
      <div className='div w-full min-h-screen flex justify-center items-start flex-col p-5 gap-3'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl text-latte-mauve font-bold'>
          Kompak Bersatu
        </h1>
        <h2 className='text-2xl md:text-4xl xl:text-4xl text-latte-sky font-medium'>
          Semangat Tak Luntur.
        </h2>
      </div>

      {/* Botbar */}
      <div className='absolute bottom-0 w-full flex items-center gap-2 py-5'>
        <div className='w-1/2 p-[1.5px] bg-black'></div>
        <Link
          href='#'
          className='bg-black px-3 py-1 text-white'
        >
          Jargon
        </Link>
        <div className='flex-1 p-[1.5px] bg-black'></div>
        <Link
          href='#'
          className='bg-black px-3 py-1 text-white'
        >
          Performance
        </Link>
        <div className='flex-1 p-[1.5px] bg-black'></div>
        <Link
          href='#'
          className='bg-black px-3 py-1 text-white'
        >
          Recap
        </Link>
        <div className='flex-1 p-[1.5px] bg-black'></div>
        <Link
          href='#'
          className='bg-black px-3 py-1 text-white'
        >
          Google Drive
        </Link>
        <div className='flex-1 p-[1.5px] bg-black'></div>
      </div>
    </div>
  )
}

export default Design
