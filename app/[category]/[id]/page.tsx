import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { ProductFeatures } from "@/components/product-features";
import { ProductGallery } from "@/components/product-gallery";
import { YouMayAlsoLike } from "@/components/you-may-also-like";
import {
  getProductById,
  getRelatedProducts,
  getAllProducts,
} from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

// Generate static params for all products
export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    category: product.category,
    id: product.id,
  }));
}

// Disable caching for this page
export const revalidate = 0;

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id);

  return (
    <div className="min-h-screen bg-white">
      <div
        className="mx-auto px-6 md:px-8 lg:px-12"
        style={{ maxWidth: "1510px" }}>
        <div className="pt-8 pb-4">
          <Link
            href={`/${product.category}`}
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

      {/* Product Detail */}
      <ProductDetail
        isNew={product.isNew}
        productName={product.fullName}
        productDescription={product.description}
        imageSrc={product.imageSrc}
        imageAlt={product.imageAlt}
        price={product.price}
        productId={product.id}
        layoutVariant={product.layoutVariant}
      />

      {/* Features */}
      <ProductFeatures
        features={product.features}
        inTheBox={product.inTheBox}
      />

      {/* Gallery */}
      <ProductGallery gallery={product.gallery} />

      {/* Related Products */}
      <YouMayAlsoLike
        products={relatedProducts.map((p) => ({
          id: p.id,
          name: p.fullName,
          imageSrc: p.imageSrc,
          imageAlt: p.imageAlt,
          productLink: `/${p.category}/${p.id}`,
        }))}
      />

      {/* Categories & Footer */}
      <CategoriesShowcase />
      <AboutShowcase />
      <Footer />
    </div>
  );
}
