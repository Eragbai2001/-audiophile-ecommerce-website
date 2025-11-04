"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface RelatedProduct {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  productLink: string;
}

interface YouMayAlsoLikeProps {
  products: RelatedProduct[];
}

export function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16 px-6 md:px-8">
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        {/* Section Title */}
        <h2
          className="text-black font-bold uppercase text-center mb-12 md:mb-16"
          style={{
            fontSize: "32px",
            lineHeight: "1.1",
            letterSpacing: "1.14px",
          }}>
          You May Also Like
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Product Image Container */}
              <div
                className="w-full rounded-lg flex items-center justify-center mb-8 md:mb-10"
                style={{
                  backgroundColor: "#F1F1F1",
                  height: "318px",
                }}>
                <div
                  className="relative"
                  style={{ width: "148.31px", height: "193px" }}>
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Name */}
              <h3
                className="text-black font-bold uppercase text-center mb-8"
                style={{
                  fontSize: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "0.86px",
                }}>
                {product.name}
              </h3>

              {/* See Product Button */}
              <Link href={product.productLink}>
                <Button
                  className="bg-[#D87D4E] hover:bg-[#E0945F] text-white uppercase"
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
          ))}
        </div>
      </div>
    </section>
  );
}
