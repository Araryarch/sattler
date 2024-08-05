import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Design = () => {
  return (
    <div
      className={`${inter.className} containers relative w-full min-h-screen bg-latte-base`}
    >
      {/* Navbar */}
      <nav className='w-full p-5 flex justify-between fixed backdrop-blur-sm border-b-2 border-latte-mauve'>
        <div className='logo'>
          <h1 className='font-bold text-2xl text-latte-text'>ELLIE SATTLER</h1>
        </div>
        <div className='desc'>
          <h1 className='font-bold text-xl text-latte-text'>
            UNIT 2 - Jurrasic Park
          </h1>
        </div>
      </nav>

      {/* Main */}
      <div className='div w-full min-h-screen flex justify-center items-start flex-col p-5 gap-3'>
        <h1 className='text-8xl text-latte-mauve font-bold'>Kompak Bersatu</h1>
        <h2 className='text-4xl text-latte-sky font-medium'>
          Semangat Tak Luntur.
        </h2>
      </div>

      {/* Botbar */}
    </div>
  )
}

export default Design
