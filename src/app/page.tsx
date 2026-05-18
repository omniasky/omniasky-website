import { Header } from '@/components/organisms/Header'
import { HeroSection } from '@/components/organisms/HeroSection'
import { FeaturesSection } from '@/components/organisms/FeaturesSection'
import { VisionMissionSection } from '@/components/organisms/VisionMissionSection'
import { MissionSection } from '@/components/organisms/MissionSection'
import { CTASection } from '@/components/organisms/CTASection'
import { Footer } from '@/components/organisms/Footer'
import { TronBackground } from '@/components/molecules/TronBackground'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="relative">
          <TronBackground />
          <div className="relative z-10">
            <VisionMissionSection />
            <FeaturesSection />
            <MissionSection />
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
