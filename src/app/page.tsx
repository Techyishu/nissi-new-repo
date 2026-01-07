import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import GalleryMarquee from "@/components/GalleryMarquee";
import WelcomeSection from "@/components/WelcomeSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import UniformSection from "@/components/UniformSection";
import SchoolHouses from "@/components/SchoolHouses";

export default function Home() {
  return (
    <main className="min-h-screen bg-white mt-[120px]">
      <Hero />
      <WelcomeSection />
      <VideoSection />
      <Stats />
      <PrincipalMessage />
      <UniformSection />
      <SchoolHouses />
      <GalleryMarquee />
    </main>
  );
}
