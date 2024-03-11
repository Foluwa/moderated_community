'use client';

import { Hero } from "@components";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  return (
    <main className='overflow-hidden'>
      <Hero/>
    </main>
  );
}

export default Home