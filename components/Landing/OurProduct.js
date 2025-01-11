"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductCard } from "../ProductCard";
import { FilterButton } from "../FilterButton";
import { getCartCount } from "@/utils/cartUtils";
import l1 from "../../assets/l1.svg";
import l2 from "../../assets/l4.svg";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import { ProductCardSkeleton } from "../Skeleton/ProductCardSk";

// Fallback data when API fails
const FALLBACK_CATEGORIES = [
  { id: "1", categoryName: "Fruits" },
  { id: "2", categoryName: "Salad" },
  { id: "3", categoryName: "Vegetable" },
];

const FALLBACK_PRODUCTS = [
  {
    id: "1",
    productName: "Mushroom",
    description: "Sweet and nutritious bananas perfect for snacking.",
    price: 20.99,
    stock: 50,
    images: [p1, p2, p3],
    categoryId: "1",
  },
  {
    id: "2",
    productName: "Mustard",
    description: "Fresh Mustard with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p2],
    categoryId: "1",
  },
  {
    id: "3",
    productName: "Orange",
    description: "Fresh orange with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p3],
    categoryId: "1",
  },
  {
    id: "4",
    productName: "Pomegranate",
    description: "Fresh Pomegranate with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p4],
    categoryId: "2",
  },
  {
    id: "5",
    productName: "Kiwi",
    description: "Fresh Kiwi with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p5],
    categoryId: "3",
  },
  {
    id: "6",
    productName: "Coconut",
    description: "Fresh coconuts with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p6, p7, p8],
    categoryId: "2",
  },
  {
    id: "7",
    productName: "Guava",
    description: "Fresh guava with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p7, p8],
    categoryId: "1",
  },
  {
    id: "8",
    productName: "Eggplant",
    description: "Fresh Eggplant with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p8],
    categoryId: "2",
  },
  {
    id: "9",
    productName: "Eggplant",
    description: "Fresh Eggplant with sweet water and tender meat.",
    price: 200,
    stock: 50,
    images: [p8],
    categoryId: "2",
  },
];

