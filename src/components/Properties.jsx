import React, { useRef, useState } from 'react';
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

const Properties = () => {

  return (
    <section className='px-8 lg:px-24 py-24 bg-[#FCF0DC] relative' id='properties'>
      <div className='text-center max-w-[600px] mx-auto mb-16'>
        <h2 className='text-2xl font-semibold text-[#105C04] mb-4'>Properties</h2>
        <p className='text-[#105C04] font-semibold text-base'>Our listed properties are verified genuine with a plethora of smart property owners already investing with us. <br /><br /> Our own-earner property portfolio covers locations that fulfil the purpose of each listed property investment.</p>
      </div>

      <div>
        <div className="swiper">
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

          <div className="swiper-wrapper text-left grow">
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
            <div className='swiper-slide bg-[#105C04] rounded-2xl px-4 py-4 text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="/assets/property.jpg" alt="banner image" className='w-[100%]'/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex flex-col justify-end px-4 py-4'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span><strong>Current Price:</strong> N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span><strong>Title:</strong> Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span><strong>Location:</strong> Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span><strong>Sold Out:</strong> 19.22%</span>
                </li>
              </ul>

              <div className='flex rounded-lg bg-[#D9D9D9] w-[100%] h-[40px] mb-16'>
                <span className='rounded-lg bg-[#FFA800] w-[45%] h-[100%]'></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
          </div>

          <button className='swiper-button-next absolute top-0 right-0'>
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

          <div className="swiper-pagination"></div>

          {/* <div className="swiper-button-prev"></div>
          
          <div className="swiper-button-next"></div> */}
         
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
  )
}

export default Properties