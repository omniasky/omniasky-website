import { Header } from '@/components/organisms/Header'
import { HeroSection } from '@/components/organisms/HeroSection'
import { FeaturesSection } from '@/components/organisms/FeaturesSection'
import { VisionMissionSection } from '@/components/organisms/VisionMissionSection'
import { MissionSection } from '@/components/organisms/MissionSection'
import { CTASection } from '@/components/organisms/CTASection'
import { Footer } from '@/components/organisms/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VisionMissionSection />
        <MissionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
