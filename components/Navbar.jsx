'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
import { checkUserRole } from '../utils/Utils';

const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  const links = [
    { title: 'Rooms', url: '/rooms' },
    { title: 'Dashboard', url: '/profile' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' },
  ];

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
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <SignedIn>
            {links.map((link) =>
              (link.role === 'admin' && userRole === 'admin') || !link.role ? (
                <Link key={link.title} href={link.url}>
                  <div className='mr-5 cursor-pointer hover:text-gray-900'>
                    {link.title}
                  </div>
                </Link>
              ) : null
            )}
          </SignedIn>
        </nav>
        <div className='md:flex items-center'>
          <SignedOut>
            <a href='/signin'>
              <button className='py-2.5 px-12 rounded text-white btn bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-80 transition-all duration-200'>
                Login
              </button>
            </a>
          </SignedOut>
          <SignedIn>
            <div className='ml-4'>
              <UserButton afterSignOutUrl='/' />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
