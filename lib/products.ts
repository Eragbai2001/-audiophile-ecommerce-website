import productsData from "@/data/products.json";

export interface InTheBox {
  quantity: number;
  item: string;
}

export interface Gallery {
  imageSrc: string;
  imageAlt: string;
}

export interface Feature {
  text: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  fullName: string;
  isNew: boolean;
  price: number;
  description: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  layoutVariant: "left" | "right";
  features: Feature[];
  inTheBox: InTheBox[];
  gallery: Gallery[];
  relatedProducts: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

// Get all products
export function getAllProducts(): Product[] {
  return productsData.products as Product[];
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return productsData.products.find((product) => product.id === id) as
    | Product
    | undefined;
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return productsData.products.filter(
    (product) => product.category === category
  ) as Product[];
}

// Get related products
export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product) return [];

  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p) => p !== undefined) as Product[];
}

// Get all categories
export function getAllCategories(): Category[] {
  return productsData.categories;
}

// Get category by ID
export function getCategoryById(id: string): Category | undefined {
  return productsData.categories.find((category) => category.id === id);
}
