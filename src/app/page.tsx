import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import SolutionsOverview from '@/components/SolutionsOverview'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <SolutionsOverview />
      <Testimonials />
    </main>
  )
}