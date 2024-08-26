'use client';
import Image from 'next/image';
import { useState } from 'react';
import Placeholder from '@/public/images/placeholder2.svg';

const PropertyHeaderImagePlaceholder = ({ src, alt, priority }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            src={isLoaded ? src : Placeholder}
            alt='Property Banner'
            className='object-cover h-[400px] w-full hover:opacity-75 transition duration-300 ease-in-out'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            unoptimized
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default PropertyHeaderImagePlaceholder;
