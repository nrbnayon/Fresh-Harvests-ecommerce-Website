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
import visa from "../assets/Visa.png";
import paypal from "../assets/Paypal.png";
import pay from "../assets/ApplePay.png";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";
import t from "../assets/1.svg";
import f from "../assets/2.svg";
import i from "../assets/3.svg";

export default function Footer() {
  const quickLinks1 = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Detail Blog", href: "/blog/detail" },
  ];

  const quickLinks2 = [
    { name: "Favorites", href: "/favorites" },
    { name: "Cart", href: "/cart" },
    { name: "Sign in", href: "/signin" },
    { name: "Register", href: "/register" },
  ];

  return (
    <footer className='bg-[#F4F6F6] container px-4 mx-auto text-white py-12 mt-20 font-rubik'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
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

          {/* Quick Links 1 */}
          <div>
            <h3 className='text-textPrimaryColor text-lg font-semibold mb-4'>
              Quick links 1
            </h3>
            <nav className='flex flex-col space-y-3'>
              {quickLinks1.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-textSecondary font-questrial text-sm hover:text-gray-900 transition-colors'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className='text-textPrimaryColor text-lg font-semibold mb-4'>
              Quick links 2
            </h3>
            <nav className='flex flex-col space-y-3'>
              {quickLinks2.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-textSecondary font-questrial text-sm hover:text-gray-900 transition-colors'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='text-textPrimaryColor text-lg font-semibold mb-4'>
              Contact us
            </h3>
            <div className='space-y-3 mb-6'>
              <div className='flex items-center gap-2'>
                <Image
                  src={call}
                  alt='Phone'
                  width={20}
                  height={20}
                  className='text-gray-600'
                />
                <span className='text-textSecondary font-questrial text-sm'>
                  1234 5678 90
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={mail}
                  alt='Email'
                  width={20}
                  height={20}
                  className='text-gray-600'
                />
                <span className='text-textSecondary font-questrial text-sm'>
                  Freshharvests@gmail.com
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={location}
                  alt='Location'
                  width={20}
                  height={20}
                  className='text-gray-600'
                />
                <span className='text-textSecondary font-questrial text-sm'>
                  Tanjung Sari Street, Pontianak, Indonesia
                </span>
              </div>
            </div>

            <div>
              <p className='text-textPrimaryColor font-medium mb-2'>
                Accepted Payment Methods:
              </p>
              <div className='flex gap-2'>
                <Image
                  src={visa}
                  alt='Visa'
                  width={70}
                  height={48}
                  className='w-auto'
                />
                <Image
                  src={paypal}
                  alt='PayPal'
                  width={70}
                  height={48}
                  className='w-auto'
                />
                <Image
                  src={pay}
                  alt='Apple Pay'
                  width={70}
                  height={48}
                  className='w-auto'
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className='bg-[#D9D9D9]' />

        <div className='mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <p className='text-textPrimaryColor font-questrial  text-sm'>
            © 2024 Fresh Harvests. All rights reserved.
          </p>
          <div className='flex gap-2'>
            <Link href='#'>
              <Image
                src={t}
                alt='Visa'
                width={32}
                height={32}
                className='w-auto'
              />
            </Link>
            <Link href='#'>
              <Image
                src={f}
                alt='Visa'
                width={32}
                height={32}
                className='w-auto'
              />
            </Link>
            <Link href='#'>
              <Image
                src={i}
                alt='Visa'
                width={32}
                height={32}
                className='w-auto'
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
