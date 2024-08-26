'use client';
import Image from 'next/image';
import { useState } from 'react';
import Placeholder from '@/public/images/placeholder.svg';

const ProfilePropertiesPlaceholder = ({ src, alt, priority }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            className='w-full h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out'
            src={isLoaded ? src : Placeholder}
            alt={alt}
            width={500}
            height={300}
            priority={priority}
            unoptimized
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default ProfilePropertiesPlaceholder;
