import React from 'react'

const Portfolio = () => {
  return (
    <section className='py-8 px-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
      <img src="/assets/grid-item-8.jpeg" alt="grid item" className='w-[100%] h-[400px] object-top border-[#FCF0DC] border-[1rem] shadow-xl object-cover lg:col-span-2 '/>
      <img src="/assets/grid-item-3.jpeg" alt="grid item" className='w-[100%] h-[400px] object-top border-[#FCF0DC] border-[1rem] shadow-xl object-cover'/>
      <img src="/assets/grid-item-6.jpeg" alt="grid item" className='w-[100%] h-[400px] object-top border-[#FCF0DC] border-[1rem] shadow-xl object-cover'/>
      <img src="/assets/grid-item-4.jpeg" alt="grid item" className='w-[100%] h-[400px] object-center border-[#FCF0DC] border-[1rem] shadow-xl object-cover lg:col-span-2 '/>
    </section>
  )
}

export default Portfolio