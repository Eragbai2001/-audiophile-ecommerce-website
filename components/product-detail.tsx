"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  isNew?: boolean;
  productName: string;
  productDescription: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  productId?: string; // Add product ID for cart
  layoutVariant?: "left" | "right"; // Image position
}

export function ProductDetail({
  isNew = false,
  productName,
  productDescription,
  imageSrc,
  imageAlt,
  price,
  productId = "",
  layoutVariant = "left",
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price,
      quantity,
      imageSrc,
    });
    setQuantity(1); // Reset quantity after adding
  };

  const contentSection = (
    <div
      className="flex flex-col gap-6 md:gap-8 justify-start w-full"
      style={{ maxWidth: "445px" }}>
      {isNew && (
        <p
          className="text-[#D87D4E] tracking-widest uppercase"
          style={{
            fontSize: "14px",
            letterSpacing: "10px",
            fontWeight: 700,
          }}>
          NEW PRODUCT
        </p>
      )}

      <h1
        className="text-black font-bold uppercase"
        style={{
          fontSize: "36px",
          lineHeight: "1.1",
          letterSpacing: "2px",
        }}>
        {productName}
      </h1>

      <p
        className="text-black/60"
        style={{
          fontSize: "15px",
          lineHeight: "1.67",
          letterSpacing: "0px",
        }}>
        {productDescription}
      </p>

      {/* Price */}
      <p
        className="text-black font-bold"
        style={{
          fontSize: "24px",
          letterSpacing: "0.86px",
        }}>
        $ {price.toLocaleString()}
      </p>

      {/* Quantity Selector and Add to Cart */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div
          className="flex items-center gap-4 px-4 py-3"
          style={{
            backgroundColor: "#F1F1F1",
          }}>
          <button
            onClick={handleDecrement}
            className="text-black/50 hover:text-[#D87D4E] transition-colors"
            aria-label="Decrease quantity">
            <Minus size={16} />
          </button>
          <span
            className="text-black font-bold"
            style={{
              fontSize: "13px",
              letterSpacing: "1px",
              minWidth: "30px",
              textAlign: "center",
            }}>
            {quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="text-black/50 hover:text-[#D87D4E] transition-colors"
            aria-label="Increase quantity">
            <Plus size={16} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="bg-[#D87D4E] hover:bg-[#E0945F] text-white uppercase"
          style={{
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: 700,
            padding: "15px 32px",
          }}>
          Add to Cart
        </Button>
      </div>
    </div>
  );

  const imageSection = (
    <div
      className="w-full flex flex-col items-center justify-center"
      style={{
        width: "540px",
        height: "560px",
        borderRadius: "8px",
        backgroundColor: "#F1F1F1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        className="relative"
        style={{
          width: "349.24px",
          height: "386px",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Shadow below image */}
      <div
        style={{
          marginTop: "-10px",
          width: "220px",
          height: "50px",
          zIndex: 1,
        }}>
        <Image
          src="/Oval.png"
          alt="Shadow"
          width={220}
          height={50}
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16 px-6 md:px-8">
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {layoutVariant === "left" ? (
            <>
              <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
                {imageSection}
              </div>
              <div className="w-full lg:w-1/2 px-6 md:px-8 lg:px-12 py-8 lg:py-12">
                {contentSection}
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-1/2 px-6 md:px-8 lg:px-12 py-8 lg:py-12">
                {contentSection}
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
                {imageSection}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
