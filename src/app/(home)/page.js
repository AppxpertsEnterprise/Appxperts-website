import DemosSection from "@/components/DemoSection/DemoSection";
import FeatureOneDemo from "@/components/FeatureOneDemo/FeatureOneDemo";
import FeatureTwoDemo from "@/components/FeatureTwoDemo/FeatureTwoDemo";
import FooterDemo from "@/components/FooterDemo/FooterDemo";
import HeroSection from "@/components/HeroSection/HeroSection";



export const metadata = {
  title: "Appxperts Enterprise Solution.",
 };


const page = () => {
  return (

    <div className="page-wrapper">
      <HeroSection />
      <FeatureTwoDemo />
      {/* <DemosSection /> */}
      <FeatureOneDemo />
      <FooterDemo />
    </div>

  );
}
export default page;
