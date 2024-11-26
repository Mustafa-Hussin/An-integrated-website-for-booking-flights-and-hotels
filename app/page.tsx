import { HeroSection } from "@/components/sections/hero";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import { PopularHotels } from "@/components/sections/popular-hotels";
import { TravelPackages } from "@/components/sections/travel-packages";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <FeaturedDestinations />
      <PopularHotels />
      <TravelPackages />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
}