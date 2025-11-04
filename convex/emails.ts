import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { OrderConfirmationEmail } from "./emails/OrderConfirmation";
import { render } from "@react-email/render";

export const sendOrderConfirmationEmail = action({
  args: {
    customerEmail: v.string(),
    customerName: v.string(),
    orderNumber: v.string(),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        imageSrc: v.string(),
      })
    ),
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZipCode: v.string(),
    shippingCountry: v.string(),
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    try {
      // Initialize Resend inside the action to avoid initialization errors
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const emailHtml = await render(
        OrderConfirmationEmail({
          customerName: args.customerName,
          orderNumber: args.orderNumber,
          items: args.items,
          shippingAddress: args.shippingAddress,
          shippingCity: args.shippingCity,
          shippingZipCode: args.shippingZipCode,
          shippingCountry: args.shippingCountry,
          subtotal: args.subtotal,
          shipping: args.shipping,
          vat: args.vat,
          grandTotal: args.grandTotal,
        })
      );

      const { data, error } = await resend.emails.send({
        from: "Audiophile <onboarding@resend.dev>",
        to: [args.customerEmail],
        subject: `Order Confirmation - ${args.orderNumber}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Email sending failed:", error);
        throw new Error(`Failed to send email: ${error.message}`);
      }

      return { success: true, emailId: data?.id };
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  },
});
