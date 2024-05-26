'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import img2 from '@/assets/kq6oh18wnDvlRBQrsGnGVTNDjeM.jpg';
import Image from 'next/image';

const SingleBlogPage = () => {
    const router = useRouter();
    // const { id } = router.query;

    // This is a placeholder. Ideally, you'd fetch the blog data based on the ID.
    const blogPost = {
        title: "How to Change Your Career to UX Design",
        date: "Apr 8, 2022",
        content: `
            <h2>What is UX Design?</h2>
            <p>UX design stands for user experience design...</p>
            <h2>Why Change Your Career to UX Design?</h2>
            <p>There are many reasons why you might want to change your career to UX design...</p>
            <!-- More content here -->
        `,
        image: img2,
    };

    return (
        <div className='px-5 h-full overflow-y-scroll lg:px-20 py-20'>
            <button onClick={() => router.back()} className='text-gray-500 p-3 mb-5'>&larr; Go back</button>
            <div className="max-w-[800px] mx-auto w-full">

                <h1 className='text-5xl font-bold'>{blogPost.title}</h1>
                <p className='text-sm text-gray-500'>{blogPost.date}</p>
                <Image height={24} width={24} src={blogPost.image.src} alt={blogPost.title} className='my-5 w-full' />
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className='prose lg:prose-xl' />
            </div>
        </div>
    );
}

export default SingleBlogPage;
