"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
import { getCartCount } from "@/utils/cartUtils";
import { FilterButton } from "../FilterButton";

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
      <div className='min-h-screen container mx-auto bg-white py-16 flex items-center justify-center'>
        <div className='text-2xl text-gray-600'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen container mx-auto bg-white py-16'>
      <div className='max-w-[1200px] mx-auto sm:px-6'>
        {/* Header with Cart Count */}
        <div className='text-center mb-8 relative space-y-4'>
          <div className='inline-block bg-[#749B3F19] rounded-md'>
            <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
              Our Products
            </span>
          </div>
          <h1 className='text-5xl  text-textPrimaryColor font-rubik font-medium mb-4'>
            Our Fresh Products
          </h1>
          <p className='text-textSecondary font-questrial text-sm  max-w-2xl mx-auto'>
            We pride ourselves on offering a wide variety of fresh and quality
            products.
          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isActive={product.id === activeProduct}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <div className='col-span-full text-center text-gray-600'>
              No products found in this category.
            </div>
          )}
        </div>

        {/* See All Products Button */}
        {filteredProducts.length > 8 && (
          <div className='text-center mt-8'>
            <button
              onClick={() => {
                setShowAll(!showAll);
                setActiveFilter("all");
              }}
              className='px-8 py-3 border-2 border-primaryColor text-primaryColor rounded-md hover:bg-primaryColor hover:text-white transition-colors'
            >
              {showAll ? "Show Less" : "See All Products"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
