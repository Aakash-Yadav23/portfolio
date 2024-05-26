'use client'


import React from 'react';
import BlogCard from '@/components/BlogCard';
import img1 from '@/assets/48QJD0lXEtWbrzrFOHBw5Kr5Nfk.jpg';
import img2 from '@/assets/WzTTCiua7AnAp4ymWE8uAS68eU.jpg';
import img3 from '@/assets/UiPE2QVhbzIOwap1JDZvfixWo.jpg';
import img4 from '@/assets/kq6oh18wnDvlRBQrsGnGVTNDjeM.jpg';
import { useRouter } from 'next/navigation';

const blogPosts = [
    { image: img1, title: "From Pixels to Perfection: Crafting Exceptional UX Design", date: "Feb 28, 2022", id: 1 },
    { image: img2, title: "How to Change Your Career to UX Design", date: "Apr 8, 2022", id: 2 },
    { image: img3, title: "Mastering the Art of User Interface Design: Essential Tips and Best Practices", date: "Mar 15, 2022", id: 3 },
    { image: img4, title: "My Journey from Architecture to UI/UX Design", date: "Feb 28, 2022", id: 4 },
];

const BlogPage = () => {
    const router = useRouter();

    const handleCardClick = (id: number) => {
        router.push(`/blog/${id}`);
    };

    return (
        <div className='grid grid-cols-1 h-full overflow-y-scroll md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-20 py-20'>
            {blogPosts.map(post => (
                <BlogCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    date={post.date}
                    onClick={() => handleCardClick(post.id)}
                />
            ))}
        </div>
    );
}

export default BlogPage;
