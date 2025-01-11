"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/utils/cartUtils";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import AuthModal from "./Auth/AuthModal";
import { useState } from "react";

export function ProductCard({ product, isActive, onAddToCart }) {
  const { productName, price, images, id } = product;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  const { user } = useSelector((state) => state.auth) || {};

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    onAddToCart();
    toast.success("Product added to cart successfully!");
  };

  const handleProductClick = (e) => {
    if (!user) {
      e.preventDefault();
      setAuthType("login");
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className='block'>
      <Link href={`/blog/${id}`} onClick={handleProductClick} className='block'>
        <div className='bg-white max-w-[282px] rounded-3xl px-3 pt-3 pb-5 flex flex-col items-center shadow-lg transition-all duration-300 hover:border-gray-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105'>
          <div className='w-full h-52 mb-4 relative bg-[#F4F6F6] rounded-2xl'>
            <Image
              src={images[0] || "/placeholder-product.jpg"}
              alt={productName}
              fill
              className='object-contain'
            />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>
            {productName}
          </h3>
          <p className='text-gray-600 mb-4'>${price.toFixed(2)}/kg</p>
          <Button
            onClick={handleAddToCart}
            className='w-full py-6 text-base font-medium border-[#D9D9D9] bg-white hover:bg-orange-600 text-black hover:text-white'
          >
            Add to cart
          </Button>
        </div>
      </Link>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
      />
    </div>
  );
}
