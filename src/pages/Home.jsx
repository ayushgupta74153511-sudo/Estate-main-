import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import FeaturedProperties from "../components/sections/FeaturedProperties";
import AmenitiesSection from "../components/sections/AmenitiesSection";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProperties />
      <AmenitiesSection />
      <Testimonials />
    </>
  );
}

export default Home;