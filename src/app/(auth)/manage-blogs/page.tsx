'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import img1 from '@/assets/48QJD0lXEtWbrzrFOHBw5Kr5Nfk.jpg';
import img2 from '@/assets/WzTTCiua7AnAp4ymWE8uAS68eU.jpg';
import img3 from '@/assets/UiPE2QVhbzIOwap1JDZvfixWo.jpg';
import img4 from '@/assets/kq6oh18wnDvlRBQrsGnGVTNDjeM.jpg';

const BlogPage: React.FC = () => {
  const router = useRouter();

  const newsItems = [
    {
      id: 1,
      image: img1,
      title: 'How to Change Your Career to UX Design',
      date: 'Apr 8, 2022',
      views: 1234
    },
    {
      id: 2,
      image: img2,
      title: 'From Pixels to Perfection: Crafting Exceptional UX Design',
      date: 'Feb 28, 2022',
      views: 5678
    },
    // Add more news items here
  ];

  const handleEdit = (id: number) => {
    router.push(`/manage-blogs/${id}`);
  };

  return (
    <div className='px-5 py-20 min-h-screen bg-gray-900 text-white'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-3xl font-bold'>Blog Management</h1>
        <Link className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded' href='/manage-blogs/new'>
          Create New
        </Link>
      </div>

      <div className='space-y-5'>
        {newsItems.map((item) => (
          <div key={item.id} className='flex items-center bg-gray-800 p-5 rounded-lg shadow'>
            <div className='flex-shrink-0 w-24 h-24'>
              <Image src={item.image} quality={100} alt={item.title} width={96} height={96} className='rounded-lg h-full w-full object-cover' />
            </div>
            <div className='ml-5 flex-1'>
              <h2 className='text-2xl font-bold'>{item.title}</h2>
              <p className='text-gray-400'>{item.date}</p>
              <p className='text-gray-400'>Views: {item.views}</p>
            </div>
            <button
              onClick={() => handleEdit(item.id)}
              className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded'
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
