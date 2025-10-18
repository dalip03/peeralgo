import DomainsCovered from "./components/DomainsCovered";
import FAQs from "./components/FAQs";
import GetStartedSteps from "./components/GetStartedSteps";
import HeroSection from "./components/HeroSection";
import MentorsSection from "./components/MentorsSection";
import ProgressStats from "./components/ProgressStats";
import StruggleAloneCovered from "./components/StruggleAloneCovered";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyEdumentorStandsOut from "./components/WhyEdumentorStandsOut";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 overflow-x-hidden overflow-y-hidden">
      <HeroSection />
      <ProgressStats />
      <WhyChooseUs />
      <GetStartedSteps />
      <MentorsSection />

      <StruggleAloneCovered />
      <WhyEdumentorStandsOut />

      <DomainsCovered />
      <FAQs />
    </div>
  );
}
