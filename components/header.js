import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <Link href="/">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          </Link>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <Link href="/">
              <div className={`relative leading-[22px] cursor-pointer ${router.pathname === '/' ? 'active' : ''}`}>HOME</div>
            </Link>
            <Link href="/about">
              <div className={`relative leading-[22px] cursor-pointer ${router.pathname === '/about' ? 'active' : ''}`}>ABOUT US</div>
            </Link>
            <Link href="/agents">
              <div className={`relative leading-[22px] cursor-pointer ${router.pathname === '/agents' ? 'active' : ''}`}>OUR AGENTS</div>
            </Link>
            <Link href="/properties">
              <div className={`relative leading-[22px] cursor-pointer ${router.pathname === '/properties' ? 'active' : ''}`}>PROPERTIES</div>
            </Link>           
            <Link href="/contact">
              <div className={`relative leading-[22px] cursor-pointer ${router.pathname === '/contact' ? 'active' : ''}`}>CONTACT US</div>
            </Link>
            
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex" onClick={toggleMenu}>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
          {isMenuOpen && (
         <div className="absolute top-[100%] right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-[10]" onClick={closeMenu}>
         <ul className="py-2 px-4 list-none" onClick={(e) => e.stopPropagation()}>
         <li className="mb-2">
          <Link href="/">
          <div className="block text-primary-900 cursor-pointer hover:underline" onClick={closeMenu}>
            Home
          </div>
        </Link>
        </li>
         <li className="mb-2">
        <Link href="/about">
          <div className="block text-primary-900 cursor-pointer hover:underline" onClick={closeMenu}>
            About Us
          </div>
        </Link>
        </li>
        <li className="mb-2">
        <Link href="/agents">
          <div className="block text-primary-900 cursor-pointer hover:underline" onClick={closeMenu}>
            Our Agents
          </div>
        </Link>
        </li>
        <li className="mb-2">
        <Link href="/properties">
          <div className="block text-primary-900 cursor-pointer hover:underline" onClick={closeMenu}>
           Properties
          </div>
        </Link>
        </li>
        <li className="mb-2">
        <Link href="/contact">
          <div className="block text-primary-900 cursor-pointer hover:underline" onClick={closeMenu}>
            Contact Us
          </div>
        </Link>
        </li>
        
               
              </ul>
            </div>
          )}
      </div>
      </div>
    </header>
  );
};

export default Header;
