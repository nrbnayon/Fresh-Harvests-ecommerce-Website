// components/ProductCard.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { addToCart } from "@/utils/cartUtils";
import { toast } from "react-hot-toast";

export function ProductCard({ product, isActive, onAddToCart }) {
  const { productName, price, images, id } = product;

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart();
    toast.success("Product added to cart successfully!");
  };

  return (
    <div className='bg-white max-w-[282px] rounded-3xl px-3 pt-3 pb-5 flex flex-col items-center shadow-lg transition-all duration-300 hover:border-gray-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105'>
      <div className='w-full h-52  mb-4 relative bg-[#F4F6F6] rounded-2xl'>
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
  );
}
