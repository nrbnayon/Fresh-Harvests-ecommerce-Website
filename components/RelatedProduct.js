"use client";
import Image from "next/image";
import { Card } from "./ui/card";
import { Link } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { getCartCount } from "@/utils/cartUtils";

export default function RelatedProduct({ relatedProducts }) {
  const [cartCount, setCartCount] = useState(0);

  if (!Array.isArray(relatedProducts)) {
    return null;
  }

  const handleAddToCart = () => {
    setCartCount(getCartCount());
  };

  return (
    <div>
      {relatedProducts.length > 0 && (
        <div className='mt-20 min-w-full'>
          <div className='text-center mb-12 space-y-4'>
            <div className='inline-block bg-[#749B3F19] rounded-md'>
              <span className='px-3 py-1 text-green-600 text-sm font-medium'>
                Related products
              </span>
            </div>
            <h2 className='text-4xl font-semibold text-gray-900'>
              Related products
            </h2>
            <p className='text-gray-600 max-w-md mx-auto'>
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {relatedProducts.map((relatedProduct) => (
              // <Link key={relatedProduct.id} href={`/blog/${relatedProduct.id}`}>
              //   <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
              //     <div className='aspect-square relative bg-[#F4F6F6]'>
              //       <Image
              //         src={
              //           relatedProduct?.images[0] || "/placeholder-product.jpg"
              //         }
              //         alt={relatedProduct?.productName}
              //         fill
              //         className='object-contain'
              //       />
              //     </div>
              //     <div className='p-4'>
              //       <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              //         {relatedProduct?.productName}
              //       </h3>
              //       <p className='text-primaryColor font-bold'>
              //         ${relatedProduct?.price.toFixed(2)}/kg
              //       </p>
              //     </div>
              //   </Card>
              // </Link>
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                // isActive={relatedProduct.id === activeProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
