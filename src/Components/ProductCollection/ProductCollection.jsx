'use client'
import React from 'react'
import CollectionTopFilter from '../CollectionTopFilter/CollectionTopFilter'

function ProductCollection() {
  return (
    <>
      <CollectionTopFilter />
      <section>
        <div className='mx-auto mb-6 max-w-screen-xl py-2 max-sm:px-4 md:px-4 sm:py-2'>
          <div className='mt-4 lg:mt-8 lg:flex  lg:items-start lg:gap-8'>
            <div className='hidden space-y-4 lg:block lg:basis-1/5'>
              <div>
                <div className='flex py-4 border-b'>
                  <input type='checkbox' className='me-2 w-5' />
                  <label for='vehicle1' className='block font-medium text-lg'>
                    Customizble
                  </label>
                </div>

                <div className='mt-1 space-y-2'>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> IDEALFOR </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> OCCASION </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> Work </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> FABRIC </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> SEGMENT </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'>
                        {' '}
                        SUITABLE FOR{' '}
                      </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'>
                        {' '}
                        RAW MATERIALS{' '}
                      </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                  <details className='overflow-hidden border-b border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-900 transition'>
                      <span className='text-sm font-medium'> PATTERN </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'>
                          {' '}
                          0 Selected{' '}
                        </span>

                        <button
                          type='button'
                          className='text-sm text-gray-900 underline underline-offset-4'
                        >
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label
                            for='FilterInStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterInStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              In Stock (5+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterPreOrder'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterPreOrder'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Pre Order (3+){' '}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            for='FilterOutOfStock'
                            className='inline-flex items-center gap-2'
                          >
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'>
                              {' '}
                              Out of Stock (10+){' '}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className='lg:col-span-3 lg:basis-4/5'>
              <ul className='grid gap-4 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product4.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>

                  <p className='absolute top-3 left-6 uppercase text-base font-bold'>
                    new product
                  </p>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product1.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product2.png'
                      alt='Product2'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product3.png'
                      alt='Product3'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product5.png'
                      alt='Product5'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product6.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product7.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product8.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product9.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product10.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product11.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product6.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product1.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product4.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product7.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product9.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product5.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
                <li className='relative'>
                  <a href='#' className='group block overflow-hidden'>
                    <img
                      src='images\Product2.png'
                      alt='Product1'
                      className=' w-full object-cover transition duration-500 group-hover:scale-105 '
                    />
                  </a>

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-lg uppercase font-bold group-hover:underline group-hover:underline-offset-4'>
                      PPXOC Milkyway dress in...
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className=' text-gray-400 text-sm'>
                        <a href='#' className='underline'>
                          Sign in
                        </a>
                        <span> or Create an account to see pricing</span>
                      </p>
                      <img src='images/heart-2.png' alt='' />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductCollection
