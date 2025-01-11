"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
import { addToCart } from "@/utils/cartUtils";
import { toast } from "react-hot-toast";
import RelatedProduct from "./RelatedProduct";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Head from "next/head";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

// Fallback product data
const FALLBACK_PRODUCT = {
  id: "1",
  productName: "Mushroom",
  description: "Sweet and nutritious bananas perfect for snacking.",
  price: 20.99,
  stock: 50,
  images: [p1, p2, p3],
  categoryId: "1",
};

// Fallback related products
const FALLBACK_RELATED_PRODUCTS = [
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
];

const ProductDetailContent = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);

  // Fetch product data with error handling
  const { data: productData, isError: productError } = useDynamicTypesQuery({
    dynamicApi: "products",
    id: id,
  });

  // Fetch related products with error handling
  const { data: relatedProductsData, isError: relatedError } =
    useDynamicTypesQuery({
      dynamicApi: `products?categoryId=${
        productData?.data?.categoryId || FALLBACK_PRODUCT.categoryId
      }`,
    });

  // Use fallback data if API fails
  const product = productError
    ? FALLBACK_PRODUCT
    : productData?.data || FALLBACK_PRODUCT;
  const relatedProducts = relatedError
    ? FALLBACK_RELATED_PRODUCTS
    : relatedProductsData?.data?.filter((p) => p.id !== id).slice(0, 4) ||
      FALLBACK_RELATED_PRODUCTS;

  // Show error message if both APIs fail
  React.useEffect(() => {
    if (productError || relatedError) {
      setError(
        "Backend connection failed. Showing demo data. Note: Update backend CORS settings, Please try again"
      );
    }
  }, [productError, relatedError]);

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

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{product?.productName} | Fresh Harvests</title>
        <meta
          name='description'
          content={`Buy ${
            product.productName
          } for just $${product?.price.toFixed(2)}. ${product?.description}`}
        />
        <meta
          name='keywords'
          content={`${product?.productName}, Organic Products, Fresh Harvests`}
        />
        <meta name='author' content='Fresh Harvests Team' />
        <meta property='og:title' content={product.productName} />
        <meta property='og:description' content={product.description} />
        <meta property='og:image' content={product?.images[0]} />
        <meta
          property='og:url'
          content={`https://freshtask.netlify.app/blog/${id}`}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={product?.productName} />
        <meta name='twitter:description' content={product?.description} />
        <meta name='twitter:image' content={product?.images[0]} />
        <link
          rel='canonical'
          href={`https://freshtask.netlify.app/blog/${id}`}
        />
      </Head>

      {/* Error Message */}
      {error && (
        <div className='mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
          <p className='text-amber-600 text-sm'>{error}</p>
        </div>
      )}

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
            {product.images.length > 1 && product.images.length <= 4
              ? product.images.map((img, idx) => (
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
                ))
              : product.images.length > 4
              ? Array.from({ length: 4 }).map((_, idx) => {
                  const randomIndex = Math.floor(
                    Math.random() * product.images.length
                  );
                  return (
                    <button
                      key={idx}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden ${
                        idx === activeImageIndex ? "ring-2 ring-gray-500" : ""
                      }`}
                      onClick={() => setActiveImageIndex(randomIndex)}
                    >
                      <Image
                        src={product.images[randomIndex]}
                        alt={`${product?.productName} ${idx + 1}`}
                        fill
                        className='object-cover'
                      />
                    </button>
                  );
                })
              : product.images.map((img, idx) => (
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
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='w-5 h-5 fill-yellow-400 text-yellow-400'
              />
            ))}
            <span className='text-sm text-gray-600'>5.0 (1 review)</span>
          </div>

          <div className='text-2xl font-bold text-orange-500'>
            ${product.price.toFixed(2)}
            <span className='text-base font-normal'>/kg</span>
          </div>

          <p className='text-gray-600'>{product.description}</p>

          {/* Quantity Selector */}
          <div className='flex items-center gap-4'>
            <span className='font-medium'>Quantity</span>
            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => handleQuantityChange(-1)}
                className='h-8 w-8'
              >
                <Minus className='h-4 w-4' />
              </Button>
              <span className='w-12 text-center'>{quantity}</span>
              <Button
                variant='outline'
                size='icon'
                onClick={() => handleQuantityChange(1)}
                className='h-8 w-8'
              >
                <Plus className='h-4 w-4' />
              </Button>
              <span className='text-gray-600'>/kg</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4'>
            <Button
              onClick={() => setIsFavorite(!isFavorite)}
              variant='outline'
              className='flex-1 py-6 border-[#D9D9D9] bg-white hover:bg-gray-50 text-black'
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />{" "}
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

      {/* Tabs Section */}
      <div className='bg-white rounded-lg w-full md:w-3/4 shadow-sm p-6 my-10'>
        <Tabs defaultValue='description' className='w-full'>
          <TabsList className='flex items-center gap-4'>
            <TabsTrigger
              value='description'
              className='flex items-start justify-center px-6 py-3 gap-2 w-[141px] h-[50px] bg-[#749B3F] border border-[#749B3F] text-white rounded-lg data-[state=active]:bg-[#749B3F] data-[state=active]:border-[#749B3F] data-[state=active]:text-white'
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value='reviews'
              className='flex items-start justify-center px-6 py-3 gap-2 w-[141px] h-[50px] bg-white border border-gray-300 text-gray-700 rounded-lg data-[state=active]:bg-[#749B3F] data-[state=active]:border-[#749B3F] data-[state=active]:text-white'
            >
              Reviews (1)
            </TabsTrigger>
          </TabsList>
          <TabsContent value='description' className='mt-6'>
            <div className='prose max-w-none'>
              <p>{product.description}</p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness enhance your recipes. Enjoy the goodness in
                its purest form, directly from nature.
              </p>
            </div>
          </TabsContent>
          <TabsContent value='reviews'>
            <div className='text-gray-600'>Reviews content coming soon...</div>
          </TabsContent>
        </Tabs>
      </div>

      <RelatedProduct relatedProducts={relatedProducts} />
    </>
  );
};

export default ProductDetailContent;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { useDynamicTypesQuery } from "@/redux/features/auth/dynamicType/dynamicTypeApiSlice";
// import { addToCart } from "@/utils/cartUtils";
// import { toast } from "react-hot-toast";
// import RelatedProduct from "./RelatedProduct";
// import { Heart, Minus, Plus, Star } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import Head from "next/head";

// const ProductDetailContent = ({ id }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [activeTab, setActiveTab] = useState("description");

//   const { data: productData } = useDynamicTypesQuery({
//     dynamicApi: "products",
//     id: id,
//   });

//   const { data: relatedProductsData } = useDynamicTypesQuery({
//     dynamicApi: `products?categoryId=${productData?.data?.categoryId}`,
//   });

//   const product = productData?.data;
//   const relatedProducts = relatedProductsData?.data
//     ?.filter((p) => p.id !== id)
//     .slice(0, 4);

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity > 0 && newQuantity <= product?.stock) {
//       setQuantity(newQuantity);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//     toast.success("Product added to cart successfully!");
//   };

//   if (!product) {
//     return (
//       <div className='min-h-screen flex items-center justify-center'>
//         <p className='text-xl text-gray-600'>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* SEO Metadata */}
//       <Head>
//         <title>{product?.productName} | Fresh Harvests</title>
//         <meta
//           name='description'
//           content={`Buy ${
//             product.productName
//           } for just $${product?.price.toFixed(2)}. ${product?.description}`}
//         />
//         <meta
//           name='keywords'
//           content={`${product?.productName}, Organic Products, Fresh Harvests`}
//         />
//         <meta name='author' content='Fresh Harvests Team' />
//         <meta property='og:title' content={product.productName} />
//         <meta property='og:description' content={product.description} />
//         <meta property='og:image' content={product?.images[0]} />
//         <meta
//           property='og:url'
//           content={`https://freshtask.netlify.app/blog/${id}`}
//         />
//         <meta name='twitter:card' content='summary_large_image' />
//         <meta name='twitter:title' content={product?.productName} />
//         <meta name='twitter:description' content={product?.description} />
//         <meta name='twitter:image' content={product?.images[0]} />
//         <link
//           rel='canonical'
//           href={`https://freshtask.netlify.app/blog/${id}`}
//         />
//       </Head>

//       {/* Product Section */}
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
//         <div className='space-y-4'>
//           <div className='aspect-square relative rounded-2xl overflow-hidden bg-[#F4F6F6]'>
//             <Image
//               src={product?.images[activeImageIndex]}
//               alt={product?.productName}
//               fill
//               className='object-contain'
//             />
//           </div>
//           <div className='flex gap-4 overflow-x-auto'>
//             {product.images.map((img, idx) => (
//               <button
//                 key={idx}
//                 className={`relative w-24 h-24 rounded-lg overflow-hidden ${
//                   idx === activeImageIndex ? "ring-2 ring-gray-500" : ""
//                 }`}
//                 onClick={() => setActiveImageIndex(idx)}
//               >
//                 <Image
//                   src={img}
//                   alt={`${product?.productName} ${idx + 1}`}
//                   fill
//                   className='object-cover'
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className='space-y-6'>
//           <div className='inline-block bg-[#749B3F19] rounded-md'>
//             <span className='px-3 py-1 text-green-600 text-sm font-medium'>
//               In Stock: {product.stock}
//             </span>
//           </div>
//           <h1 className='text-4xl font-semibold text-gray-900'>
//             {product.productName}
//           </h1>
//           <div className='flex items-center gap-2'>
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className='w-5 h-5 fill-yellow-400 text-yellow-400'
//               />
//             ))}
//             <span className='text-sm text-gray-600'>5.0 (1 review)</span>
//           </div>

//           <div className='text-2xl font-bold text-orange-500'>
//             ${product.price.toFixed(2)}
//             <span className='text-base font-normal'>/kg</span>
//           </div>

//           <p className='text-gray-600'>{product.description}</p>

//           {/* Quantity Selector */}

//           <div className='flex items-center gap-4'>
//             <span className='font-medium'>Quantity</span>
//             <div className='flex items-center gap-2'>
//               <Button
//                 variant='outline'
//                 size='icon'
//                 onClick={() => handleQuantityChange(-1)}
//                 className='h-8 w-8'
//               >
//                 <Minus className='h-4 w-4' />
//               </Button>
//               <span className='w-12 text-center'>{quantity}</span>
//               <Button
//                 variant='outline'
//                 size='icon'
//                 onClick={() => handleQuantityChange(1)}
//                 className='h-8 w-8'
//               >
//                 <Plus className='h-4 w-4' />
//               </Button>
//               <span className='text-gray-600'>/kg</span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className='flex gap-4'>
//             <Button
//               onClick={() => setIsFavorite(!isFavorite)}
//               variant='outline'
//               className='flex-1 py-6 border-[#D9D9D9] bg-white hover:bg-gray-50 text-black'
//             >
//               <Heart
//                 className={`h-5 w-5 ${
//                   isFavorite ? "fill-red-500 text-red-500" : ""
//                 }`}
//               />{" "}
//               Save as favorite
//             </Button>
//             <Button
//               onClick={handleAddToCart}
//               className='flex-1 py-6 bg-primaryColor hover:bg-orange-600 text-white'
//             >
//               Add to cart
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs Section */}
//       <div className='bg-white rounded-lg w-full md:w-3/4 shadow-sm p-6 my-10'>
//         <Tabs defaultValue='description' className='w-full'>
//           <TabsList className='flex items-center gap-4'>
//             <TabsTrigger
//               value='description'
//               className='flex items-start justify-center px-6 py-3 gap-2 w-[141px] h-[50px] bg-[#749B3F] border border-[#749B3F] text-white rounded-lg data-[state=active]:bg-[#749B3F] data-[state=active]:border-[#749B3F] data-[state=active]:text-white'
//             >
//               Description
//             </TabsTrigger>
//             <TabsTrigger
//               value='reviews'
//               className='flex items-start justify-center px-6 py-3 gap-2 w-[141px] h-[50px] bg-white border border-gray-300 text-gray-700 rounded-lg data-[state=active]:bg-[#749B3F] data-[state=active]:border-[#749B3F] data-[state=active]:text-white'
//             >
//               Reviews (1)
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value='description' className='mt-6'>
//             <div className='prose max-w-none'>
//               <p>
//                 Our coconuts are sustainably grown, ensuring the best quality
//                 and taste. Each coconut is handpicked and carefully prepared,
//                 offering you the freshest product possible. Rich in healthy
//                 fats, electrolytes, and essential nutrients, coconuts provide
//                 both hydration and nourishment. Whether you are using the water,
//                 flesh, or milk, our coconuts bring versatility to your kitchen
//                 while supporting healthy living.
//               </p>
//               <p>
//                 Perfect for smoothies, desserts, curries, and more — let the
//                 natural sweetness of the coconut elevate your recipes. Enjoy the
//                 tropical goodness in its purest form, directly from nature.
//               </p>
//             </div>
//           </TabsContent>
//           <TabsContent value='reviews'>
//             <div className='text-gray-600'>Reviews content coming soon...</div>
//           </TabsContent>
//         </Tabs>
//       </div>

//       <RelatedProduct relatedProducts={relatedProducts || []} />
//     </>
//   );
// };

// export default ProductDetailContent;
