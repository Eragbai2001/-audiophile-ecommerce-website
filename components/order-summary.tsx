"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface OrderSummaryProps {
  isSubmitting?: boolean;
}

const OrderSummary = ({ isSubmitting = false }: OrderSummaryProps) => {
  const { items, getSubtotal } = useCart();

  const subtotal = getSubtotal();
  const shipping = subtotal > 0 ? 50 : 0;
  const vat = Math.ceil(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="mb-8 text-lg font-bold uppercase tracking-wider">
        Summary
      </h2>

      <div className="mb-8 space-y-6">
        {items.length === 0 ? (
          <p className="py-8 text-center text-gray-400">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-gray-400">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-400">
                x{item.quantity}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="space-y-3 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase text-gray-500">Total</p>
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(subtotal)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase text-gray-500">Shipping</p>
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(shipping)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase text-gray-500">VAT (Included)</p>
          <p className="text-lg font-bold text-gray-900">{formatPrice(vat)}</p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm uppercase text-gray-500">Grand Total</p>
          <p className="text-xl font-bold text-[#D87D4E]">
            {formatPrice(grandTotal)}
          </p>
        </div>
      </div>

      <Button
        type="submit"
        form="checkout-form"
        disabled={isSubmitting}
        className="mt-8 w-full bg-[#D87D4E] py-4 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Continue & Pay"
        )}
      </Button>
    </div>
  );
};

export default OrderSummary;
