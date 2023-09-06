import GeneralLayout from "@/layouts/GeneralLayout";
import HeroSection from "@/components/page-sections/home/HeroSection";
import LocationSection from "@/components/page-sections/home/LocationSection";
import PropertiesSection from "@/components/page-sections/home/PropertiesSection";
import WhyUsSection from "@/components/page-sections/home/WhyUsSection";
import AboveFooter from "@/components/navigation/AboveFooter";

export default function Home() {
  return (
    <GeneralLayout>
      <main>
        <HeroSection />
        <PropertiesSection />
        <LocationSection />
        <WhyUsSection />
        <AboveFooter />
      </main>
    </GeneralLayout>
  );
}
