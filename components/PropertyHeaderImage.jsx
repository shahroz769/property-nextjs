import PropertyHeaderImagePlaceholder from '@/components/PropertyHeaderImagePlaceholder';

const PropertyHeaderImage = ({ image }) => {
    // Use Cloudinary image URL with transformations
    const cloudinaryImage = image.replace(
        'upload/',
        'upload/f_avif,h_1000,c_fill/'
    );

    return (
        <section>
            <div className='container-xl m-auto'>
                <div className='grid grid-cols-1'>
                    <PropertyHeaderImagePlaceholder src={cloudinaryImage} />
                </div>
            </div>
        </section>
    );
};
export default PropertyHeaderImage;
