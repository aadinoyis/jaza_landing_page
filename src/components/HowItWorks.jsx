import React from 'react'

const HowItWorks = () => {
  return (
    <div id='how-it-works'>
      <aside className='bg-[#FCF0DC] overflow-hidden relative h-[100px] w-[100%]'>
        <div className='absolute top-0 left-0 h-[100px] w-[100%] rotate-[-5deg] bg-[#105C04] translate-y-[-75px] translate-x-[-50px]'></div>
        <div className='absolute top-0 right-0 h-[100px] w-[100%] rotate-[5deg] bg-[#105C04] translate-y-[-75px] translate-x-[50px]'></div>
      </aside>

      <section className='bg-[#FCF0DC] py-8 px-8 lg:px-24'>
        <div className='text-center max-w-[600px] mx-auto mb-0 translate-y-[-50px]'>
          <h4 className='text-[#105C04] font-semibold text-base mb-4'>Whether you have money to buy standard plots of land or not… it doesn't matter</h4>

          <h1 className='text-[#64A001] font-semibold text-2xl mb-4'>
            <span className='text-[#105C04]'>How it Works:</span> Your Income Level & Location isn't a barrier
          </h1>

          <span>Join hundreds of members already on the Own-Earner app to purchase any of these categories below:</span>
        </div>

        <div className='bg-[#EDF8F6] rounded-[2rem] shadow-xl flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-normal text-left gap-8 px-12 py-12 mb-8'>
          <img src="/assets/image 7.png" alt="banner image" width={400} className='shrink-0 object-contain w-[100%] lg:w-[400px]'/>
          <div>
            <h2 className='text-[#105C04] text-2xl font-semibold mb-8'>Co-owner Lot</h2>
            <ul className='flex flex-col gap-8'>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-4 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                    
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Starting from 1 sqm of land to any size below the quarter plot</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> High Yield Mini-LandBanking</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> Students, artisans, petty traders, hawkers, hustling entrepreneurs, new homemakers, retirees etc</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-[#EDF8F6] rounded-[2rem] shadow-xl flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:justify-normal text-left gap-8 px-12 py-12 mb-8'>
          <img src="/assets/image 6.png" alt="banner image" width={400} className='shrink-0 object-contain w-[100%] lg:w-[400px]'/>
          <div>
            <h2 className='text-[#105C04] text-2xl font-semibold mb-8'>Full-owner Lot</h2>
            <ul className='flex flex-col gap-y-8'>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Quarter plot, half plot, 1 plot, and their multiples.</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> Build to live-in, to resell, rent, for Agric of low negative environmental impact, for High Yield Midi-Landbanking</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> Full-time homemakers, established entrepreneurs, salary earners, businessman/woman, market men/women, etc</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-[#EDF8F6] rounded-[2rem] shadow-xl flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-normal text-left gap-8 px-12 py-12 mb-8'>
          <img src="/assets/image 8.png" alt="banner image" width={400} className='shrink-0 object-contain w-[100%] lg:w-[400px]'/>
          <div>
            <h2 className='text-[#105C04] text-2xl font-semibold mb-8'>Developer Lot</h2>
            <ul className='flex flex-col gap-y-8'>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Starting from 12 Plots of land.</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> To resell, for High Yield Maxi-Landbanking, for Mini-Estate, Residential Buildings, Agric of low negative environmental impact,</p>
              </li>
              <li className='flex items-center gap-x-4'>
                <div className='w-12 h-12 rounded-full shrink-0 flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> High network individuals, groups, bulk ownership, cooperatives, organisations, businesses, etc</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks