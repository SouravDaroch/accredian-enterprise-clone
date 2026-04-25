import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustSection />
      <FeaturedPrograms />
    </div>
  );
}
