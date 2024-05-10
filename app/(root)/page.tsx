import Brand from "@/components/root/Brands";
import HeroSection from "@/components/root/HeroSection";
import HowItWorks from "@/components/root/HowItWorks";
import TopRated from "@/components/root/TopRated";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopRated />
      <HowItWorks />
      <Brand />
    </div>
  );
};

export default Home;
