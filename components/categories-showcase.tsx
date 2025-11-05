"use client";

import Image from "next/image";
import Link from "next/link";

export function CategoriesShowcase() {
  const categories = [
    {
      id: 1,
      name: "HEADPHONES",
      image: "/image-removebg-preview(41).png",
      alt: "Black headphones with gold accents",
    },
    {
      id: 2,
      name: "SPEAKERS",
      image: "/image-removebg-preview(38) (1).png",
      alt: "Black speaker with white tweeter",
    },
    {
      id: 3,
      name: "EARPHONES",
      image: "/Group 5.png",
      alt: "Dark gray sphere earphones",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-40 px-6 md:px-8">
      {/* Container with max-width constraint */}
      <div className="mx-auto" style={{ maxWidth: "1510px" }}>
        {/* 3-column grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-16 md:gap-20 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col items-center">
              {/* Card background with reduced height */}
              <div
                className="w-full transition-all duration-300 rounded-lg flex flex-col items-center justify-end relative"
                style={{
                  backgroundColor: "#F1F1F1",
                  height: "244px",

                  overflow: "visible",
                  paddingBottom: "32px",
                }}>
                {/* Product image - positioned halfway through top */}
                <div
                  className="absolute flex flex-col items-center justify-center"
                  style={{
                    top: "-60px",
                    width: "150px",
                    zIndex: 10,
                  }}>
                  <div
                    className="relative w-full h-150"
                    style={{ width: "150px", height: "150px" }}>
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.alt}
                      fill
                      className="object-contain"
                      priority={false}
                    />
                  </div>

                  {/* Shadow below image */}
                  <div
                    style={{
                      marginTop: "-8px",
                      width: "120px",
                      height: "30px",
                      zIndex: 1,
                    }}>
                    <Image
                      src="/Oval Copy 3.png"
                      alt="Shadow"
                      width={120}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Category title */}
                <h3
                  className="text-center mb-4 tracking-wider"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "1.29px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}>
                  {category.name}
                </h3>

                {/* Shop link with hover effect */}
                <Link
                  href={`/${category.name.toLowerCase()}`}
                  className="flex items-center gap-3 cursor-pointer group/link">
                  <span
                    className="transition-all duration-300 text-black/50 group-hover/link:text-[#D87D4A]"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      lineHeight: "100%",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      backgroundColor: "transparent",
                    }}>
                    SHOP
                  </span>
                  {/* Arrow icon */}
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    className="transition-all duration-300 text-black/50 group-hover/link:text-[#D87D4A] group-hover/link:translate-x-1">
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
