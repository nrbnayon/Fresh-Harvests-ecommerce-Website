"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Test1 from "../../assets/test1.png";
import l1 from "../../assets/l1.svg";
import l2 from "../../assets/l4.svg";

const testimonials = [
  {
    id: 1,
    content:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    author: "Jane Doe",
    role: "Professional Chef",
    image: Test1,
  },
  {
    id: 2,
    content:
      "The selection of organic produce is impressive. Everything arrives perfectly fresh and the delivery service is always reliable. It's changed how I shop for vegetables.",
    author: "Mark Smith",
    role: "Home Cook",
    image: Test1,
  },
  {
    id: 3,
    content:
      "As a restaurant owner, quality and consistency are crucial. Fresh Harvest delivers on both fronts. Their produce is top-notch and their service is impeccable.",
    author: "Sarah Johnson",
    role: "Restaurant Owner",
    image: Test1,
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className='container mx-auto w-full bg-white py-16'>
      <div className='max-w-[1013px] mx-auto px-4 relative'>
        {/* Header Section */}
        <div className='text-center mb-12 mx-auto'>
          <div className='inline-block bg-green-100 rounded-md w-fit mb-4'>
            <span className='px-4 py-1 rounded-full text-green-600 text-sm font-medium'>
              Testimonial
            </span>
          </div>
          {/* <h3 className='text-green-600 font-medium mb-2'>Testimonial</h3> */}
          <h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-gray-600 max-w-lg mx-auto'>
            Don&apos;t just take our word for it—here&apos;s what some of our
            customers have to say about their experience with Fresh Harvest:
          </p>
        </div>

        <div className='block absolute top-24 right-10 md:right-12'>
          <Image src={l1} alt='bg' width={67} height={61} />
        </div>
        <div className='block absolute top-4 left-10 md:left-15'>
          <Image src={l2} alt='bg' width={67} height={61} />
        </div>

        <div className='relative'>
          <div className='overflow-hidden'>
            <div
              className='transition-transform duration-500 ease-in-out flex'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
                  <div className='flex flex-col md:flex-row items-center gap-8 rounded-2xl p-6 md:p-8'>
                    <div className='md:w-1/3 w-2/3 mx-auto md:mx-0'>
                      <div className='relative overflow-hidden rounded-lg'>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          className='object-cover w-full h-auto'
                        />
                      </div>
                    </div>
                    <div className='md:w-2/3 text-center md:text-left bg-[#F4F6F6] rounded-2xl p-4 md:p-8 '>
                      <p className='text-gray-700 text-lg mb-6 max-w-md mx-auto md:mx-0'>
                        {testimonial.content}
                      </p>
                      <div>
                        <h4 className='text-sm font-semibold text-gray-900'>
                          <span className='block md:inline'>
                            {testimonial.author}
                          </span>
                          <span className='block md:inline text-gray-600 ml-0 md:ml-1'>
                            - {testimonial.role}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors'
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors'
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

          {/* Pagination Dots */}
          <div className='flex justify-center mt-8 gap-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
