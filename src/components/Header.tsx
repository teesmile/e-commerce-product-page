"use client";
import { useState } from "react";
import { useCart } from "@/store/cart";
import {Drawer} from "@/components/ui/drawer";
import CartDrawer from "@/components/CartDialog";
import CartDialog from "@/components/CartDialog";

export default function Header() {
  const { count } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="md: sticky top-0 py-2 z-40 bg-white ">
  <nav className=" md:flex mx-auto container flex items-center justify-between px-8 gap-2 h-14 md:pt-10 md:px-25">

        <div className="flex  items-center justify-center gap-4 md:gap-8">
          <button
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className=" md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img
                src="/images/icon-close.svg"
                alt="Close Menu"
                className="w-4.2 h-4 "
              />
            ) : (
              <img
                src="/images/icon-menu.svg"
                alt="Open Menu"
                className="w-4.2 h-4 block"
              />
            )}
            {/* <span className="sr-only">Menu</span>
                    <div className='w-6 h-0.5 bg-neutral-veryDark mb-1'/>
                    <div className='w-6 h-0.5 bg-neutral-veryDark mb-1'/>
                    <div className='w-6 h-0.5 bg-neutral-veryDark'/> */}
          </button>
          {/* Logo */}
          <div className="cursor-pointer text-xl font-bold">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          {/* Desktop Navigation Links */}
           <div className="hidden md:flex gap-8  text-neutral-500">
        <a href="#" className="hover:text-brand cursor-pointer">Collections</a>
        <a href="#" className="hover:text-brand cursor-pointer">Men</a>
        <a href="#" className="hover:text-brand cursor-pointer">Women</a>
        <a href="#" className="hover:text-brand cursor-pointer">About</a>
        <a href="#" className="hover:text-brand cursor-pointer">Contact</a>
      
      </div>
        </div>
        {/* Cart and User Icon */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 font-bold md:flex">
          <button
            className="relative p-2 cursor-pointer"
            aria-label="open cart"
            onClick={() => setIsCartOpen(true)}
                        
          >
            <img src="/images/icon-cart.svg" alt="Cart Icon" />
            {count > 0 && (
              <span className="md:w-3 md:h-3 absolute top-1 right-2  text-white bg-orange-400 text-[10px] px-1  rounded-full font-bold">
                {count}
              </span>
            )}
          </button>
          <CartDialog open={isCartOpen} onOpenChange={setIsCartOpen} />
          <div>
            <img
              src="/images/image-avatar.png"
              alt="User Icon"
              className=" md:w-11 md:h-11 cursor-pointer w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
      

      {/* Mobile Navbar drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer */}
          <aside className="**md:hidden** w-[64vw] max-w-xs h-full bg-white p-6 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <button
              aria-label="Close Menu"
              className="mb-6 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/images/icon-close.svg"
                alt="Close Menu"
                className="w-4 h-4"
              />
            </button>
            <nav className="space-y-4 font-bold text-neutral-veryDark">
              <a href="#" className="block hover:text-brand cursor-pointer">
                Collections
              </a>
              <a href="#" className="block hover:text-brand cursor-pointer">
                Men
              </a>
              <a href="#" className="block hover:text-brand cursor-pointer">
                Women
              </a>
              <a href="#" className="block hover:text-brand cursor-pointer">
                About
              </a>
              <a href="#" className="block hover:text-brand cursor-pointer">
                Contact
              </a>
            </nav>
          </aside>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/25"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
          />
        </div>
      )}
      
    </header>
  );
}
