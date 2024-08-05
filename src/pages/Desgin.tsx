import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Design = () => {
  return (
    <div
      className={`${inter.className} containers relative w-full min-h-screen bg-latte-mauve`}
    >
      <nav className='w-full p-5 flex justify-between'>
        <div className='logo'>
          <h1 className='font-bold text-2xl text-latte-rosewater'>
            ELLIE SATTLER
          </h1>
        </div>
        <div className='desc'>
          <h1 className='font-bold text-xl text-latte-rosewater'>
            UNIT 2 - Jurrasic Park
          </h1>
        </div>
      </nav>
    </div>
  )
}

export default Design
