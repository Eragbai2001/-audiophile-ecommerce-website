"use client";

import { useCart } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, getSubtotal, clearCart } = useCart();

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const shipping = subtotal > 0 ? 50 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal - Positioned top-right like in the design */}
      <div className="fixed top-30 right-20 h-auto max-h-[calc(100vh-120px)] w-full max-w-sm bg-white z-50 rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 ">
          <h2
            className="text-black font-bold"
            style={{ fontSize: "16px", letterSpacing: "1.14px" }}>
            CART ({items.length})
          </h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-black/50 hover:text-[#D87D4A] transition-colors"
              style={{
                fontSize: "15px",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Remove all
            </button>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <p className="text-black/60 text-center py-8">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center justify-between">
                {/* Left: Image + Details */}
                <div className="flex gap-4 items-center flex-1">
                  {/* Product Image */}
                  <div className="relative w-16 h-16 shrink-0 rounded bg-[#F1F1F1] flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3
                      className="text-black font-bold uppercase"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.5px",
                        lineHeight: "1.3",
                        wordBreak: "break-word",
                      }}>
                      {item.name}
                    </h3>
                    <p className="text-black/60" style={{ fontSize: "14px" }}>
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Right: Quantity Controls */}
                <div
                  className="flex items-center gap-4 px-3 py-2 shrink-0 bg-[#F1F1F1]"
                  style={{ gap: "16px" }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-black/50 hover:text-[#D87D4E] transition-colors">
                    <Minus size={12} />
                  </button>
                  <span
                    className="text-black font-bold"
                    style={{
                      fontSize: "13px",
                      minWidth: "16px",
                      textAlign: "center",
                    }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-black/50 hover:text-[#D87D4E] transition-colors">
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Totals */}
        {items.length > 0 && (
          <div className="p-6 space-y-4">
            {/* Total Only */}
            <div className="flex justify-between items-center">
              <span
                className="text-black/60 uppercase"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.86px",
                  fontWeight: 500,
                }}>
                Total
              </span>
              <span
                className="text-black font-bold"
                style={{ fontSize: "20px", fontWeight: 700 }}>
                $ {total.toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" className="w-full block pt-2">
              <Button
                className="w-full bg-[#D87D4E] hover:bg-[#E0945F] text-white uppercase"
                style={{
                  fontSize: "13px",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  padding: "15px 0",
                }}>
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
