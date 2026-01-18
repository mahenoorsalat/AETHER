import { Hero } from "@/components/Hero";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { Philosophy } from "@/components/Philosophy";
import { Navbar } from "@/components/ui/navbar";
import { Pricing } from "@/components/ui/pricing";
import { Footer } from "@/components/ui/footer";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* Fixed Hero Section */}
      <div className="relative h-screen w-full">
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Hero />
        </div>
      </div>

      {/* Scrolling Content - Slides over Hero */}
      <div className="relative z-10 bg-black">
        <VelocityScroll />
        <Philosophy />
        <FeaturesSectionWithBentoGrid />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
