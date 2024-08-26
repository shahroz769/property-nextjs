'use client';
import Image from 'next/image';
import { useState } from 'react';
import Placeholder from '@/public/images/placeholder.svg';

const PropertyCardPlaceholder = ({ src, alt, priority }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            src={isLoaded ? src : Placeholder}
            alt={alt}
            height={0}
            width={0}
            sizes='100vw'
            layout='fill'
            objectFit='cover'
            priority={priority}
            className='rounded-t-xl hover:opacity-75 transition duration-300 ease-in-out'
            unoptimized
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default PropertyCardPlaceholder;
