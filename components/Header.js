"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { Heart, ShoppingCart, User } from "lucide-react";
import AuthModal from "./Auth/AuthModal";

import Logo from "../assets/Logo.svg";
import LogoText from "../assets/logo2.svg";

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  // const { user, cartCount } = useAuth();
  const [activeLink, setActiveLink] = useState("/");
  let cartCount = 0;
  let user = null;

  const handleLoginClick = () => {
    setAuthType("login");
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthType("register");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className='sticky top-0 z-50 w-full bg-transparent font-questrial'>
        <div className='max-w-[1199px] mx-auto px-[10px] h-[100px] py-4'>
          <div className='flex items-center justify-between'>
            {/* Logo section */}
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

            {/* Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About us" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='relative group'
                  onClick={() => setActiveLink(link.href)}
                >
                  <span className='font-questrial text-[14px] leading-[24px] tracking-[-0.02em] text-[#4A4A52] w-[54px] h-[24px]'>
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[14px] h-[3px] bg-[#749B3F] rounded-[10px] transition-opacity duration-200 ${
                      activeLink === link.href ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100`}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions section */}
            <div className='flex items-center justify-between space-x-4'>
              <Link
                href='/favorites'
                className='text-[#749B3F] fill-[#749B3F] hover:text-gray-900 flex items-center space-x-2'
              >
                <Heart className='w-6 h-6 fill-current' />
                <span className='text-[14px] leading-[24px] tracking-[-0.02em] text-[#212337]'>
                  Favorites
                </span>
              </Link>

              {/* Cart with counter */}
              <Link
                href='/cart'
                className='relative text-[#749B3F] fill-[#749B3F] hover:text-gray-900 flex items-center space-x-2'
              >
                <ShoppingCart className='w-6 h-6 fill-current' />
                {cartCount > 0 && (
                  <div className='absolute flex items-center justify-center px-1 left-[54.17%] right-[-20.83%] top-[-29.17%] bottom-[62.5%] min-w-[16px] h-[16px] bg-[#EE4536] border-2 border-[#EDEDED] rounded-[8px]'>
                    <span className='text-white text-xs'>{cartCount}</span>
                  </div>
                )}
                <span className='text-[14px] leading-[24px] tracking-[-0.02em] text-[#212337]'>
                  Cart
                </span>
              </Link>

              {/* Authentication button */}
              {user ? (
                <Link href='/profile'>
                  <button className='flex items-center space-x-2 px-4 py-2 border border-[#212337] rounded-[4px] hover:bg-gray-50'>
                    <User className='w-4 h-4 fill-current' />
                    <span>Profile</span>
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className='flex items-center  px-[24px] py-[12px] h-[41px] border border-[#212337] rounded-[4px] hover:bg-gray-50'
                >
                  <span className='font-rubik font-semibold'>Sign in</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
      />
    </>
  );
}
