import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BackstorySection } from "@/components/backstory-section"
import { DemoSection } from "@/components/demo-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BackstorySection />
      <DemoSection />
      <CallToActionSection />
    </main>
  )
}
