// components/Profile.tsx
import React from 'react';

const Profile = () => {
    return (
        <div className='flex items-center space-x-4 mt-10'>
            <img src="/path-to-your-profile-pic.jpg" alt="Profile Picture" className='w-16 h-16 rounded-full' />
            <div>
                <h3 className='text-xl'>Aakash Yadav</h3>
                <a href="https://linkedin.com" className='text-blue-500'>LinkedIn</a>
            </div>
        </div>
    );
};

export default Profile;
