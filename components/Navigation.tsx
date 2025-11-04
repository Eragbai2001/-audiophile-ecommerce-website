"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { CartModal } from "./cart-modal";

const NavLinks = () => (
  <>
    <Link
      href="/"
      className="text-white text-[13px] font-bold tracking-widest uppercase hover:text-[#D87D4E] transition-colors">
      Home
    </Link>
    <Link
      href="/headphones"
      className="text-white text-[13px] font-bold tracking-widest uppercase hover:text-[#D87D4E] transition-colors">
      Headphones
    </Link>
    <Link
      href="/speakers"
      className="text-white text-[13px] font-bold tracking-widest uppercase hover:text-[#D87D4E] transition-colors">
      Speakers
    </Link>
    <Link
      href="/earphones"
      className="text-white text-[13px] font-bold tracking-widest uppercase hover:text-[#D87D4E] transition-colors">
      Earphones
    </Link>
  </>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="w-full bg-transparent border-b border-white/10 relative z-50">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20 md:h-24 gap-4">
            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#D87D4E] hover:bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-[#191919] border-white/10 w-64">
                <div className="flex flex-col space-y-6 mt-12">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-auto">
              <h1 className="text-white font-bold text-lg md:text-xl tracking-tight">
                audiophile
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12 px-12">
              <NavLinks />
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#D87D4E] hover:bg-transparent ml-auto relative"
                onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="h-5 md:h-6 w-5 md:w-6" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-[#D87D4E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ fontSize: "10px" }}>
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
