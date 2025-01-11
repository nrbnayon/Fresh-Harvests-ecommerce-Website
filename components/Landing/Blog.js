import Image from "next/image";
import React from "react";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import l1 from "../../assets/l1.svg";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title:
        "From Farm to Table: Understanding the Journey of Fresh Organic Produce",
      image: b1,
      date: "May 12, 2024",
    },
    {
      id: 2,
      title:
        "The Benefits of Consuming Seasonal Fruits: A Guide to Better Health",
      image: b2,
      date: "May 10, 2024",
    },
    {
      id: 3,
      title:
        "Sustainable Farming Practices: How We Ensure Quality Throughout the Year",
      image: b3,
      date: "May 08, 2024",
    },
  ];
  return (
    <section className='container mx-auto sm:px-6 lg:px-8  bg-white'>
      <div className='relative max-w-[1200px] mx-auto'>
        <div className='text-center mb-12 mx-auto'>
          <div className='inline-block bg-green-100 rounded-md w-fit mb-4'>
            <span className='px-4 py-1 rounded-full text-green-600 text-sm font-medium'>
              Our Blog
            </span>
          </div>
          {/* <h3 className='text-green-600 font-medium mb-2'>Testimonial</h3> */}
          <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4'>
            Fresh Harvest Blog
          </h2>
          <p className='text-gray-600 max-w-lg mx-auto'>
            Welcome to the Fresh Harvest Blog, your go-to resource for all
            things related to fresh produce, healthy eating, and culinary
            inspiration.
          </p>
        </div>
        <div className='block absolute top-24 right-10 md:right-12'>
          <Image src={l1} alt='bg' width={67} height={61} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className='bg-white rounded-lg overflow-hidden hover:shadow-lg transition'
            >
              <div className='relative h-48 rounded-2xl'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className='object-fit w-full'
                />
              </div>
              <div className='pr-6 py-4 '>
                <p className='text-gray-500 text-sm mb-2'>{post.date}</p>
                <h3 className='text-lg font-semibold mb-4'>{post.title}</h3>
                <button className='text-primaryColor font-rubik font-semibold hover:text-orange-600  transition'>
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
