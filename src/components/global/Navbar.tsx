'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import React from 'react';

const Navbar = () => {
    const pathname = usePathname()


    const navItems = [
        { name: '_hello', path: '/' },
        { name: '_about', path: '/about' },
        { name: '_projects', path: '/projects' },
        { name: '_blog', path: '/blog' },
        { name: '_contact', path: '/contact' },
    ];

    return (
        <header className='w-screen border-b flex justify-between items-center bg-black text-white'>
            <h1 className='text-2xl px-5 md:px-10 font-bold'>Aakash Yadav</h1>
            <nav className='hidden md:block'>
                <ul className='flex '>
                    {navItems.slice(0, -1).map((item) => (
                        <Link key={item.name} href={item.path} className={`transition-all relative ease-in-out duration-500 border-l px-10 py-4 ${pathname === item.path ? 'bg-gray-800 text-orange-500' : 'hover:bg-gray-800'}`}>
                            {item.name}
                            {pathname === item.path && <div className='h-1 w-full left-0 right-0 absolute bottom-0 z-[100] bg-red-500 '></div>}
                        </Link>
                    ))}
                </ul>
            </nav>
            <Link href={navItems[navItems.length - 1].path} className={`border-l transition-all ease-in-out duration-500 px-5 md:px-10 hover:bg-gray-800 p-3 ${pathname === navItems[navItems.length - 1].path ? 'bg-gray-800' : ''}`}>
                {navItems[navItems.length - 1].name}
                {pathname === navItems[navItems.length - 1].path && <div className='h-1 bg-red-500 mt-1'></div>}
            </Link>
        </header>
    );
};

export default Navbar;
