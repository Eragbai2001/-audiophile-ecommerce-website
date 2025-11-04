import { AboutShowcase } from "@/components/AboutShowcase";
import { CategoriesShowcase } from "@/components/categories-showcase";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import { YX1Showcase } from "@/components/yx1-showcase";
import { ZX7Showcase } from "@/components/zx7-showcase";
import { ZX9Showcase } from "@/components/zx9-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesShowcase />
      <ZX9Showcase />
      <ZX7Showcase />
      <YX1Showcase />
      <AboutShowcase />
      <Footer />
    </>
  );
}
