'use client'

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const router = usePathname();
    const currentPath = router;

    const menuItems = [
        { name: 'Home', path: '/admin' },
        { name: 'Blog', path: '/manage-blogs' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Page', path: '/page' },
    ];

    return (
        <div className="flex min-h-screen text-white pt-[50px]">
            <aside className="w-64 bg-gray-80 border-r pt-[20px] border-gray-800 p-">
                <nav>
                    <ul className="space-y-2 px-5">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={`${item.path}`}>
                                    <span
                                        className={`w-full px-5 py-2 rounded-sm border flex transition-all ease-in-out duration-500 items-start border-gray-800 ${currentPath === item.path ? 'bg-gray-800' : 'hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
