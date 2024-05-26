import Image from 'next/image';
import React from 'react';

interface BlogCardProps {
    image: any;
    title: string;
    date: string;
    onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, onClick }) => {
    return (
        <div className='flex flex-col gap-2 cursor-pointer' onClick={onClick}>
            <Image alt={title} src={image} />
            <h1 className='text-lg font-semibold'>
                {title}
            </h1>
            <p className='text-sm text-gray-500'>
                {date}
            </p>
        </div>
    );
}

export default BlogCard;
