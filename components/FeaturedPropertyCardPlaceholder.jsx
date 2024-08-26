'use client';
import Image from 'next/image';
import { useState } from 'react';
import Placeholder from '@/public/images/placeholder.svg';

const FeaturedPropertyCardPlaceholder = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            src={isLoaded ? src : Placeholder}
            alt={alt}
            layout='fill'
            objectFit='cover'
            priority
            className='rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none hover:opacity-75 transition duration-300 ease-in-out'
            unoptimized
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default FeaturedPropertyCardPlaceholder;
