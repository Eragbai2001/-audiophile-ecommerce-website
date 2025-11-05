import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { ProductFeatures } from "@/components/product-features";
import { ProductGallery } from "@/components/product-gallery";
import { YouMayAlsoLike } from "@/components/you-may-also-like";
import Link from "next/link";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";

// Get product by ID
function getProductById(id: string) {
  return productsData.products.find((product) => product.id === id);
}

export default async function HeadphoneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product || product.category !== "headphones") {
    notFound();
  }

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
        isNew={product.isNew}
        productName={product.name}
        productDescription={product.description}
        imageSrc={product.imageSrc}
        imageAlt={product.imageAlt}
        price={product.price}
        layoutVariant="left"
      />
      <ProductFeatures
        features={product.features}
        inTheBox={product.inTheBox}
      />{" "}
      <ProductGallery gallery={product.gallery} />
      <YouMayAlsoLike
        products={product.relatedProducts.map((id) => {
          const relatedProduct = getProductById(id);
          return relatedProduct
            ? {
                id: relatedProduct.id,
                name: relatedProduct.name,
                imageSrc: relatedProduct.imageSrc,
                imageAlt: relatedProduct.imageAlt,
                productLink: `/${relatedProduct.category}/${relatedProduct.id}`,
              }
            : null;
        }).filter((p): p is NonNullable<typeof p> => p !== null)}
      />
      <CategoriesShowcase />
      <AboutShowcase />
      <Footer />
    </div>
  );
}
