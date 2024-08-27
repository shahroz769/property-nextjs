import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Loading() {
    return (
        <>
            <Skeleton className='bg-gray-200 w-full h-[400px]' />
            <section>
                <div className='container m-auto py-6 px-6'>
                    <Link
                        href='/properties'
                        className='text-blue-500 hover:text-blue-600 flex items-center'
                    >
                        <ArrowLeft className='mr-2' /> Back to Properties
                    </Link>
                </div>
            </section>
            <section className='bg-blue-50'>
                <div className='container m-auto py-10 px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                        <PropertyDetailsSkeleton />
                        <aside className='space-y-4'>
                            <ShareButtonsSkeleton />
                            <BookmarkButtonSkeleton />
                            <PropertyContactFormSkeleton />
                        </aside>
                    </div>
                </div>
            </section>
            <PropertyImagesSkeleton />
        </>
    );
}

function PropertyDetailsSkeleton() {
    return (
        <main>
            <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <Skeleton className='bg-gray-200 w-1/4 h-6 mb-4' />
                <Skeleton className='bg-gray-200 w-3/4 h-8 mb-4' />
                <Skeleton className='bg-gray-200 w-1/2 h-6 mb-4' />
                <Skeleton className='bg-gray-200 w-full h-8 my-6' />
                <div className='flex flex-col md:flex-row justify-around'>
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className='flex items-center justify-center mb-4 pb-4 md:pb-0'
                        >
                            <Skeleton className='bg-gray-200 w-20 h-6 mr-2' />
                            <Skeleton className='bg-gray-200 w-16 h-8' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <Skeleton className='bg-gray-200 w-1/4 h-6 mb-6' />
                <div className='flex justify-center gap-4 mb-4'>
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className='bg-gray-200 w-20 h-8' />
                    ))}
                </div>
                <Skeleton className='bg-gray-200 w-full h-24' />
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <Skeleton className='bg-gray-200 w-1/4 h-6 mb-6' />
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {[...Array(9)].map((_, i) => (
                        <li key={i}>
                            <Skeleton className='bg-gray-200 w-full h-6' />
                        </li>
                    ))}
                </ul>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <Skeleton className='bg-gray-200 w-full h-[500px]' />
            </div>
        </main>
    );
}

function ShareButtonsSkeleton() {
    return (
        <div className='space-y-2'>
            <Skeleton className='bg-gray-200 w-3/4 h-6 mx-auto' />
            <div className='flex gap-3 justify-center'>
                {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className='bg-gray-200 w-10 h-10 rounded-full' />
                ))}
            </div>
        </div>
    );
}

function BookmarkButtonSkeleton() {
    return <Skeleton className='bg-gray-200 w-full h-10 rounded-md' />;
}

function PropertyContactFormSkeleton() {
    return (
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6'>
            <Skeleton className='bg-gray-200 w-3/4 h-8' />
            {[...Array(4)].map((_, i) => (
                <div key={i} className='space-y-2'>
                    <Skeleton className='bg-gray-200 w-1/4 h-4' />
                    <Skeleton className='bg-gray-200 w-full h-10 rounded-lg' />
                </div>
            ))}
            <Skeleton className='bg-gray-200 w-full h-32 rounded-lg' />
            <Skeleton className='bg-gray-200 w-full h-10 rounded-md' />
        </div>
    );
}

function PropertyImagesSkeleton() {
    return (
        <section className='bg-blue-50 p-4'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 gap-4'>
                    {[...Array(4)].map((_, i) => (
                        <Skeleton
                            key={i}
                            className='bg-gray-200 h-[400px] w-full rounded-xl'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
