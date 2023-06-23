import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const ServiceCard = ({ icon, title, content }) => {
    return (
        <div className='flex flex-col basis-full md:basis-1/3 gap-3'>
            {icon}
            <div className='font-bold'>
                {title}
            </div>
            <div className='flex-auto'>
                {content}
            </div>
            <a href="#" className="mt-5 text-indigo-400 flex gap-1">
                Learn more
                <ArrowRightIcon className="h-4 w-4 self-center"></ArrowRightIcon>
            </a>
        </div>
    );
};

export default ServiceCard;
