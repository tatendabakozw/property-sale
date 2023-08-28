import React from "react";
import PropertyItem from "@/components/property-item/PropertyItem";

type Props = {};

const PropertiesSection = (props: Props) => {
  return (
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
  );
};

export default PropertiesSection;
