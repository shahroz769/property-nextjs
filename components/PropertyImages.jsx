'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyImages = ({ images }) => {
    // Map through the images array to apply Cloudinary transformations
    const cloudinaryImages = images.map((image) =>
        image.replace('upload/', 'upload/f_avif,h_1000,c_fill/')
    );

    return (
        <Gallery>
            <section className='bg-blue-50 p-4'>
                <div className='container mx-auto'>
                    {cloudinaryImages.length === 1 ? (
                        <Item
                            original={cloudinaryImages[0]}
                            thumbnail={cloudinaryImages[0]}
                            width='1000'
                            height='600'
                        >
                            {({ ref, open }) => (
                                <Image
                                    ref={ref}
                                    onClick={open}
                                    src={cloudinaryImages[0]}
                                    alt=''
                                    className='object-cover h-[400px] mx-auto rounded-xl hover:opacity-75 transition duration-300 ease-in-out'
                                    width={1800}
                                    height={400}
                                    unoptimized
                                />
                            )}
                        </Item>
                    ) : (
                        <div className='grid grid-cols-2 gap-4'>
                            {cloudinaryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`
                  ${
                      cloudinaryImages.length === 3 && index === 2
                          ? 'col-span-2'
                          : 'col-span-1'
                  }
                `}
                                >
                                    <Item
                                        original={image}
                                        thumbnail={image}
                                        width='1000'
                                        height='600'
                                    >
                                        {({ ref, open }) => (
                                            <Image
                                                ref={ref}
                                                onClick={open}
                                                src={image}
                                                alt=''
                                                className='object-cover h-[400px] w-full rounded-xl cursor-pointer hover:opacity-75 transition duration-300 ease-in-out'
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                unoptimized
                                            />
                                        )}
                                    </Item>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Gallery>
    );
};
export default PropertyImages;
