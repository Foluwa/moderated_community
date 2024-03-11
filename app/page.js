'use client';

import { Hero } from "@components";
import { useRouter } from 'next/navigation';
import { Provider as ConnectionProvider } from '../context/connect'

const Home = () => {
  const router = useRouter();

  return (
    <ConnectionProvider>
      <main className='overflow-hidden'>
        <Hero />
      </main>
    </ConnectionProvider>

  );
}

export default Home