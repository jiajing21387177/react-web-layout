import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const ServiceCard = ({ icon, title, content }) => {
    return (
        <div className='flex flex-col basis-full md:basis-1/3 gap-3'>
            {icon}
            <h3 className='font-bold'>
                {title}
            </h3>
            <p className='flex-auto'>
                {content}
            </p>
            <div>
                <a href="#" className="mt-5 text-indigo-400 inline-flex gap-1">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 self-center"></ArrowRightIcon>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
