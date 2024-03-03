'use client'

import React from 'react'

function Ribbon() {
  return (
    <>
      <div className='ribbon flex  items-center justify-center bg-black text-white py-2'>
        <div className='flex flex-1 w-32 items-center justify-center'>
          <img src='images\top-icon.png' alt='top-icon' className='pe-2' />
          <span style={{ color: '#EB4C6B', fontSize: 12 }}>
            lorem ipsom dolor
          </span>
        </div>
        <div className='flex flex-1 w-32 items-center justify-center max-sm:hidden'>
          <img src='images\top-icon.png' alt='top-icon' className='pe-2' />
          <span style={{ color: '#EB4C6B', fontSize: 12 }}>
            lorem ipsom dolor
          </span>
        </div>
        <div className='flex flex-1 w-32 items-center justify-center max-sm:hidden'>
          <img src='images\top-icon.png' alt='top-icon' className='pe-2' />
          <span style={{ color: '#EB4C6B', fontSize: 12 }}>
            lorem ipsom dolor
          </span>
        </div>
      </div>
    </>
  )
}

export default Ribbon
