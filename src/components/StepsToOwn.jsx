import React from 'react'

const StepsToOwn = () => {
  return (
    <section className='flex flex-col md:flex-row'>
      <div className=' grow bg-[#105C04] px-8 md:px-24 py-24 w-[100%]'>
        <h2 className='text-2xl text-center md:text-left text-[#ffffff] mb-8'>Steps To Become a <br />Jazã <span className='text-[#FFA800]'>LandOwner</span></h2>

        <ul className='flex flex-col gap-y-8'>
          <li className='py-4 px-8 w-[100%] bg-[#ffffff] rounded-2xl flex items-center gap-x-4 '>
            <div className='w-12 h-12 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff] shrink-0'>1</div>

            <p className='text-lg text-[#105C04]'>Register / Login</p>
          </li>
          <li className='py-4 px-8 w-[100%] bg-[#ffffff] rounded-2xl flex items-center gap-x-4'>
            <div className='w-12 h-12 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff] shrink-0'>2</div>

            <p className='text-lg text-[#105C04]'>Choose Category</p>
          </li>
          <li className='py-4 px-8 w-[100%] bg-[#ffffff] rounded-2xl flex items-center gap-x-4'>
            <div className='w-12 h-12 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff] shrink-0'>3</div>

            <p className='text-lg text-[#105C04]'>Execute Your Agreement</p>
          </li>
          <li className='py-4 px-8 w-[100%] bg-[#ffffff] rounded-2xl flex items-center gap-x-4'>
            <div className='w-12 h-12 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff] shrink-0'>4</div>

            <p className='text-lg text-[#105C04]'>Proceed to Payment</p>
          </li>
          <li className='py-4 px-8 w-[100%] bg-[#ffffff] rounded-2xl flex items-center gap-x-4'>
            <div className='w-12 h-12 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff] shrink-0'>5</div>

            <p className='text-lg text-[#105C04]'>Update Your Information</p>
          </li>
        </ul>
      </div>

      <div className='grow bg-[#64A001] relative w-[100%] min-h-[500px] h-[auto] bg-[url(../../assets/rectangle.png)] bg-no-repeat bg-center'>
        <img src="/assets/steps.png" alt="steps" className='absolute left-0 bottom-0 w-[100%]'/>
      </div>
    </section>
  )
}

export default StepsToOwn