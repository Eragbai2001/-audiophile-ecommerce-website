"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductShowcaseProps {
  isNew?: boolean;
  productName: string;
  productDescription: string;
  imageSrc: string;
  imageAlt: string;
  layoutVariant?: "left" | "right"; // Image position
  productLink?: string; // Link for the "See Product" button
}

export function ProductShowcase({
  isNew = false,
  productName,
  productDescription,
  imageSrc,
  imageAlt,
  layoutVariant = "left",
  productLink = "/",
}: ProductShowcaseProps) {
  const contentSection = (
    <div
      className="flex flex-col gap-6 md:gap-8 justify-center w-full text-center lg:text-left items-center lg:items-start"
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
          fontSize: "40px",
          lineHeight: "1.1",
          letterSpacing: "1.43px",
        }}>
        {productName}
      </h1>

      <p
        className="text-black/50"
        style={{
          fontSize: "15px",
          lineHeight: "25px",
          letterSpacing: "0px",
        }}>
        {productDescription}
      </p>

      <Link href={productLink}>
        <Button
          className="bg-[#D87D4E] hover:bg-[#E0945F] text-white uppercase w-fit"
          style={{
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: 700,
            padding: "15px 32px",
          }}>
          See Product
        </Button>
      </Link>
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
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {layoutVariant === "left" ? (
            <>
              <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
                {imageSection}
              </div>
              <div className="w-full lg:w-1/2 py-8 lg:py-0 flex items-center justify-center lg:justify-start">
                {contentSection}
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-1/2 py-8 lg:py-0 flex items-center justify-center lg:justify-end order-2 lg:order-1">
                {contentSection}
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0 order-1 lg:order-2">
                {imageSection}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
