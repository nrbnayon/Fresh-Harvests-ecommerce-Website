"use client";
import OfferImg from "../../assets/OfferImg.png";
import { useState, useEffect } from "react";

export default function Offer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      className='container mx-auto px-4 sm:px-6 lg:px-8 bg-white my-16 overflow-hidden'
      style={{
        backgroundImage: `url(${OfferImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='max-w-[1200px] mx-auto py-16 lg:py-24 my-8'>
        <div className='py-10 w-full text-center md:text-start lg:w-2/3 mx-auto'>
          <div className='space-y-5'>
            <div className='inline-block bg-[#749B3F19] rounded-md w-fit'>
              <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
                Special Offer
              </span>
            </div>

            <h2 className='text-3xl lg:text-5xl xl:text-6xl font-rubik font-semibold my-2'>
              Seasonal Fruit Bundle
            </h2>
            <p className='text-gray-600 mb-6 font-rubik text-lg md:text-2xl xl:text-4xl'>
              Discount up to{" "}
              <span className='text-orange-500 font-bold'>80% OFF</span>
            </p>

            {/* Countdown Timer */}
            <div className='flex justify-center md:justify-start md:flex-wrap gap-6 mb-6'>
              {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                <div
                  key={index}
                  className='text-center w-20 sm:w-24 bg-white shadow-lg rounded-lg'
                >
                  <div className='p-3'>
                    <span className='text-xl sm:text-2xl font-bold'>
                      {countdown[unit]}
                    </span>
                    <p className='text-xs sm:text-sm text-gray-600 capitalize'>
                      {unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className='bg-[#176D38] py-[6px] px-3 text-white text-xs md:text-sm rounded-[35px] flex justify-center md:justify-start items-center w-fit mx-auto md:mx-0 mb-4'>
              CODE:{" "}
              <span className='text-[#FAC714] font-medium ml-2'>FRESH10</span>
            </div>

            {/* Shop Button */}
            <button className='bg-orange-500 hidden text-white px-6 py-3 rounded-full hover:bg-orange-600 transition mx-auto '>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
