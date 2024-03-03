'use client'
import React from 'react'

function CollectionTopFilter() {
  return (
    <>
      <section>
        <div class='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-2 border-y-2 lg:px-8'>
          <div class='sm:flex sm:items-center sm:justify-between'>
            <div class='block sm:hidden'>
              <div className='flex align-center justify-center'>
                <p className='w-6/12 text-center border-e-2'>FILTER</p>
                <button class='flex w-6/12 justify-center cursor-pointer items-center gap-2 border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
                  <span class='text-sm font-medium'> RECOMMENDED </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='size-4 rtl:rotate-180'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M8.25 4.5l7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class='hidden sm:flex sm:gap-4'>
              <div class='relative'>
                <span class='text-sm font-medium'> 3425 Items </span>
              </div>

              <div class='relative'>
                <details class='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary class='flex cursor-pointer items-center gap-2 pt-1 text-gray-900 transition hover:border-gray-600'>
                    <span class='text-sm font-medium'> HIDE FILTER</span>

                    <span class='transition group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='h-4 w-4'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class='z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0'>
                    <div class='w-96 rounded border border-gray-200 bg-white'>
                      <header class='flex items-center justify-between p-4'>
                        <span class='text-sm text-gray-700'>
                          {' '}
                          The highest price is $600{' '}
                        </span>

                        <button
                          type='button'
                          class='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <div class='border-t border-gray-200 p-4'>
                        <div class='flex justify-between gap-4'>
                          <label
                            for='FilterPriceFrom'
                            class='flex items-center gap-2'
                          >
                            <span class='text-sm text-gray-600'>$</span>

                            <input
                              type='number'
                              id='FilterPriceFrom'
                              placeholder='From'
                              class='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                            />
                          </label>

                          <label
                            for='FilterPriceTo'
                            class='flex items-center gap-2'
                          >
                            <span class='text-sm text-gray-600'>$</span>

                            <input
                              type='number'
                              id='FilterPriceTo'
                              placeholder='To'
                              class='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div class='hidden sm:block'>
              <label for='SortBy' class='sr-only'>
                RECOMMENDED
              </label>

              <select id='SortBy' class='h-10 rounded border-gray-300 text-sm'>
                <option>RECOMMENDED</option>
                <option value='Title, DESC'>Title, DESC</option>
                <option value='Title, ASC'>Title, ASC</option>
                <option value='Price, DESC'>Price, DESC</option>
                <option value='Price, ASC'>Price, ASC</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CollectionTopFilter
