import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Botbar from './Botbar'

const inter = Inter({ subsets: ['latin'] })

const Design = () => {
  return (
    <>
      <div
        className={`${inter.className} containers relative w-full min-h-screen bg-latte-base`}
      >
        {/* Navbar */}
        <nav className='w-full p-5 flex justify-between fixed backdrop-blur-xl border-b-2 border-latte-mauve z-50'>
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
        <Botbar />
      </div>

      <section
        id='jargon'
        className='min-h-screen w-full bg-latte-base flex items-center flex-col justify-center relative'
      >
        <h1 className='text-xl font-semibold absolute top-0 pt-28'>
          Our Jargon
        </h1>
        <div className='jargon'>
          <p>"Cek Cek Cek"</p>
          <p>"Kenapa Kenapa?"</p>
          <p>"Ini Siapa?</p>
          <p>"Ellie Sattler"</p>
          <p>"Siapa Siapa?"</p>
          <p>"Ellie Loyal"</p>
          <p>"Siapa Siapa?"</p>
          <p>"Ellie Pintar"</p>
          <p>"Ellie Siapa?"</p>
          <p>"Ellie Kompak Bersatu, Semangat Tak Luntur!!! Rawr~~"</p>
        </div>
        <Botbar />
      </section>
    </>
  )
}

export default Design
