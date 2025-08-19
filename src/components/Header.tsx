"use client";
import { useState } from "react";
import { useCart } from "@/store/cart";
import {Drawer} from "@/components/ui/drawer";
import CartDrawer from "@/components/CartDrawer";

export default function Header() {
  const { count } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky justify-center items-center top-0 py-2 z-40 bg-white ">
      <nav className="container flex  flex-row items-center justify-between px-8 gap-2 h-14">
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
          <div className="text-xl font-bold">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:gap-8 font-bold md:flex">
          <button
            className="relative p-2"
            aria-label="open cart"
            onClick={() => setIsCartOpen(true)}
                        
          >
            <img src="/images/icon-cart.svg" alt="Cart Icon" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] px-1.5 rounded-full font-bold">
                {count}
              </span>
            )}
          </button>
          <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
          <div>
            <img
              src="/images/image-avatar.png"
              alt="User Icon"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer */}
          <aside className="w-[64vw] max-w-xs h-full bg-white p-6 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
            <button
              aria-label="Close Menu"
              className="mb-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/images/icon-close.svg"
                alt="Close Menu"
                className="w-4 h-4"
              />
            </button>
            <nav className="space-y-4 font-bold text-neutral-veryDark">
              <a href="#" className="block hover:text-brand">
                Collections
              </a>
              <a href="#" className="block hover:text-brand">
                Men
              </a>
              <a href="#" className="block hover:text-brand">
                Women
              </a>
              <a href="#" className="block hover:text-brand">
                About
              </a>
              <a href="#" className="block hover:text-brand">
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
