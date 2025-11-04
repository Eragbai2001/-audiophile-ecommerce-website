import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";

import { ProductShowcase } from "@/components/product-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black h-[220px] flex justify-center items-center">
        <p className="text-white font-bold text-3xl "> HEADPHONE</p>
      </div>
      <ProductShowcase
        isNew={true}
        productName="XX99 MARK II HEADPHONES"
        productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
        imageSrc="/Preview1 (3).png"
        imageAlt="XX99 Mark II Headphones"
        layoutVariant="left"
      />
      <ProductShowcase
        isNew={true}
        productName="XX99 MARK II HEADPHONES"
        productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
        imageSrc="/Preview2.png"
        imageAlt="XX99 Mark II Headphones"
        layoutVariant="right"
      />
      <ProductShowcase
        isNew={true}
        productName="XX99 MARK II HEADPHONES"
        productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
        imageSrc="/Preview3.png"
        imageAlt="XX99 Mark II Headphones"
        layoutVariant="left"
      />

      <CategoriesShowcase />
      <AboutShowcase />

      <Footer />
    </div>
  );
}
