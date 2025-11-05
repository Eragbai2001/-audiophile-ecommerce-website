import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { PageWrapper } from "@/components/page-wrapper";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Premium audio equipment and headphones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased font-manrope`}
        style={{ fontFamily: "var(--font-manrope)" }}>
        <ConvexClientProvider>
          <CartProvider>
            <PageWrapper>{children}</PageWrapper>
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
