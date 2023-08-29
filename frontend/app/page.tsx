import HeroSection from "@/components/hero-section/hero-section"
import StickyNav from "@/components/navbar/sticky-nav"
import PartnersSection from "@/components/partners-section/partners-section"
import ProductSection from "@/components/product-section/product-section"

export default function IndexPage() {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <StickyNav />
      <ProductSection />
    </div>
  )
}
