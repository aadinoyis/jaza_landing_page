import React from 'react'
import { useState } from 'react'

const Faq = () => {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)

  const toggleActive = (i) => {
    setActive(!active)
    setIndex(i)
  }

  return (
    <section className='bg-[#EDF8F6] px-8 lg:px-24 py-24'>
      <h2 className='text-2xl text-[#105C04] mb-16 text-center lg:text-left font-semibold'>Frequently <br />Asked 
      <span className='text-[#64A001]'> Questions</span></h2>

      <ul className='flex flex-col gap-8'>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(1)}>
            <h3 className='text-base font-semibold'>Q1. What's Jazã & Sakeenah Phase(s)</h3>
            {
            active && index == 1 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 1 ? 
            <p className='px-8 py-8'>
            Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity.

            They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase.
            
            Uses include Land Banking, Residential Buildings for personal settlement, Build to let, Commercial, Developers, Corporate purchase and Agriculture … 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(2)}>
            <h3 className='text-base font-semibold'>Q2. Who is the developer of Jazã & Sakeenah Phases?</h3>
            {
            active && index == 2 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 2 ? 
            <p className='px-8 py-8'>
            Jazã & Sakeenah Company Limited, A Property Development and Real Estate Investment Company located at MB12 Hse 5, Ganiyu Dawudu Street, Lekki, Lagos State, Nigeria.
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(3)}>
            <h3 className='text-base font-semibold'>Q3. What type of Ownership Titles are available for these Estate Phases?</h3>
            {
            active && index == 3 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 3 ? 
            <p className='px-8 py-8'>
            All our Jazã & Sakeenah phases usually hold statutory titles such as C of O, Governor's Consent, Freehold, Allocation etc plus the Survey Plan & a well executed Deed of Assignment. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(4)}>
            <h3 className='text-base font-semibold'>Q4. Are there any encumbrances in these phases? </h3>
            {
            active && index == 4 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 4 ? 
            <p className='px-8 py-8'>
             All Jazã & Sakeenah phases are free from every and any known government acquisition, 3rd Party claimants, and/or collateral.</p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(5)}>
            <h3 className='text-base font-semibold'>Q5. What is Own-Earner Property?</h3>
            {
            active && index == 5 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 5 ? 
            <p className='px-8 py-8'>
             This is a type of Real Estate Unit Investment (REUI) that makes you either a part or sole owner of a physical property through a digital platform irrespective of your location and income level.  It also affords you the opportunity to earn through property selling to friends and family irrespective of your marketing experience.</p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(6)}>
            <h3 className='text-base font-semibold'>Q6. Do you have an installment payment plan?</h3>
            {
            active && index == 6 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 6 ? 
            <p className='px-8 py-8'>
              Yes. We have both One-time purchase and installment purchase options. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(7)}>
            <h3 className='text-base font-semibold'>Q7. What land sizes are available for purchase?</h3>
            {
            active && index == 7 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 7 ? 
            <p className='px-8 py-8'>
              Please check the category description on the page. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(8)}>
            <h3 className='text-base font-semibold'>Q8. Are the phases with motorable road access?</h3>
            {
            active && index == 8 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 8 ? 
            <p className='px-8 py-8'>
              Yes. They are all easily motorable during both the wet and the dry season. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(9)}>
            <h3 className='text-base font-semibold'>Q9. What other payment do I make aside from the property payment?</h3>
            {
            active && index == 9 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 9 ? 
            <p className='px-8 py-8'>
              There's no extra fee to be paid by the Co-owners. As for Full-owners and Developers;
              <br />
              (a) Any extra sqm(s) in the physical land size in contrast to the online purchased size attracts an equivalent additional price/sqm of the land.
              <br />
              (b) Documentation (Deed of Assignment & Survey): From N500,000 [Prices vary based on size and the subject Estate Phase's location]. 
              <br />
              Note: This is only for the Landowners who are ready to process their ownership documents. 
              <br />
              (c) Development Fee (For infrastructures like paved roads, drainages, perimeter fencing, recreational center, gate house, etc): To be paid based on the cost of the infrastructure. 
              <br />
              Note: Only those who want to erect structures on their lots make this payment, others are exempted.
              <br />
              (d) Yearly Maintenance fee for site clearing and security.
 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(10)}>
            <h3 className='text-base font-semibold'>Q10. What do I get after payment?</h3>
            {
            active && index == 10 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 10 ? 
            <p className='px-8 py-8'>
              Property Agreement and Receipt of Payment comes immediately after payment confirmation, while Deed of Assignment & Survey Plan comes 1 month after the payment of Documentation Fee for those concerned. While those who are ready to erect structures get a Job Card after the payment of the development fee. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(11)}>
            <h3 className='text-base font-semibold'>Q11. Can I start building on the land?</h3>
            {
            active && index == 11 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 11 ? 
            <p className='px-8 py-8'>
              You can start building on the landed property after your physical allocation, which will be done 1 month after complete land payment, documentation and development fee has been made. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(12)}>
            <h3 className='text-base font-semibold'>Q12. Is there any time limit to commence work on my site?</h3>
            {
            active && index == 12 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 12 ? 
            <p className='px-8 py-8'>
              None. As long as you've completed all payment, you're free to use your land lot.
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(13)}>
            <h3 className='text-base font-semibold'>Q13. Is there any Development Order within the estate phases? </h3>
            {
            active && index == 13 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 13 ? 
            <p className='px-8 py-8'>
              Yes. Based on your purchased land sizes. The estate layout is in size sections and you are limited to build houses on each size as it would meet the State's approval standards. This doesn't stop you from designing whatever aesthetically suits your fancy.
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(14)}>
            <h3 className='text-base font-semibold'>Q14. Can I resell my property?</h3>
            {
            active && index == 14 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 14 ? 
            <p className='px-8 py-8'>
            (a) Yes, a buyer who has paid up on their land can resell their plot(s) at anytime. Transactions and transfers must  however be executed through the company.
            <br />
            (b) A Charge of 10% of the land consideration covering Transfer Documentation shall be paid to the Company by the new buyer.
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(15)}>
            <h3 className='text-base font-semibold'>Q15. Does the company help in reselling or we will have to find buyers by ourselves?</h3>
            {
            active && index == 15 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 15 ? 
            <p className='px-8 py-8'>
            The company doesn't directly sell on behalf of Landowners except for the 5 years liquidation for Co-owners. However, every LandOwner on the web-app upon their readiness to resell have the opportunity to list their property through the web-app marketplace. Landowners are however encouraged to share the subject property link after listing to family and friends for a quicker sale. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(16)}>
            <h3 className='text-base font-semibold'>Q16. Can I make the property payment to the agents or anyone linked to the company?</h3>
            {
            active && index == 16 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 16 ? 
            <p className='px-8 py-8'>
              No, you can't. Only payment on the www.jaza.ng validates your purchase. You will see the designated account on the web-app when you follow the steps of purchase. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(17)}>
            <h3 className='text-base font-semibold'>Q17. Can I inspect the land before purchasing on the app?</h3>
            {
            active && index == 17 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 17 ? 
            <p className='px-8 py-8'>
              Yes you can. With the help of each Phase's location map, anyone at any time can visit the site on their own to be sure of what they're purchasing. After complete purchase however, the company has the responsibility to inspect with the new landowners for their physical allocation. 
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(18)}>
            <h3 className='text-base font-semibold'>Q18. What happens if I cannot continue with the payment? Can I get a refund? </h3>
            {
            active && index == 18 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 18 ? 
            <p className='px-8 py-8'>
              No. Every purchase is a complete land purchase on its own and getting money back can only be through reselling your existing lot.
            </p>
            :
            ''
          }
        </li>
        <li className='px-8 py-8 rounded-sm bg-[#105C04] text-[#ffffff]'>
          <div className='flex  justify-between' onClick={() => toggleActive(19)}>
            <h3 className='text-base font-semibold'>Q19. If I'm ready to buy now, what is the next step? </h3>
            {
            active && index == 19 ? 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 35 35"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_2045)">
                <path
                  fill="#F2BC5E"
                  d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_2045">
                  <path fill="#fff" d="M0 0H35V35H0z"></path>
                </clipPath>
              </defs>
            </svg>
            :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 40 40"
              className="shrink-0"
            >
              <path
                fill="#FFA800"
                d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
              ></path>
              <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
              <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
            </svg> 
            }
          </div>
          
          {
            active && index == 19 ? 
            <p className='px-8 py-8'>
              Visit www.jaza.ng, Click on REGISTER as a new visitor or LOGIN as a returning member, then follow the prompt until payment is made successfully. Then forward your payment evidence to the marketing Partner attending to you.
            </p>
            :
            ''
          }
        </li>
      </ul>
    </section>
  )
}

export default Faq