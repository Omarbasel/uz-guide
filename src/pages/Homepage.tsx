import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { PopularCategories } from "@/components/ui/PopularCategories";
import { AdventureShowcase } from "@/components/ui/AdventureShowcase";
import { PackagesPreview } from "@/components/ui/PackagesPreview";
import { TripQuiz } from "@/components/ui/TripQuiz";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { LatestListings } from "@/components/ui/LatestListings";
import { BlogHighlights } from "@/components/ui/BlogHighlights";
import { SocialProof } from "@/components/ui/SocialProof";
import { Footer } from "@/components/ui/Footer";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PopularCategories />
      <AdventureShowcase />
      <PackagesPreview />
      <TripQuiz />
      <ParallaxSection />
      <LatestListings />
      <BlogHighlights />
      <SocialProof />
      <Footer />
    </div>
  );
};