export default function OurProduct() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Try to fetch data from the backend
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
        ]);

        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        // Ensure we're setting an array of products
        setProducts(
          Array.isArray(productsData)
            ? productsData
            : productsData?.data && Array.isArray(productsData.data)
            ? productsData.data
            : FALLBACK_PRODUCTS
        );

        setCategories(categoriesData?.data || FALLBACK_CATEGORIES);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Backend connection failed, Update backend CORS settings");
        // Use fallback data
        setProducts(FALLBACK_PRODUCTS);
        setCategories(FALLBACK_CATEGORIES);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    setCartCount(getCartCount());
  }, []);

  const handleAddToCart = () => {
    setCartCount(getCartCount());
  };

  const filters = [
    { id: "all", label: "All" },
    ...categories.map((cat) => ({
      id: cat.id,
      label:
        cat.categoryName.charAt(0).toUpperCase() + cat.categoryName.slice(1),
    })),
  ];

  const filteredProducts =
    products?.filter?.(
      (product) => activeFilter === "all" || product.categoryId === activeFilter
    ) || [];

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  if (isLoading) {
    return (
      <div className='min-h-screen w-full bg-gray-50 py-12 md:py-20 flex flex-col items-center justify-center'>
        <div className='text-xl md:text-2xl text-gray-700 mb-6'>Loading...</div>

        {/* Grid for responsive layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] p-4'>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
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
          {error && (
            <p className='text-amber-600 text-sm'>
              Note: Using demo data. Please configure backend CORS settings to
              view live data.
            </p>
          )}
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
              No products found in this category. Because of this
              <p className='text-amber-600 text-sm mt-2'>
                Note: Backend CORS not connected. Please configure backend CORS
                settings to view all data.
              </p>
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

// "use client";

// import { useState, useEffect } from "react";
// import { ProductCard } from "../ProductCard";
// import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
// import { getCartCount } from "@/utils/cartUtils";
// import { FilterButton } from "../FilterButton";
// import l1 from "../../assets/l1.svg";
// import l2 from "../../assets/l4.svg";
// import Image from "next/image";

// export default function OurProduct() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [activeProduct, setActiveProduct] = useState(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [showAll, setShowAll] = useState(false);

//   const { data: productsResponse, isLoading: isProductsLoading } =
//     useDynamicTypesQuery({
//       dynamicApi: "products",
//     });

//   const { data: categoriesResponse, isLoading: isCategoriesLoading } =
//     useDynamicTypesQuery({
//       dynamicApi: "categories",
//     });

//   useEffect(() => {
//     setCartCount(getCartCount());
//   }, []);

//   const handleAddToCart = () => {
//     setCartCount(getCartCount());
//   };

//   const products = productsResponse?.data || [];
//   const categories = categoriesResponse?.data || [];

//   const filters = [
//     { id: "all", label: "All" },
//     ...categories.map((cat) => ({
//       id: cat.id,
//       label:
//         cat.categoryName.charAt(0).toUpperCase() + cat.categoryName.slice(1),
//     })),
//   ];

//   // Filter products based on selected category
//   const filteredProducts = products.filter(
//     (product) => activeFilter === "all" || product.categoryId === activeFilter
//   );

//   // Limit products to 8 if not showing all
//   const displayedProducts = showAll
//     ? filteredProducts
//     : filteredProducts.slice(0, 8);

//   if (isProductsLoading || isCategoriesLoading) {
//     return (
//       <div className='min-h-screen w-full bg-white py-8 md:py-16 flex items-center justify-center'>
//         <div className='text-xl md:text-2xl text-gray-600'>Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className='min-h-screen w-full bg-white py-8 md:py-16'>
//       <div className='px-4 md:px-6 max-w-[1200px] mx-auto relative'>
//         {/* Header Section */}
//         <div className='text-center mb-6 md:mb-8 space-y-3 md:space-y-4'>
//           <div className='inline-block bg-[#749B3F19] rounded-md'>
//             <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
//               Our Products
//             </span>
//           </div>
//           <h1 className='text-3xl md:text-5xl text-textPrimaryColor font-rubik font-medium'>
//             Our Fresh Products
//           </h1>
//           <p className='text-textSecondary font-questrial text-sm max-w-2xl mx-auto px-4'>
//             We pride ourselves on offering a wide variety of fresh and quality
//             products.
//           </p>
//         </div>

//         {/* Filters Section */}
//         <div className='overflow-x-auto mb-6 md:mb-8 -mx-4 md:mx-0 px-4 md:px-0'>
//           <div className='flex flex-nowrap md:flex-wrap md:justify-center gap-3 md:gap-4 min-w-min'>
//             {filters.map((filter) => (
//               <FilterButton
//                 key={filter.id}
//                 label={filter.label}
//                 isActive={activeFilter === filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className='whitespace-nowrap'
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className='w-full'>
//           {displayedProducts.length > 0 ? (
//             <div className='flex flex-col w-full mx-auto sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center'>
//               {displayedProducts.map((product) => (
//                 <div key={product.id} className='w-full md:max-w-[320px]'>
//                   <ProductCard
//                     product={product}
//                     isActive={product.id === activeProduct}
//                     onAddToCart={handleAddToCart}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className='col-span-full text-center text-gray-600'>
//               No products found. Please set this frontend url in backend cros
//               origin configuration and try again!
//             </div>
//           )}
//         </div>

//         {/* See All Products Button */}
//         {filteredProducts.length > 8 && (
//           <div className='text-center mt-8 md:mt-12'>
//             <button
//               onClick={() => {
//                 setShowAll(!showAll);
//                 setActiveFilter("all");
//               }}
//               className='w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-primaryColor text-primaryColor rounded-md hover:bg-primaryColor hover:text-white transition-colors'
//             >
//               {showAll ? "Show Less" : "See All Products"}
//             </button>
//           </div>
//         )}

//         {/* Decorative Elements */}
//         <div className='hidden md:block absolute top-8 right-[78px]'>
//           <Image src={l1} alt='bg' width={67} height={61} />
//         </div>
//         <div className='hidden md:block absolute top-16 left-[78px]'>
//           <Image src={l2} alt='bg' width={67} height={61} />
//         </div>
//       </div>
//     </div>
//   );
// }
