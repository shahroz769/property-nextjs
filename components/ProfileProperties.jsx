'use client';
import ProfilePropertiesPlaceholder from '@/components/ProfilePropertiesPlaceholder';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import deleteProperty from '@/app/actions/deleteProperty';

const ProfileProperties = ({ properties: initialProperties }) => {
    const [properties, setProperties] = useState(initialProperties);

    const handleDeleteProperty = async (propertyId) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this property?'
        );

        if (!confirmed) return;

        const deletePropertyById = deleteProperty.bind(null, propertyId);

        await deletePropertyById();

        toast.success('Property Deleted');

        const updatedProperties = properties.filter(
            (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);
    };

    return (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {properties.map((property, index) => {
                // Apply Cloudinary transformation to the first image
                const transformedImage = property.images[0].replace(
                    'upload/',
                    'upload/f_avif,w_347,h_192,c_fill/'
                );

                return (
                    <div
                        key={property._id}
                        className='bg-white rounded-lg shadow-md overflow-hidden'
                    >
                        <Link href={`/properties/${property._id}`}>
                            <ProfilePropertiesPlaceholder
                                src={transformedImage}
                                alt={property.name}
                            />
                        </Link>
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold mb-2'>
                                {property.name}
                            </h3>
                            <p className='text-sm text-gray-500 mb-4'>
                                {property.location.street},{' '}
                                {property.location.city},{' '}
                                {property.location.state}
                            </p>
                            <div className='flex justify-between space-x-2'>
                                <Link
                                    href={`/properties/${property._id}/edit`}
                                    className='flex-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center'
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() =>
                                        handleDeleteProperty(property._id)
                                    }
                                    className='flex-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center'
                                    type='button'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProfileProperties;
