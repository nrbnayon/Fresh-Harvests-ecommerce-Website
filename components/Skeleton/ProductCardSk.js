import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className='block'>
      <div className='block'>
        <div className='bg-white md:max-w-[320px] rounded-3xl px-3 pt-3 pb-5 flex flex-col items-center shadow-lg transition-all duration-300'>
          {/* Image skeleton */}
          <div className='w-full h-52 mb-4 relative bg-[#F4F6F6] rounded-2xl'>
            <Skeleton className='w-full h-full rounded-2xl' />{" "}
            {/* Skeleton for the image */}
          </div>
          {/* Product name skeleton */}
          <div className='w-full mb-2'>
            <Skeleton className='w-3/4 h-6 mb-2 rounded-md' />{" "}
            {/* Skeleton for the title */}
          </div>
          {/* Price skeleton */}
          <div className='w-full mb-4'>
            <Skeleton className='w-1/2 h-6 mb-4 rounded-md' />{" "}
            {/* Skeleton for the price */}
          </div>
          {/* Add to cart button skeleton */}
          <Skeleton className='w-full h-12 rounded-md' />{" "}
          {/* Skeleton for the button */}
        </div>
      </div>
    </div>
  );
}
