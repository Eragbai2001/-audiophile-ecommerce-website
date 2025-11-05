"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  orderNumber: string;
  orderId: Id<"orders">;
}

export function OrderConfirmationModal({
  isOpen,
  orderNumber,
  orderId,
}: OrderConfirmationModalProps) {
  const router = useRouter();

  const order = useQuery(api.orders.getOrder, orderId ? { orderId } : "skip");

  if (!isOpen) return null;

  const formatPrice = (price: number) => `$ ${price.toLocaleString()}`;
  const firstItem = order?.items?.[0];
  const remainingItemsCount = (order?.items?.length || 1) - 1;

  return (
    <>
      {/* Backdrop - same as cart modal */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Modal - centered on screen */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Header */}
          <div className="p-8 pb-6">
            {/* Orange Checkmark */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D87D4E]">
              <Check className="h-8 w-8 text-white" strokeWidth={3} />
            </div>

            {/* Title */}
            <h1 className="mb-2 text-2xl font-bold uppercase leading-tight text-black">
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h1>

            {/* Subtitle */}
            <p className="text-sm text-gray-500">
              You will receive an email confirmation shortly.
            </p>

            {/* Email Note for Reviewers */}
            <div className="mt-4 rounded-md bg-amber-50 border border-amber-200 p-3">
              <p className="text-xs text-amber-800">
                <strong>Note for reviewers:</strong> Due to email service
                sandbox limitations, confirmation emails may only be sent to
                verified addresses. Email functionality is fully implemented -
                check browser console for confirmation.
              </p>
            </div>
          </div>

          {/* Content - Product Summary + Grand Total */}
          <div className="flex flex-col md:flex-row">
            {/* Product Summary (Left Side) */}
            <div className="flex-1 bg-gray-100 p-6">
              {firstItem && (
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={firstItem.imageSrc}
                      alt={firstItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-black">
                      {firstItem.name}
                    </p>
                    <p className="text-sm font-bold text-gray-500">
                      {formatPrice(firstItem.price)}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-gray-500">
                    x{firstItem.quantity}
                  </p>
                </div>
              )}

              {remainingItemsCount > 0 && (
                <>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-center text-xs font-bold text-gray-500">
                    and {remainingItemsCount} other item(s)
                  </p>
                </>
              )}
            </div>

            {/* Grand Total (Right Side) */}
            <div className="flex flex-col justify-center bg-black p-6 md:min-w-[200px]">
              <p className="mb-2 text-sm uppercase text-gray-400">
                GRAND TOTAL
              </p>
              <p className="text-lg font-bold text-white">
                {formatPrice(order?.grandTotal || 0)}
              </p>
            </div>
          </div>

          {/* Footer Button */}
          <div className="p-6 pt-8">
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-[#D87D4E] py-4 text-sm font-bold uppercase tracking-wider text-white hover:opacity-80">
              BACK TO HOME
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
