import React from 'react'

export interface TextCardProps {
    icon?: React.ReactNode
    title: string;
    description: string;
    className?: string;
}

const TextCard: React.FC<TextCardProps> = ({ icon, className, title, description }) => {
    return (
        <div className={`flex  gap-5 ${className}`}>
            {icon &&
                <div className="bg-gray-800 p-3 rounded-sm h-fit border border-gray-800  text-gray-500">
                    {icon}
                </div>
            }
            <div className="flex gap-2 flex-col">

                <p className='text-white '>
                    {title}
                </p>
                <p className='text-gray-600 tex'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TextCard
