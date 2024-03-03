'use client'
import { useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav aria-label='Site Navbar'>
      <div className='bg-gray-100 relative border-b-2'>
        <div className='mx-auto max-w-screen-xl px-4 py-3'>
          <div className='flex items-center justify-between gap-x-4'>
            <ul className='flex items-center justify-star gap-x-3 basis-4/12 '>
              <li className='max-sm:w-5 max-sm:ms-8'>
                <img src='images/Logo.png' alt='Site-Logo' />
              </li>
            </ul>
            <ul className='flex items-center justify-center basis-4/12'>
              <li>
                <h1 className='font-bold text-2xl max-sm:text-xl'>LOGO</h1>
              </li>
            </ul>
            <ul className='flex items-center justify-end gap-x-3 basis-4/12'>
              <li>
                <a href='#' className='cursor-pointer '>
                  <img
                    src='images\search-normal.png'
                    alt='search-icon'
                    className='max-sm:w-4'
                  />
                </a>
              </li>
              <li>
                <a href='#' className='cursor-pointer '>
                  <img
                    src='images\heart.png'
                    alt='heart-icon'
                    className='max-sm:w-4'
                  />
                </a>
              </li>
              <li>
                <a href='#' className='cursor-pointer '>
                  <img
                    src='images\shopping-bag.png'
                    alt='shoping-icon'
                    className='max-sm:w-4'
                  />
                </a>
              </li>
              <li className='max-sm:hidden'>
                <a href='#' className='cursor-pointer '>
                  <img src='images\profile.png' alt='profile-icon' />
                </a>
              </li>
              <li className='max-sm:hidden'>
                <label for='SortBy' class='sr-only'>
                  Select
                </label>
                <select id='SortBy' class='h-6 rounded border-gray-300 text-sm'>
                  <option>ENG</option>
                  <option>HID</option>
                  <option>TML</option>
                  <option>TLG</option>
                  <option>KND</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-auto max-w-screen-xl px-4 py-4'>
          <div className='flex items-center justify-center gap-x-8 max-sm:absolute max-sm:top-1.5 max-sm:left-2'>
            <ul className='flex items-center gap-x-6'>
              <li className='hidden md:block'>
                <a
                  href='#'
                  className='cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70'
                >
                  Home
                </a>
              </li>
              <li className='hidden md:block'>
                <a
                  href='#'
                  className='cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70'
                >
                  Products
                </a>
              </li>
              <li className='hidden md:block'>
                <a
                  href='#'
                  className='cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70'
                >
                  Service
                </a>
              </li>
              <li className='hidden md:block'>
                <a
                  href='#'
                  className='cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70'
                >
                  Contacts
                </a>
              </li>
              <li className='flex items-center gap-x-4 md:hidden'>
                <button
                  onClick={toggleDropdown}
                  className='block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70'
                >
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    className={`h-6 w-6 ${isDropdownOpen ? 'hidden' : ''}`}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    className={`h-6 w-6 ${isDropdownOpen ? '' : 'hidden'}`}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`duration-900 overflow-y-hidden transition-all md:hidden ${
            isDropdownOpen ? 'h-auto' : 'h-0'
          }`}
        >
          <hr />
          <ul className='mx-auto max-w-screen-xl px-4 py-4'>
            <li>
              <a
                href='#'
                className='block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50'
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50'
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50'
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50'
              >
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
