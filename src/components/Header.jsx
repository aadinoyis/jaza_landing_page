import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
    <header className='flex justify-between items-center py-4 px-8 lg:px-24'>
      <a href="/">
        <img src="/assets/logo.png" alt="jaza & sakeenah" width={150}/>
      </a>

      <div className='hidden lg:flex gap-4 bg-[#ffffff]'>
        <a href="#" className='py-4 px-8 bg-[#105C04] text-[#ffffff] text-sm'>Register</a>
        <a href="#" className='py-4 px-8 bg-[#FFA800] text-[#105C04] text-sm'>Login</a>
      </div>

      <button className='block lg:hidden' onClick={() => setNav(!nav)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 17h18M3 12h18M3 7h18"
          ></path>
        </svg>
      </button>
    </header>
    {
      nav &&
      <div className='flex px-4 py-4 gap-4 bg-[#ffffff]'>
        <a href="#" className='grow py-4 px-8 bg-[#105C04] text-[#ffffff] text-sm'>Register</a>
        <a href="#" className='grow py-4 px-8 bg-[#FFA800] text-[#105C04] text-sm'>Login</a>
      </div>
    }
    </>
    
  )
}

export default Header