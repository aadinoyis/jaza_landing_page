import React from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const NewsUpdate = () => {
  return (
    <section className='bg-[#EDF8F6] px-8 lg:px-24 py-24'>
      <h2 className='text-3xl text-center text-[#105C04] font-semibold mb-16'>News & Update</h2>

      <div className='swiper'>
        <button className='swiper-button-prev'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <path
              fill="#105C04"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"
            ></path>
            <path
              fill="#105C04"
              d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3-1.4 1.4z"
            ></path>
            <path fill="#105C04" d="M17 24h17v2H17v-2z"></path>
          </svg>
        </button>

      <div className='swiper-wrapper text-left'>
        <figure className='swiper-slide rounded-2xl bg-[#105C04]'>
          <img src="/assets/news.jpg" alt="team image" className='rounded-t-2xl object-cover w-[100%] h-[250px] object-top'/>

          <figcaption className='px-8 py-8 text-[#ffffff]'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-bold text-base uppercase'>2024 Real Estate Trends: Where to Invest?</h3>
              
              <div className='flex-col justify-center place-center text-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-[#FFA800] rounded-lg text-[#105C04] font-bold'>
                <div className='text-4xl'>12</div>
                <div>Jan</div>
              </div>
            </div>

            <p className='font-thin'>
            Co-owners can sell or transfer their ownership stakes anytime from a 24 months holding period through the web-app marketplace. All unsold co-owner lots get liquidated by the 5th year of purchase in order for Co-owners to get both capital and capital gains according to their respective individual purchase stakes. 
            </p>

            <button className='px-4 py-4 text-[#105C04] bg-[#FFA800] mt-4'>
              Read more
            </button>

          </figcaption>
        </figure>
        <figure className='swiper-slide rounded-2xl bg-[#105C04]'>
          <img src="/assets/news.jpg" alt="team image" className='rounded-t-2xl object-cover w-[100%] h-[250px] object-top'/>

          <figcaption className='px-8 py-8 text-[#ffffff]'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-bold text-base uppercase'>2024 Real Estate Trends: Where to Invest?</h3>
              
              <div className='flex-col justify-center place-center text-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-[#FFA800] rounded-lg text-[#105C04] font-bold'>
                <div className='text-4xl'>12</div>
                <div>Jan</div>
              </div>
            </div>

            <p className='font-thin'>
            Co-owners can sell or transfer their ownership stakes anytime from a 24 months holding period through the web-app marketplace. All unsold co-owner lots get liquidated by the 5th year of purchase in order for Co-owners to get both capital and capital gains according to their respective individual purchase stakes. 
            </p>

            <button className='px-4 py-4 text-[#105C04] bg-[#FFA800] mt-4'>
              Read more
            </button>

          </figcaption>
        </figure>
        <figure className='swiper-slide rounded-2xl bg-[#105C04]'>
          <img src="/assets/news.jpg" alt="team image" className='rounded-t-2xl object-cover w-[100%] h-[250px] object-top'/>

          <figcaption className='px-8 py-8 text-[#ffffff]'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-bold text-base uppercase'>2024 Real Estate Trends: Where to Invest?</h3>
              
              <div className='flex-col justify-center place-center text-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-[#FFA800] rounded-lg text-[#105C04] font-bold'>
                <div className='text-4xl'>12</div>
                <div>Jan</div>
              </div>
            </div>

            <p className='font-thin'>
            Co-owners can sell or transfer their ownership stakes anytime from a 24 months holding period through the web-app marketplace. All unsold co-owner lots get liquidated by the 5th year of purchase in order for Co-owners to get both capital and capital gains according to their respective individual purchase stakes. 
            </p>

            <button className='px-4 py-4 text-[#105C04] bg-[#FFA800] mt-4'>
              Read more
            </button>

          </figcaption>
        </figure>
      </div>

      <button className='swiper-button-next'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 50 50"
        >
          <path
            fill="#105C04"
            d="M25 42c9.4 0 17-7.6 17-17S34.4 8 25 8 8 15.6 8 25s7.6 17 17 17zm0-32c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
          ></path>
          <path
            fill="#105C04"
            d="M24.7 34.7l9.7-9.7-9.7-9.7-1.4 1.4 8.3 8.3-8.3 8.3 1.4 1.4z"
          ></path>
          <path fill="#105C04" d="M33 24H16v2h17v-2z"></path>
        </svg>
      </button>

      </div>
    </section>
  )
}

export default NewsUpdate