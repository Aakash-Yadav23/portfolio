'use client'

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateNew: React.FC = () => {
    const { handleSubmit, control, register, reset } = useForm();
    const [images, setImages] = useState<File[]>([]);
    const [videos, setVideos] = useState<File[]>([]);
    const [code, setCode] = useState<string>('');

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages([...images, ...Array.from(e.target.files)]);
        }
    };

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideos([...videos, ...Array.from(e.target.files)]);
        }
    };

    return (
        <div className='container mx-auto py-20 px-5 text-white'>
            <h1 className='text-3xl font-bold mb-10'>Create New Blog Post</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div className='space-y-2'>
                    <label className='block text-gray-400'>Title</label>
                    <input
                        {...register('title', { required: true })}
                        type='text'
                        className='w-full px-4 bg-gray-800 py-2 text-gray-500 rounded-md'
                        placeholder='Blog Title'
                    />
                </div>
                <div className='space-y-2'>
                    <label className='block text-white'>Body</label>
                    <Controller
                        name='body'
                        control={control}
                        render={({ field }) => (
                            <ReactQuill
                                {...field}
                                theme='snow'
                                className='bg-gray-800 text-gray-500'
                            />
                        )}
                    />
                </div>
                <div className='space-y-2'>
                    <label className='block text-gray-400'>Code Snippet</label>
                    <textarea
                        {...register('codeSnippet')}
                        className='w-full px-4 py-2 bg-gray-800 text-white rounded-md'
                        rows={5}
                        placeholder='Code Snippet'
                        onChange={(e) => setCode(e.target.value)}
                    ></textarea>
                </div>
                <div className='space-y-2'>
                    <label className='block text-gray-400'>Images</label>
                    <input
                        type='file'
                        accept='image/*'
                        multiple
                        className='w-full  text-gray-500'
                        onChange={handleImageUpload}
                    />
                    <div className='flex gap-2 mt-2'>
                        {images.map((image, index) => (
                            <Image
                                height={24}
                                width={24}
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt='Upload Preview'
                                className='w-24 h-24 object-cover rounded-md'
                            />
                        ))}
                    </div>
                </div>
                <div className='space-y-2'>
                    <label className='block text-gray-400'>Videos</label>
                    <input
                        type='file'
                        accept='video/*'
                        multiple
                        className='w-full text-gray-500'
                        onChange={handleVideoUpload}
                    />
                    <div className='flex gap-2 mt-2'>
                        {videos.map((video, index) => (
                            <video
                                key={index}
                                src={URL.createObjectURL(video)}
                                controls
                                className='w-24 h-24 object-cover rounded-md'
                            />
                        ))}
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateNew;


// BzeS7iNXiFz1nGAy
