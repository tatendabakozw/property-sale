import GeneralLayout from "@/layouts/GeneralLayout";
import HeroSection from "@/components/page-sections/home/HeroSection";
import LocationSection from "@/components/page-sections/home/LocationSection";
import PropertiesSection from "@/components/page-sections/home/PropertiesSection";
import WhyUsSection from "@/components/page-sections/home/WhyUsSection";

export default function Home() {
  return (
    <GeneralLayout>
      <main>
       
        <HeroSection />
        <PropertiesSection />
        <LocationSection />
        <WhyUsSection />
        <div className="flex bg-primary-original py-16 text-white">
          <div className="max-w-7xl flex flex-row items-center justify-between mx-auto w-full">
            <div className="flex flex-col space-y-2 ">
              <p className="text-3xl font-semibold">
                Become a Real Estate Agent
              </p>
              <p className="text-sm">
                We only work with the best companies around the globe
              </p>
            </div>
            <div className="bg-primary-light p-4 rounded-lg text-white">
              Explore Properties
            </div>
          </div>
        </div>
      </main>
    </GeneralLayout>
  );
}
