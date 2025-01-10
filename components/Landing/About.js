"use client";
import Image from "next/image";
import AboutImg from "../../assets/About.png";
import CommonBtn from "../CommonBtn";

export default function About() {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between py-16'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2'>
          <Image
            src={AboutImg}
            alt='Seasonal fruits'
            width={686}
            height={657}
            className='rounded-lg object-cover w-full h-auto'
            priority
          />
        </div>

        {/* Text Content Section */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          {/* Offer Badge */}
          <div className='inline-block bg-green-100 rounded-md w-fit'>
            <span className='px-4 py-1 rounded-full text-green-600 text-sm font-medium'>
              About Us
            </span>
          </div>

          {/* Title */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-rubik font-bold text-gray-900'>
            About Our Fresh Harvest Season
          </h2>

          {/* Description */}
          <p className='text-base md:text-lg lg:text-xl text-gray-700'>
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>

          {/* Read More Button */}
          <CommonBtn title='Read More' />
        </div>
      </div>
    </section>
  );
}
