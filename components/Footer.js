"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import LogoText from "../assets/logo2.svg";
import store from "../assets/playstore.png";
import apple from "../assets/apple.png";

export default function Footer() {
  return (
    <footer className='bg-[#F4F6F6] container px-4 mx-auto text-white py-12'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='flex flex-col justify-between'>
            <Link href='/' className='flex items-center space-x-2'>
              <Image
                src={Logo}
                alt='Fresh Harvests'
                width={40}
                height={40}
                priority
              />
              <Image
                src={LogoText}
                alt='Fresh Harvests'
                width={174.78}
                height={17.88}
                priority
              />
            </Link>

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
          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/shop'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Shop
              </Link>
              <Link
                href='/about'
                className='text-gray-400 hover:text-white transition-colors'
              >
                About
              </Link>
              <Link
                href='/blog'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Blog
              </Link>
              <Link
                href='/contact'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contact Us</h3>
            <div className='space-y-2 text-gray-400'>
              <p>1234 Market St.</p>
              <p>San Francisco, CA 94103</p>
              <p>+1 (555) 123-4567</p>
              <p>support@freshharvests.com</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Payment Methods</h3>
            <div className='flex flex-wrap gap-4'>
              <div className='w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400'>
                VISA
              </div>
              <div className='w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400'>
                MC
              </div>
              <div className='w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400'>
                AMEX
              </div>
              <div className='w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400'>
                PayPal
              </div>
            </div>
          </div>
        </div>

        <Separator className='bg-gray-800' />

        <div className='mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <p className='text-gray-400 text-sm'>
            © 2024 Fresh Harvests. All rights reserved.
          </p>
          <div className='flex space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-gray-800'
              asChild
            >
              <Link href='#'>
                <Twitter className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-gray-800'
              asChild
            >
              <Link href='#'>
                <Facebook className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-gray-800'
              asChild
            >
              <Link href='#'>
                <Instagram className='h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import Logo from "../assets/Logo.svg";
// import LogoText from "../assets/logo2.svg";
// import store from "../assets/playstore.png";
// import apple from "../assets/apple.png";

// export default function Footer() {
//   return (
//     <footer className='bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
//           <div className='flex flex-col justify-between'>
//             <Link href='/' className='flex items-center space-x-2'>
//               <Image
//                 src={Logo}
//                 alt='Fresh Harvests'
//                 width={40}
//                 height={40}
//                 priority
//               />
//               <Image
//                 src={LogoText}
//                 alt='Fresh Harvests'
//                 width={174.78}
//                 height={17.88}
//                 priority
//               />
//             </Link>

//             <div className='space-y-4'>
//               <p className='text-gray-600'>Download App:</p>
//               <div className='flex flex-col sm:flex-row gap-4'>
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
//           <div>
//             <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
//             <ul className='space-y-2'>
//               <li>
//                 <a
//                   href='#'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Shop
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href='#'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href='#'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href='#'
//                   className='text-gray-400 hover:text-white transition'
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='text-lg font-semibold mb-4'>Contact</h3>
//             <ul className='space-y-2 text-gray-400'>
//               <li>1234 Market St.</li>
//               <li>San Francisco, CA 94103</li>
//               <li>+1 (555) 123-4567</li>
//               <li>support@freshharvests.com</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='text-lg font-semibold mb-4'>Payment Methods</h3>
//             <div className='flex gap-4'>
//               {/* <Image
//                 src='/visa.png'
//                 alt='Visa'
//                 width={40}
//                 height={25}
//                 className='grayscale'
//               />
//               <Image
//                 src='/mastercard.png'
//                 alt='Mastercard'
//                 width={40}
//                 height={25}
//                 className='grayscale'
//               /> */}
//             </div>
//           </div>
//         </div>
//         <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
//           <p>© 2024 Fresh Harvests. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Twitter, Facebook, Instagram } from 'lucide-react';

// const Footer = () => {
//   const quickLinks1 = [
//     { name: 'Home', href: '/' },
//     { name: 'Shop', href: '/shop' },
//     { name: 'About us', href: '/about' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Detail Blog', href: '/blog/detail' }
//   ];

//   const quickLinks2 = [
//     { name: 'Favorites', href: '/favorites' },
//     { name: 'Cart', href: '/cart' },
//     { name: 'Sign in', href: '/signin' },
//     { name: 'Register', href: '/register' }
//   ];

//   return (
//     <footer className="w-full bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo and Download Section */}
//           <div>
//             <Link href="/" className="inline-block mb-8">
//               <div className="flex items-center">
//                 <Image
//                   src="/assets/Logo.svg"
//                   alt="Fresh Harvests Logo"
//                   width={40}
//                   height={40}
//                 />
//                 <span className="ml-2 text-[#1A1C29] text-xl font-semibold">Fresh Harvests</span>
//               </div>
//             </Link>

//             <div>
//               <p className="text-gray-600 mb-4">Download App:</p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="#">
//                   <Image
//                     src="/assets/app-store-badge.png"
//                     alt="Download on App Store"
//                     width={140}
//                     height={42}
//                     className="w-36"
//                   />
//                 </Link>
//                 <Link href="#">
//                   <Image
//                     src="/assets/google-play-badge.png"
//                     alt="Get it on Google Play"
//                     width={140}
//                     height={42}
//                     className="w-36"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links 1 */}
//           <div>
//             <h3 className="text-[#1A1C29] text-lg font-semibold mb-4">Quick links 1</h3>
//             <nav className="flex flex-col space-y-3">
//               {quickLinks1.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-600 hover:text-gray-900 transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Quick Links 2 */}
//           <div>
//             <h3 className="text-[#1A1C29] text-lg font-semibold mb-4">Quick links 2</h3>
//             <nav className="flex flex-col space-y-3">
//               {quickLinks2.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-600 hover:text-gray-900 transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="text-[#1A1C29] text-lg font-semibold mb-4">Contact us</h3>
//             <div className="space-y-3 mb-6">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/assets/icons/phone.svg"
//                   alt="Phone"
//                   width={20}
//                   height={20}
//                   className="text-gray-600"
//                 />
//                 <span className="text-gray-600">1234 5678 90</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/assets/icons/mail.svg"
//                   alt="Email"
//                   width={20}
//                   height={20}
//                   className="text-gray-600"
//                 />
//                 <span className="text-gray-600">Freshharvests@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/assets/icons/location.svg"
//                   alt="Location"
//                   width={20}
//                   height={20}
//                   className="text-gray-600"
//                 />
//                 <span className="text-gray-600">Tanjung Sari Street, Pontianak, Indonesia</span>
//               </div>
//             </div>

//             <div>
//               <p className="text-gray-900 font-medium mb-2">Accepted Payment Methods:</p>
//               <div className="flex gap-2">
//                 <Image
//                   src="/assets/payments/visa.png"
//                   alt="Visa"
//                   width={40}
//                   height={25}
//                   className="h-6 w-auto"
//                 />
//                 <Image
//                   src="/assets/payments/paypal.png"
//                   alt="PayPal"
//                   width={40}
//                   height={25}
//                   className="h-6 w-auto"
//                 />
//                 <Image
//                   src="/assets/payments/apple-pay.png"
//                   alt="Apple Pay"
//                   width={40}
//                   height={25}
//                   className="h-6 w-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-600 text-sm">
//               © Copyright 2024, All Rights Reserved by Banana Studio
//             </p>
//             <div className="flex gap-4">
//               <Link href="#" className="w-10 h-10 bg-[#1A1C29] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
//                 <Twitter size={20} />
//               </Link>
//               <Link href="#" className="w-10 h-10 bg-[#1A1C29] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
//                 <Facebook size={20} />
//               </Link>
//               <Link href="#" className="w-10 h-10 bg-[#1A1C29] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
//                 <Instagram size={20} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
