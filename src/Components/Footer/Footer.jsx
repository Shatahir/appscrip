import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='bg-black'>
        <div className='mx-auto max-w-screen-xl px-4 pt-12 pb-4 sm:px-6'>
          <div className='lg:flex items-center justify-center border-b-2'>
            <div className='lg:basis-3/5'>
              <div className='lg:w-9/12 mb-12'>
                <h3 className='text-white text-lg font-bold mb-4'>Be the first to know</h3>

                <p className='text-white text-base mb-12'>
                  Sign up for updates from mettā muse.
                </p>
                <form className='w-full text-white'>
                  <div className='flex gap-6'>
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Enter your e-mail...'
                      className='w-full border-none rounded-sm px-6 py-3 focus:border-transparent focus:ring-transparent sm:text-sm focus-within:ring max-sm:basis-3/4'
                    />
                    <button className='mt-1 w-full text-white bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none border-2 border-gray-400 rounded sm:mt-0 sm:w-auto sm:shrink-0 max-sm:basis-1/4'>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='lg:basis-2/5 '>
              <div>
                <h2 className='text-xl font-bold text-white'>
                  CONTACT US
                </h2>
                <p className='mt-4 text-white'>
                  +44 221 133 5360
                  <br />
                  <br />
                  customercare@mettamuse.com
                </p>
                <h2 className='text-xl font-bold text-white my-4  '>
                  Currency
                </h2>
                <div className='flex mb-4'>
                  <img src="images/United States of America (US).png" alt="ican" />
                  <ul>
                    <li className='text-base font-bold text-white ms-2'>
                      USD
                    </li>
                  </ul>
                </div>
                <p className='text-xs text-white mb-6'>
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex items-center justify-center mt-12'>
            <div className='lg:basis-3/5'>
              <div className='flex'>
                <div className='flex-1'>
                  <ul>
                    <li className='mb-5'>
                      <a
                        href='#'
                        className='text-white text-lg font-bold transition hover:opacity-75'
                      >
                        mettā muse
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        About Us
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Stories
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Artisans
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Boutiques
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        EU Compliances Docs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex-1'>
                  <ul>
                    <li className='mb-5'>
                      <a
                        href='#'
                        className='text-white text-lg font-bold transition hover:opacity-75'
                      >
                        Quick Links
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Orders & Shipping
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Join/Login as a Seller
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Payment & Pricing
                      </a>
                    </li>

                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Return & Refunds
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        FAQs
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='text-white text-base transition hover:opacity-75'
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className='lg:basis-2/5 '>
              <ul>
                <li className='mb-5'>
                  <a
                    href='#'
                    className='text-white text-lg font-bold transition hover:opacity-75'
                  >
                    Follow Us
                  </a>
                </li>

                <div className='flex mb-8'>
                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    ><img src="images/Insta.png" alt="insta-icon" />
                    </a>
                  </li>

                  <li className='mb-3'>
                    <a
                      href='#'
                    >
                      <img src="images/linked.png" alt="linkedin-icon" />
                    </a>
                  </li>
                </div>
                <li className='mb-5'>
                  <a
                    href='#'
                    className='text-white text-lg font-bold transition hover:opacity-75'
                  >
                    mettā muse Accepts
                  </a>
                </li>
                <div className='flex max-sm:justify-center max-sm:items-center'>
                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    >
                      <img src="images/gpay.png" alt="linkedin-icon" />
                    </a>
                  </li>
                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    ><img src="images/master.png" alt="master-icon" />
                    </a>
                  </li>

                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    >
                      <img src="images/payp.png" alt="linkedin-icon" />
                    </a>
                  </li>
                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    >
                      <img src="images/american.png" alt="linkedin-icon" />
                    </a>
                  </li>
                  <li className='mb-3 me-3'>
                    <a
                      href='#'
                    >
                      <img src="images/Ipay.png" alt="linkedin-icon" />
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a
                      href='#'
                    >
                      <img src="images/opay.png" alt="linkedin-icon" />
                    </a>
                  </li>
                </div>
              </ul>

            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <p className='text-sm text-white'>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
