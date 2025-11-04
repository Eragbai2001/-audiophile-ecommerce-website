import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";
import { ProductShowcase } from "@/components/product-showcase";
import { getProductsByCategory } from "@/lib/products";

export default function SpeakersPage() {
  const products = getProductsByCategory("speakers");

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black h-[220px] flex justify-center items-center">
        <p className="text-white font-bold text-3xl">SPEAKERS</p>
      </div>

      {/* Product Showcase List */}
      {products.map((product, index) => (
        <ProductShowcase
          key={product.id}
          isNew={product.isNew}
          productName={product.fullName}
          productDescription={product.description}
          imageSrc={product.imageSrc}
          imageAlt={product.imageAlt}
          layoutVariant={index % 2 === 0 ? "left" : "right"}
          productLink={`/speakers/${product.id}`}
        />
      ))}

      <CategoriesShowcase />
      <AboutShowcase />
      <Footer />
    </div>
  );
}
