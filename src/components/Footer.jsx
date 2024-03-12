import React from 'react';

const Footer = () => {
  return (
    <footer className='text-white text-center py-4'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <p className='text-sm text-gray-500 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
         © {new Date().getFullYear()} Mediabeast. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;