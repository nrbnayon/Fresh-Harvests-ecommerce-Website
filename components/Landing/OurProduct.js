"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
import { getCartCount } from "@/utils/cartUtils";
import { FilterButton } from "../FilterButton";
import l1 from "../../assets/l1.svg";
import l2 from "../../assets/l4.svg";
import Image from "next/image";

export default function OurProduct() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const { data: productsResponse, isLoading: isProductsLoading } =
    useDynamicTypesQuery({
      dynamicApi: "products",
    });

  const { data: categoriesResponse, isLoading: isCategoriesLoading } =
    useDynamicTypesQuery({
      dynamicApi: "categories",
    });

  useEffect(() => {
    setCartCount(getCartCount());
  }, []);

  const handleAddToCart = () => {
    setCartCount(getCartCount());
  };

  const products = productsResponse?.data || [];
  const categories = categoriesResponse?.data || [];

  const filters = [
    { id: "all", label: "All" },
    ...categories.map((cat) => ({
      id: cat.id,
      label:
        cat.categoryName.charAt(0).toUpperCase() + cat.categoryName.slice(1),
    })),
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => activeFilter === "all" || product.categoryId === activeFilter
  );

  // Limit products to 8 if not showing all
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  if (isProductsLoading || isCategoriesLoading) {
    return (
      <div className='min-h-screen w-full bg-white py-8 md:py-16 flex items-center justify-center'>
        <div className='text-xl md:text-2xl text-gray-600'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen w-full bg-white py-8 md:py-16'>
      <div className='px-4 md:px-6 max-w-[1200px] mx-auto relative'>
        {/* Header Section */}
        <div className='text-center mb-6 md:mb-8 space-y-3 md:space-y-4'>
          <div className='inline-block bg-[#749B3F19] rounded-md'>
            <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
              Our Products
            </span>
          </div>
          <h1 className='text-3xl md:text-5xl text-textPrimaryColor font-rubik font-medium'>
            Our Fresh Products
          </h1>
          <p className='text-textSecondary font-questrial text-sm max-w-2xl mx-auto px-4'>
            We pride ourselves on offering a wide variety of fresh and quality
            products.
          </p>
        </div>

        {/* Filters Section */}
        <div className='overflow-x-auto mb-6 md:mb-8 -mx-4 md:mx-0 px-4 md:px-0'>
          <div className='flex flex-nowrap md:flex-wrap md:justify-center gap-3 md:gap-4 min-w-min'>
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                label={filter.label}
                isActive={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className='whitespace-nowrap'
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className='w-full'>
          {displayedProducts.length > 0 ? (
            <div className='flex flex-col w-full mx-auto sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center'>
              {displayedProducts.map((product) => (
                <div key={product.id} className='w-full md:max-w-[320px]'>
                  <ProductCard
                    product={product}
                    isActive={product.id === activeProduct}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className='col-span-full text-center text-gray-600'>
              No products found. Please set this frontend url in backend cros
              origin configuration and try again!
            </div>
          )}
        </div>

        {/* See All Products Button */}
        {filteredProducts.length > 8 && (
          <div className='text-center mt-8 md:mt-12'>
            <button
              onClick={() => {
                setShowAll(!showAll);
                setActiveFilter("all");
              }}
              className='w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-primaryColor text-primaryColor rounded-md hover:bg-primaryColor hover:text-white transition-colors'
            >
              {showAll ? "Show Less" : "See All Products"}
            </button>
          </div>
        )}

        {/* Decorative Elements */}
        <div className='hidden md:block absolute top-8 right-[78px]'>
          <Image src={l1} alt='bg' width={67} height={61} />
        </div>
        <div className='hidden md:block absolute top-16 left-[78px]'>
          <Image src={l2} alt='bg' width={67} height={61} />
        </div>
      </div>
    </div>
  );
}
