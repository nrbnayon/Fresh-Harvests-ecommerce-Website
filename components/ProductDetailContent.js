"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
import { addToCart } from "@/utils/cartUtils";
import { toast } from "react-hot-toast";
import RelatedProduct from "./RelatedProduct";

const ProductDetailContent = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { data: productData } = useDynamicTypesQuery({
    dynamicApi: "products",
    id: id,
  });

  const { data: relatedProductsData } = useDynamicTypesQuery({
    dynamicApi: `products?categoryId=${productData?.data?.categoryId}`,
  });

  const product = productData?.data;
  const relatedProducts = relatedProductsData?.data
    ?.filter((p) => p.id !== id)
    .slice(0, 4);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0 && newQuantity <= product?.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success("Product added to cart successfully!");
  };

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-xl text-gray-600'>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {/* Product Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='space-y-4'>
          <div className='aspect-square relative rounded-2xl overflow-hidden bg-[#F4F6F6]'>
            <Image
              src={product?.images[activeImageIndex]}
              alt={product?.productName}
              fill
              className='object-contain'
            />
          </div>
          <div className='flex gap-4 overflow-x-auto'>
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`relative w-24 h-24 rounded-lg overflow-hidden ${
                  idx === activeImageIndex ? "ring-2 ring-gray-500" : ""
                }`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`${product?.productName} ${idx + 1}`}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className='space-y-6'>
          <div className='inline-block bg-[#749B3F19] rounded-md'>
            <span className='px-3 py-1 text-green-600 text-sm font-medium'>
              In Stock: {product.stock}
            </span>
          </div>
          <h1 className='text-4xl font-semibold text-gray-900'>
            {product.productName}
          </h1>
          <div className='flex items-center gap-2'>
            <div className='flex text-yellow-400'>{"★".repeat(5)}</div>
            <span className='text-gray-600'>(5 review)</span>
          </div>
          <p className='text-3xl font-bold text-primaryColor'>
            ${product.price.toFixed(2)}/kg
          </p>
          <p className='text-gray-600'>{product.description}</p>

          {/* Quantity Selector */}
          <div className='flex items-center gap-4'>
            <span className='text-gray-700'>Quantity</span>
            <div className='flex items-center border rounded-md'>
              <button
                className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className='px-4 py-2'>{quantity}</span>
              <button
                className='px-4 py-2 text-gray-600 hover:bg-gray-100'
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <span className='text-gray-500'>/kg</span>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4'>
            <Button
              onClick={() => {}}
              className='flex-1 py-6 border-[#D9D9D9] bg-white hover:bg-gray-50 text-black'
            >
              Save as favorite
            </Button>
            <Button
              onClick={handleAddToCart}
              className='flex-1 py-6 bg-primaryColor hover:bg-orange-600 text-white'
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <RelatedProduct relatedProducts={relatedProducts || []} />
    </>
  );
};

export default ProductDetailContent;
