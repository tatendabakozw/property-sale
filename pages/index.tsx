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
        <div className="flex bg-primary-original py-16 text-white px-2">
          <div className="max-w-7xl flex md:flex-row flex-col items-center justify-between mx-auto w-full">
            <div className="flex flex-col md:items-start items-center space-y-2 ">
              <p className="text-3xl md:text-start text-center font-semibold">
              Find Your Dream Home Now
              </p>
              <p className="text-sm md:text-start text-center">
                We only work with the best companies around the globe
              </p>
            </div>
            <div className="bg-primary-light p-4 rounded-lg md:mt-0 mt-8 text-white">
              Explore Properties
            </div>
          </div>
        </div>
      </main>
    </GeneralLayout>
  );
}
