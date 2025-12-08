import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AcademicHighlights from "@/components/AcademicHighlights";
import GalleryMarquee from "@/components/GalleryMarquee";

import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white mt-[120px]">
      <Hero />
      <WelcomeSection />
      <AcademicHighlights />
      <Stats />
      <GalleryMarquee />
    </main>
  );
}
