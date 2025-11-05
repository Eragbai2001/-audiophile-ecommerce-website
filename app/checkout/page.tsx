"use client";

import { useState } from "react";
import CheckoutForm from "@/components/checkout-form";
import OrderSummary from "@/components/order-summary";
import { OrderConfirmationModal } from "@/components/order-confirmation-modal";
import { Id } from "@/convex/_generated/dataModel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderData, setOrderData] = useState<{
    orderNumber: string;
    orderId: Id<"orders">;
  } | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <Link
          href="/headphones"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase text-gray-500 transition-colors hover:text-[#D87D4E]">
          <ArrowLeft size={20} />
          Go Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form - 2 columns */}
          <div className="lg:col-span-2 rounded-lg bg-white p-8">
            <h1 className="mb-8 text-3xl font-bold uppercase tracking-wider text-black">
              Checkout
            </h1>
            <CheckoutForm
              setIsSubmitting={setIsSubmitting}
              onOrderComplete={(orderNumber, orderId) => {
                setOrderData({ orderNumber, orderId });
                setShowConfirmation(true);
              }}
            />
          </div>

          {/* Order Summary - 1 column */}
          <div className="lg:col-span-1">
            <OrderSummary isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {showConfirmation && orderData && (
        <OrderConfirmationModal
          isOpen={showConfirmation}
          orderNumber={orderData.orderNumber}
          orderId={orderData.orderId}
        />
      )}
    </main>
  );
}
