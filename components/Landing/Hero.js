import Image from "next/image";
import Link from "next/link";
import React from "react";

import BGImage from "../../assets/mainbg.png";
import herobby from "../../assets/herobby.png";
import offer from "../../assets/70.svg";
import salad from "../../assets/salad.png";
import apple from "../../assets/apple.png";
import store from "../../assets/playstore.png";
import arrow from "../../assets/arrow.svg";
import arrow2 from "../../assets/arro2.svg";
import l1 from "../../assets/l1.svg";
import l2 from "../../assets/l2.svg";
import l3 from "../../assets/l3.svg";

export default function Hero() {
  return (
    <div className='w-full'>
      {/* Mobile View */}
      <div className='lg:hidden'>
        <div className='relative px-4 pt-4 pb-8 bg-white'>
          {/* Welcome Banner */}
          <div className='inline-block bg-[#F5F8F1] rounded-[32px] px-6 py-2 mb-4'>
            <span className='text-[#749B3F] text-base'>
              Welcome to Fresh Harvest
            </span>
          </div>

          {/* Main Heading */}
          <h1 className='text-[40px] leading-tight font-semibold text-[#1A1A1A] mb-4'>
            Fresh Fruits
            <br />
            and Vegetables
          </h1>

          {/* Description */}
          <p className='text-[#666666] text-base mb-6'>
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>

          {/* CTA Button */}
          <button className='w-full bg-[#FF6525] text-white rounded-lg py-4 text-lg font-medium mb-8'>
            Shop Now
          </button>

          {/* Special Offer Card */}
          <div className='bg-[#F8F8F8] rounded-2xl p-4 mb-8'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-[#176D38] text-sm font-medium mb-1'>
                  Special Offer
                </p>
                <h3 className='text-[#1A1A1A] text-2xl font-medium mb-2'>
                  Fresh Salad
                </h3>
                <p className='text-[#176D38] text-sm mb-2'>
                  Up to <span className='text-xl font-bold'>70%</span> off
                </p>
                <div className='bg-[#176D38] py-1 px-4 rounded-full inline-block'>
                  <span className='text-white text-sm'>
                    CODE: <span className='text-[#FAC714]'>FRESH25</span>
                  </span>
                </div>
              </div>
              <div className='relative w-24 h-24'>
                <Image
                  src={salad}
                  alt='Fresh Salad'
                  width={96}
                  height={96}
                  className='rounded-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className='relative w-full h-[300px] mb-8'>
            <Image
              src={herobby}
              alt='hero image'
              fill
              className='object-cover rounded-2xl'
              priority
            />
          </div>

          {/* App Download Section */}
          <div className='space-y-4'>
            <p className='text-[#1A1A1A] text-lg'>Download App:</p>
            <div className='flex flex-col space-y-4'>
              <Link href='#' className='block'>
                <Image
                  src={apple}
                  alt='Download on App Store'
                  width={200}
                  height={60}
                  className='w-full'
                />
              </Link>
              <Link href='#' className='block'>
                <Image
                  src={store}
                  alt='Get it on Google Play'
                  width={200}
                  height={60}
                  className='w-full'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className='hidden lg:block relative max-h-[877px] max-w-[1439px] mx-auto -mt-[100px] bg-white overflow-hidden'
        style={{
          backgroundImage: `url(${BGImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className='relative w-full min-h-[877px] font-rubik'>
          <div className='flex items-center justify-center mt-[119px] ml-[120px] mr-[63px] mx-auto'>
            {/* Left Column */}
            <div className='space-y-4 max-w-[660px]'>
              {/* Welcome Banner */}
              <div className='inline-block bg-[#749B3F1A] rounded-[8px]'>
                <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
                  Welcome to Fresh Harvest
                </span>
              </div>

              {/* Main Heading */}
              <h1 className='text-7xl font-semibold text-navy-900 leading-[94.8px]'>
                Fresh Fruits and Vegetables
              </h1>

              {/* Description */}
              <p className='text-textPrimaryColor font-questrial text-sm max-w-lg'>
                At Fresh Harvests, we are passionate about providing you with
                the freshest and most flavorful fruits and vegetables
              </p>

              {/* CTA Button */}
              <button className='px-8 py-4 bg-primaryColor text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
                Shop Now
              </button>

              {/* Special Offer Card */}
              <div className='relative ml-[180px] max-w-[350px] bg-[#EBEBEB]'>
                <div className='rounded-[12px] p-4 flex items-center gap-2'>
                  <div className='space-y-2'>
                    <p className='text-[#176D38] text-sm font-medium'>
                      Special Offer
                    </p>
                    <h3 className='text-2xl font-medium text-textPrimaryColor'>
                      Fresh Salad
                    </h3>
                    <div className='space-y-1'>
                      <p className='text-sm text-[#176D38] flex items-center space-x-1'>
                        Up to{" "}
                        <Image
                          src={offer}
                          alt='offer'
                          width={72}
                          height={28}
                          priority
                        />
                      </p>
                      <div className='bg-[#176D38] py-[6px] px-3 text-white text-sm rounded-[35px] inline-block'>
                        CODE:{" "}
                        <span className='text-[#FAC714] font-medium'>
                          FRESH25
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='relative w-[149] h-[146]'>
                    <Image
                      src={salad}
                      alt='Fresh Salad'
                      width={149}
                      height={146}
                      className='rounded-full object-cover'
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className='absolute bottom-[500px] right-[650px]'>
                <Image src={arrow} alt='bg' width={45} height={45} />
              </div>
              <div className='absolute bottom-[420px] left-[241px]'>
                <Image src={arrow2} alt='bg' width={55} height={38} />
              </div>
              <div className='absolute bottom-72 left-[78px]'>
                <Image src={l1} alt='bg' width={67} height={61} />
              </div>
              <div className='absolute top-0 left-0'>
                <Image src={l2} alt='bg' width={70} height={114} />
              </div>
              <div className='absolute top-10 right-0'>
                <Image src={l3} alt='bg' width={100} height={149} />
              </div>
              <div className='absolute top-0 right-[40%]'>
                <Image src={l1} alt='bg' width={67} height={51} />
              </div>

              {/* App Download */}
              <div className='space-y-4'>
                <p className='text-gray-600'>Download App:</p>
                <div className='flex gap-4'>
                  <Link href='#' className='block w-36'>
                    <Image
                      src={apple}
                      alt='Download on App Store'
                      width={140}
                      height={42}
                      className='w-full'
                    />
                  </Link>
                  <Link href='#' className='block w-36'>
                    <Image
                      src={store}
                      alt='Get it on Google Play'
                      width={140}
                      height={42}
                      className='w-full'
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className='relative h-[758px] z-10'>
              <Image
                src={herobby}
                alt='hero image'
                width={695}
                height={758}
                className='w-full h-full object-cover'
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
