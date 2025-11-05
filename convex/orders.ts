import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate unique order number
function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

export const createOrder = mutation({
  args: {
    // Customer Details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping Address
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZipCode: v.string(),
    shippingCountry: v.string(),

    // Payment
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order Items
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        imageSrc: v.string(),
      })
    ),

    // Totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderNumber = generateOrderNumber();

    const orderId = await ctx.db.insert("orders", {
      ...args,
      orderNumber,
      status: "pending",
      createdAt: Date.now(),
    });

    return {
      orderId,
      orderNumber,
    };
  },
});

export const getOrder = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.orderId);
  },
});
