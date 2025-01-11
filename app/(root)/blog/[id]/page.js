import ProductDetailContent from "@/components/ProductDetailContent";
import { Suspense } from "react";

async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const { id: productId } = resolvedParams;

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-[1439px] mx-auto'>
        <div className='max-w-[1200px] mx-auto px-4 py-8'>
          <Suspense
            fallback={
              <div className='flex items-center justify-center min-h-[50vh]'>
                <div className='text-xl text-gray-600'>Loading...</div>
              </div>
            }
          >
            <ProductDetailContent id={productId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
