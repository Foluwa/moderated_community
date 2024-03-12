'use client';

import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font bg-white shadow'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center'>
          <a
            href='/'
            className='flex title-font font-medium items-center text-gray-900'
          >
            <Image
              src="/logo.jpeg"
              width={50}
              height={50}
              alt="Mediabeast logo"
            />
            <span className='ml-3 text-xl'>Mediabeast</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
