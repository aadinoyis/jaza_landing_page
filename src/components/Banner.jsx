import React from 'react'
import { useState, useEffect } from 'react'

const Banner = () => {
  const [index, setIndex] = useState(0)

  // const images = ["grid-item.jpeg", "grid-item-2.jpeg", "grid-item-3.jpeg"]
  useEffect(()=> {
    const intervalId = setInterval(()=> {
      if(index < 2) {
        setIndex((prevIndex) => (prevIndex + 1) % 2);
      }
    }, 4000)
    return () => clearInterval(intervalId);
  }, [index])

  return (
    <section className='py-24 px-8 md:px-24 bg-[#105C04] gap-8 flex flex-col md:flex-row items-center justify-center md:justify-normal text-center md:text-left'>
      {
        index == 0 &&
        <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <div>
          <span className='font-normal mb-4'>Welcome to</span>
          <h1 className='font-normal text-3xl'>Jazã & Sakeenah: <br />
            OWN-EARNER</h1>

          <h3 className='text-base mt-8'>
            <span className='text-[#FFA800]'>Easy & reliable tech-access </span>to<br />
             owning landed property assets across Africa.
          </h3>
        </div>
      </div>}
      {
        index == 1 &&
        <div className='grow text-[#ffffff] flex items-center gap-x-2'>
        <div>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-3xl'>Jazã & Sakeenah: <br />
            OWN-EARNER</h1>

          <h3 className='text-base mt-8'>
            <span className='text-[#FFA800]'>A secured digital  </span><br />
            real estate asset trading and management platform.
          </h3>
        </div>
      </div>}
      <div className='grow'>
        <img src="/assets/banner-image.png" alt="banner image" width={400} height={300} className='object-contain'/>
      </div>
    </section>
  )
}

export default Banner