import GeneralLayout from "@/layouts/GeneralLayout";
import HeroSection from "@/components/page-sections/home/HeroSection";
import PropertyItem from "@/components/property-item/PropertyItem";

export default function Home() {
  return (
    <GeneralLayout>
      <main>
        <HeroSection />
        <div className="bg-slate-100">
          <div className="flex flex-col space-y-2 max-w-7xl px-4 py-16 mx-auto ">
            <p className="text-center text-slate-900 text-3xl font-semibold">
              Featured Properties
            </p>
            <p className="text-center text-slate-500">
              Handpicked properties by our team.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-16">
              <PropertyItem />
              <PropertyItem />
              <PropertyItem />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex flex-col space-y-2 max-w-7xl px-4 py-16 mx-auto ">
            <p className="text-center text-slate-900 text-3xl font-semibold">
              Find Properties in These Cities
            </p>
            <p className="text-center text-slate-500">
              Look for listings in your favorite cities
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-16">
              <div className="col-span-1 md:h-96 h-80 rounded-lg bg-blue-700"></div>
              <div className="md:col-span-2 col-span-1 md:h-96 h-40 rounded-lg bg-blue-700"></div>
              <div className="md:col-span-2 col-span-1 md:h-96 h-40 rounded-lg bg-blue-700"></div>
              <div className="col-span-1 md:h-96 h-80 rounded-lg bg-blue-700"></div>

            </div>
          </div>
        </div>
      </main>
    </GeneralLayout>
  );
}
