import DomainsCovered from "./components/DomainsCovered";
import FAQs from "./components/FAQs";
import GetStartedSteps from "./components/GetStartedSteps";
import LightRays from "./components/lightray/LightRays";
import MentorsSection from "./components/MentorsSection";
import Herosectionnew from "./components/orbback/herosectionnew";
import HeroSectionnew from "./components/orbback/herosectionnew";
import ProgressStats from "./components/ProgressStats";
import StruggleAloneCovered from "./components/StruggleAloneCovered";
import StudentSuccessJourney from "./components/StudentSuccessJourney";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyEdumentorStandsOut from "./components/WhyEdumentorStandsOut";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 overflow-x-hidden overflow-y-hidden">
      {/* <HeroSection /> */}
      <Herosectionnew />
      <ProgressStats />
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <LightRays />
      </div> */}
      <WhyChooseUs />
      <GetStartedSteps />
      <MentorsSection />

      <StruggleAloneCovered />
      <StudentSuccessJourney />
      <WhyEdumentorStandsOut />

      <DomainsCovered />
      <FAQs />
    </div>
  );
}
