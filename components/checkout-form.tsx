"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { z } from "zod";
import { useMutation, useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useCart } from "@/context/CartContext";

const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(1, "Phone number is required").max(20),
  address: z.string().min(1, "Address is required").max(200),
  zipCode: z.string().min(1, "ZIP Code is required").max(10),
  city: z.string().min(1, "City is required").max(100),
  country: z.string().min(1, "Country is required").max(100),
  paymentMethod: z.enum(["eMoney", "cashOnDelivery"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  setIsSubmitting: (value: boolean) => void;
  onOrderComplete: (orderNumber: string, orderId: any) => void;
}

const CheckoutForm = ({
  setIsSubmitting,
  onOrderComplete,
}: CheckoutFormProps) => {
  const { items, getSubtotal, clearCart } = useCart();
  const createOrder = useMutation(api.orders.createOrder);
  const sendEmail = useAction(api.emails.sendOrderConfirmationEmail);

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "eMoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutFormData, string>>
  >({});

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if cart is empty
    if (items.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }

    try {
      // Validate form
      checkoutSchema.parse(formData);

      setIsSubmitting(true);

      // Calculate totals
      const subtotal = getSubtotal();
      const shipping = subtotal > 0 ? 50 : 0;
      const vat = Math.ceil(subtotal * 0.2);
      const grandTotal = subtotal + shipping + vat;

      console.log("Creating order...");

      // Create order in Convex
      const result = await createOrder({
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: formData.address,
        shippingCity: formData.city,
        shippingZipCode: formData.zipCode,
        shippingCountry: formData.country,
        paymentMethod: formData.paymentMethod,
        eMoneyNumber: formData.eMoneyNumber,
        eMoneyPin: formData.eMoneyPin,
        items: items,
        subtotal,
        shipping,
        vat,
        grandTotal,
      });

      console.log("Order created:", result);

      // Send confirmation email (skip if no API key)
      try {
        await sendEmail({
          customerEmail: formData.email,
          customerName: formData.name,
          orderNumber: result.orderNumber,
          items: items,
          shippingAddress: formData.address,
          shippingCity: formData.city,
          shippingZipCode: formData.zipCode,
          shippingCountry: formData.country,
          subtotal,
          shipping,
          vat,
          grandTotal,
        });
        console.log("Email sent successfully");
      } catch (emailError) {
        console.warn("Email failed (this is okay if no API key):", emailError);
      }

      // Clear cart
      clearCart();

      console.log("Showing confirmation modal...");

      // Reset submitting state before showing modal
      setIsSubmitting(false);

      // Show confirmation modal on the same page
      onOrderComplete(result.orderNumber, result.orderId);
    } catch (error) {
      setIsSubmitting(false);

      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof CheckoutFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error("Order creation failed:", error);
        alert("Failed to process your order. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} id="checkout-form" className="space-y-8">
      {/* Billing Details */}
      <div>
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.93px] text-[#D87D4E]">
          Billing Details
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label
              htmlFor="name"
              className="mb-2 block text-xs font-bold text-gray-900">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="Alexei Ward"
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor="email"
              className="mb-2 block text-xs font-bold text-gray-900">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="alexei@mail.com"
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Label
              htmlFor="phone"
              className="mb-2 block text-xs font-bold text-gray-900">
              Phone Number
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.phone ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="+1 202-555-0136"
            />
            {errors.phone && (
              <p className="mt-2 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Shipping Info */}
      <div>
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.93px] text-[#D87D4E]">
          Shipping Info
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label
              htmlFor="address"
              className="mb-2 block text-xs font-bold text-gray-900">
              Address
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={`w-full rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.address ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="1137 Williams Avenue"
            />
            {errors.address && (
              <p className="mt-2 text-xs text-red-500">{errors.address}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor="zipCode"
              className="mb-2 block text-xs font-bold text-gray-900">
              ZIP Code
            </Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.zipCode ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="10001"
            />
            {errors.zipCode && (
              <p className="mt-2 text-xs text-red-500">{errors.zipCode}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor="city"
              className="mb-2 block text-xs font-bold text-gray-900">
              City
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.city ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="New York"
            />
            {errors.city && (
              <p className="mt-2 text-xs text-red-500">{errors.city}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Label
              htmlFor="country"
              className="mb-2 block text-xs font-bold text-gray-900">
              Country
            </Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className={`rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E] ${
                errors.country ? "ring-2 ring-red-500" : ""
              }`}
              style={{ border: "1px solid #CFCFCF" }}
              placeholder="United States"
            />
            {errors.country && (
              <p className="mt-2 text-xs text-red-500">{errors.country}</p>
            )}
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.93px] text-[#D87D4E]">
          Payment Details
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2 grid grid-cols-2 gap-6 items-start">
            <div>
              <Label className="text-xs font-bold text-gray-900">
                Payment Method
              </Label>
            </div>
            <div className="space-y-3">
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) =>
                  handleInputChange("paymentMethod", value)
                }
                className="space-y-3">
                <div
                  className={`flex cursor-pointer items-center space-x-3 rounded-lg px-6 py-4 transition-all ${
                    formData.paymentMethod === "eMoney" ? "bg-orange-50" : ""
                  }`}
                  style={{
                    border:
                      formData.paymentMethod === "eMoney"
                        ? "1px solid #D87D4E"
                        : "1px solid #CFCFCF",
                  }}>
                  <RadioGroupItem value="eMoney" id="eMoney" />
                  <Label
                    htmlFor="eMoney"
                    className="flex-1 cursor-pointer text-sm font-bold text-black">
                    e-Money
                  </Label>
                </div>
                <div
                  className={`flex cursor-pointer items-center space-x-3 rounded-lg px-6 py-4 transition-all ${
                    formData.paymentMethod === "cashOnDelivery"
                      ? "bg-orange-50"
                      : ""
                  }`}
                  style={{
                    border:
                      formData.paymentMethod === "cashOnDelivery"
                        ? "1px solid #D87D4E"
                        : "1px solid #CFCFCF",
                  }}>
                  <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" />
                  <Label
                    htmlFor="cashOnDelivery"
                    className="flex-1 cursor-pointer text-sm font-bold text-black">
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {formData.paymentMethod === "eMoney" && (
            <>
              <div>
                <Label
                  htmlFor="eMoneyNumber"
                  className="mb-2 block text-xs font-bold text-gray-900">
                  e-Money Number
                </Label>
                <Input
                  id="eMoneyNumber"
                  value={formData.eMoneyNumber}
                  onChange={(e) =>
                    handleInputChange("eMoneyNumber", e.target.value)
                  }
                  className="rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E]"
                  style={{ border: "1px solid #CFCFCF" }}
                  placeholder="238521993"
                />
              </div>
              <div>
                <Label
                  htmlFor="eMoneyPin"
                  className="mb-2 block text-xs font-bold text-gray-900">
                  e-Money PIN
                </Label>
                <Input
                  id="eMoneyPin"
                  value={formData.eMoneyPin}
                  onChange={(e) =>
                    handleInputChange("eMoneyPin", e.target.value)
                  }
                  className="rounded-lg bg-white px-6 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D87D4E]"
                  style={{ border: "1px solid #CFCFCF" }}
                  placeholder="6891"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
