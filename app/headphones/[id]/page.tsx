import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { ProductFeatures } from "@/components/product-features";
import { ProductGallery } from "@/components/product-gallery";
import { YouMayAlsoLike } from "@/components/you-may-also-like";
import Link from "next/link";

export default function HeadphoneDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="mx-auto px-6 md:px-8 lg:px-12"
        style={{ maxWidth: "1510px" }}>
        <div className="pt-8 pb-4">
          <Link
            href="/headphones"
            className="text-black/50 hover:text-[#D87D4E] transition-colors text-sm"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.86px",
            }}>
            Go Back
          </Link>
        </div>
      </div>
      <ProductDetail
        isNew={true}
        productName="XX99 MARK II HEADPHONES"
        productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
        imageSrc="/Preview1 (3).png"
        imageAlt="XX99 Mark II Headphones"
        price={2999}
        layoutVariant="left"
      />
      <ProductFeatures
        features={[
          {
            text: "Featuring a genuine leather head strap and premium earpieces, these headphones deliver superior comfort for any situation. Whether you're taking a business call or just in your own personal space, the auto mute and pause features ensure that you never miss a beat.",
          },
          {
            text: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 connectivity and 40 hours of battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and premium design aesthetic.",
          },
        ]}
        inTheBox={[
          { quantity: 1, item: "Headphone Unit" },
          { quantity: 2, item: "Replacement Earpiece" },
          { quantity: 1, item: "User Manual" },
          { quantity: 1, item: "3.5mm 5m Audio Cable" },
          { quantity: 1, item: "Travel Bag" },
        ]}
      />{" "}
      <ProductGallery
        gallery={[
          { imageSrc: "/gallery-1.png", imageAlt: "Man using headphones" },
          { imageSrc: "/gallery-2.png", imageAlt: "Headphones detail view" },
          { imageSrc: "/gallery-3.png", imageAlt: "Headphones with phone" },
        ]}
      />
      <YouMayAlsoLike
        products={[
          {
            id: "1",
            name: "XX99 MARK I",
            imageSrc: "/display 3.png",
            imageAlt: "XX99 Mark I Headphones",
            productLink: "/headphones/xx99-mark-i",
          },
          {
            id: "2",
            name: "XX59",
            imageSrc: "/display 2.png",
            imageAlt: "XX59 Headphones",
            productLink: "/headphones/xx59",
          },
          {
            id: "3",
            name: "ZX9 SPEAKER",
            imageSrc: "/display 1.png",
            imageAlt: "ZX9 Speaker",
            productLink: "/speakers/zx9",
          },
        ]}
      />
      <CategoriesShowcase />
      <AboutShowcase />
      <Footer />
    </div>
  );
}
