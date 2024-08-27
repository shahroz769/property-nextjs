import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
          <SearchFormSkeleton />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Skeleton className="w-48 h-8 mb-4" />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[...Array(9)].map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Skeleton className="w-64 h-10 rounded-lg" />
          </div>
        </div>
      </section>
    </>
  )
}

function SearchFormSkeleton() {
  return (
    <div className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <Skeleton className="w-full h-[46px] rounded-lg" />
      </div>
      <div className='w-full md:w-2/5 md:pl-2'>
        <Skeleton className="w-full h-[46px] rounded-lg" />
      </div>
      <div className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto'>
        <Skeleton className="w-full md:w-[100px] h-[46px] rounded-lg" />
      </div>
    </div>
  )
}

function PropertyCardSkeleton() {
  return (
    <div className='rounded-xl shadow-md relative bg-white'>
      <Skeleton className="w-full h-[300px] rounded-t-xl" />
      <div className='p-4'>
        <Skeleton className="w-20 h-6 mb-2" />
        <Skeleton className="w-3/4 h-6 mb-4" />
        <div className='flex justify-center items-center gap-6 mb-4'>
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-16 h-6" />
        </div>
        <div className='flex justify-center items-center gap-6 mb-4'>
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
        </div>
        <Skeleton className="w-full h-[1px] my-4" />
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Skeleton className="w-32 h-6 mb-4 sm:mb-0" />
          <Skeleton className="w-full sm:w-32 h-10 rounded-lg" />
        </div>
      </div>
    </div>
  )
}