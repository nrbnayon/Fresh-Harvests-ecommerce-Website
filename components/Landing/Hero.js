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
import l4 from "../../assets/l1.svg";

export default function Hero() {
  return (
    <div
      className='relative max-h-[877px] max-w-[1439px] mx-auto -mt-[100px] bg-white overflow-hidden'
      style={{
        backgroundImage: `url(${BGImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className='relative w-full min-h-[877px] font-rubik'>
        <div className='flex flex-col lg:flex-row items-center justify-center mt-[119px] lg:ml-[120px] lg:mr-[63px] mx-auto px-4 lg:px-0'>
          {/* Left Column */}
          <div className='space-y-4 max-w-[660px] w-full lg:w-auto mb-8 lg:mb-0'>
            {/* Welcome Banner */}
            <div className='inline-block bg-[#749B3F19] rounded-[8px]'>
              <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
                Welcome to Fresh Harvest
              </span>
            </div>

            {/* Main Heading */}
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold text-navy-900 leading-tight lg:leading-[94.8px]'>
              Fresh Fruits and Vegetables
            </h1>

            {/* Description */}
            <p className='text-textPrimaryColor font-questrial text-sm max-w-lg'>
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </p>

            {/* CTA Button */}
            <button className='px-8 py-4 bg-primaryColor text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full sm:w-auto'>
              Shop Now
            </button>

            {/* Special Offer Card */}
            <div className='relative lg:ml-[190px] max-w-[350px] bg-[#EBEBEB] mx-auto lg:mx-0 rounded-xl'>
              <div className='p-4 flex items-center gap-2'>
                <div className='space-y-2'>
                  <p className='text-[#176D38] text-sm font-medium'>
                    Special Offer
                  </p>
                  <h3 className='text-xl md:text-2xl font-medium text-textPrimaryColor'>
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
                        FRESH10
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

            {/* Decorative elements - Hidden on mobile */}
            <div className='hidden lg:block absolute bottom-[500px] right-[650px]'>
              <Image src={arrow} alt='bg' width={45} height={45} />
            </div>
            <div className='hidden lg:block absolute bottom-[400px] left-[241px]'>
              <Image src={arrow2} alt='bg' width={55} height={38} />
            </div>
            <div className='hidden lg:block absolute bottom-72 left-[78px]'>
              <Image src={l1} alt='bg' width={67} height={61} />
            </div>
            <div className='hidden lg:block absolute top-0 left-0'>
              <Image src={l2} alt='bg' width={70} height={114} />
            </div>
            <div className='hidden lg:block absolute top-10 right-0'>
              <Image src={l3} alt='bg' width={100} height={149} />
            </div>
            <div className='hidden lg:block absolute top-0 right-[40%]'>
              <Image src={l1} alt='bg' width={67} height={51} />
            </div>

            {/* App Download */}
            <div className='space-y-4'>
              <p className='text-gray-600'>Download App:</p>
              <div className='flex flex-col sm:flex-row gap-4'>
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
          <div className='relative h-[400px] md:h-[600px] lg:h-[758px] w-full lg:w-auto z-10'>
            <Image
              src={herobby}
              alt='hero image'
              width={695}
              height={758}
              className='w-full h-full object-contain lg:object-cover'
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// import BGImage from "../../assets/mainbg.png";
// import herobby from "../../assets/herobby.png";
// import offer from "../../assets/70.svg";
// import salad from "../../assets/salad.png";
// import apple from "../../assets/apple.png";
// import store from "../../assets/playstore.png";
// import arrow from "../../assets/arrow.svg";
// import arrow2 from "../../assets/arro2.svg";
// import l1 from "../../assets/l1.svg";
// import l2 from "../../assets/l2.svg";
// import l3 from "../../assets/l3.svg";
// import l4 from "../../assets/l1.svg";

// export default function Hero() {
//   return (
//     <div
//       className='relative max-h-[877px] max-w-[1439px] mx-auto  -mt-[100px]  bg-white overflow-hidden'
//       style={{
//         backgroundImage: `url(${BGImage.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <main className='relative w-full min-h-[877px]  font-rubik '>
//         <div className='flex items-center justify-center  mt-[119px] ml-[120px] mr-[63px] mx-auto'>
//           {/* Left Column */}
//           <div className='space-y-4 border-2 max-w-[660px]'>
//             {/* Welcome Banner */}
//             <div className='inline-block  bg-[#749B3F1A] rounded-[8px] '>
//               <span className='px-3 py-1 rounded-full text-green-600 text-sm font-medium'>
//                 Welcome to Fresh Harvest
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h1 className='text-5xl lg:text-7xl font-semibold text-navy-900  leading-[94.8px]'>
//               Fresh Fruits and Vegetables
//             </h1>

//             {/* Description */}
//             <p className='text-textPrimaryColor font-questrial text-sm max-w-lg'>
//               At Fresh Harvests, we are passionate about providing you with the
//               freshest and most flavorful fruits and vegetables
//             </p>

//             {/* CTA Button */}
//             <button className='px-8 py-4 bg-primaryColor text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
//               Shop Now
//             </button>

//             {/* Special Offer Card */}
//             <div className='relative ml-[180px]  max-w-[350px] bg-[#EBEBEB'>
//               <div className=' rounded-[12px] p-4 flex items-center gap-2'>
//                 <div className='space-y-2'>
//                   <p className='text-[#176D38] text-sm font-medium'>
//                     Special Offer
//                   </p>
//                   <h3 className='text-2xl font-medium text-textPrimaryColor'>
//                     Fresh Salad
//                   </h3>
//                   <div className='space-y-1'>
//                     <p className='text-sm text-[#176D38] flex items-center space-x-1'>
//                       Up to{" "}
//                       <Image
//                         src={offer}
//                         alt='offer'
//                         width={72}
//                         height={28}
//                         priority
//                       />
//                     </p>
//                     <div className='bg-[#176D38] py-[6px] px-3 text-white text-sm  rounded-[35px] inline-block'>
//                       CODE:{" "}
//                       <span className='text-[#FAC714] font-medium'>
//                         FRESH10
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='relative w-[149] h-[146]'>
//                   <Image
//                     src={salad}
//                     alt='Fresh Salad'
//                     width={149}
//                     height={146}
//                     className='rounded-full object-cover'
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className='absolute bottom-[500px] right-[650px]'>
//               <Image src={arrow} alt='bg' width={45} height={45} />
//             </div>
//             <div className='absolute bottom-[420px] left-[241px]'>
//               <Image src={arrow2} alt='bg' width={55} height={38} />
//             </div>

//             <div className='absolute bottom-72 left-[78px]'>
//               <Image src={l1} alt='bg' width={67} height={61} />
//             </div>
//             <div className='absolute top-0 left-0'>
//               <Image src={l2} alt='bg' width={70} height={114} />
//             </div>
//             <div className='absolute top-10 right-0'>
//               <Image src={l3} alt='bg' width={100} height={149} />
//             </div>
//             <div className='absolute top-0 right-[40%]'>
//               <Image src={l1} alt='bg' width={67} height={51} />
//             </div>
//             {/* App Download */}
//             <div className='space-y-4'>
//               <p className='text-gray-600'>Download App:</p>
//               <div className='flex gap-4'>
//                 <Link href='#' className='block w-36'>
//                   <Image
//                     src={apple}
//                     alt='Download on App Store'
//                     width={140}
//                     height={42}
//                     className='w-full'
//                   />
//                 </Link>
//                 <Link href='#' className='block w-36'>
//                   <Image
//                     src={store}
//                     alt='Get it on Google Play'
//                     width={140}
//                     height={42}
//                     className='w-full'
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className='relative h-[758px]  z-10 '>
//             <Image
//               src={herobby}
//               alt='hero image'
//               width={695}
//               height={758}
//               className='w-full h-full object-cover '
//               priority
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
