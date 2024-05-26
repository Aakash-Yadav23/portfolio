import Profile from '@/components/global/Profile';
import Image from 'next/image';
import React from 'react';
import bg from '@/assets/image.png';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='min-h-screen flex justify-between items-center text-white'>
      <main className='px-5 max-w-[1200px] gap-10 items-center flex flex-wrap flex-col md:flex-row md:flex-nowrap m-auto py-5 md:py-10'>
        <section id="hello" className='mb-20 max-w-[500px] flex flex-col flex-wrap w-full'>
          <h2 className='text-lg opacity-70 mb-2'>Hello, I am</h2>
          <h1 className='text-5xl font-bold mb-4'>Aakash Yadav</h1>
          <p className='text-lg'>
            I&apos;m a full-stack software engineer with a primary focus on back-end development.
            I love working at the scalable system.
          </p>
        </section>

        <section className='w-full py-4 border-2 flex flex-col gap-3 bg-gray-900 p-5 rounded-md'>
          <div className="flex justify-between items-center gap-5">
            <Link className='text-white' href={'/'}>
              playground
            </Link>
            <div className="flex items-center gap-2 text-sm text-orange-800">
              <span>
                2023 Dec
              </span>
              -
              <span>
                2024 Jan
              </span>
            </div>
          </div>
          <Image src={bg.src} width={500} height={200} alt='bg' className='max-w-full max-h-[300px] rounded-md m-auto object-cover' />
        </section>
      </main>
    </div>
  );
};

export default Home;
