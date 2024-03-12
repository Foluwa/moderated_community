'use client';

import { Hero } from "@components";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  return (
      <main >
        <Hero />
      </main>

  );
}

export default Home