import { cn } from "@/lib/utils";
import CreativeSkills from "./components/CreativeSkills";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import MyWorks from "./components/MyWorks";
import FAQs from "./components/FAQs";

export const padding = "lg:px-[160px] md:px-[80px] sm:px-[18px]";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className={cn("w-full h-fit", padding)}>
        <CreativeSkills />
        <Benefits />
        <MyWorks />
        <FAQs />
      </div>
    </div>
  );
}
