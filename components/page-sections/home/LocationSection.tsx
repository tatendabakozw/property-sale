import React from "react";
import harare from "@/public/harare.jpg";
import masvingo from "@/public/masvingo.jpg";
import bulawayo from "@/public/bulawayo.jpg";
import mutare from "@/public/mutare.jpeg";

type Props = {};
interface ItemLocationProps {
  span: string;
  image: any;
  location: string;
  properties: string;
}
function LocationSection({}: Props) {
  return (
    <div className="bg-white">
      <div className="flex flex-col space-y-2 max-w-7xl px-4 py-16 mx-auto ">
        <p className="text-center text-slate-900 text-3xl font-semibold">
          Find Properties in These Cities
        </p>
        <p className="text-center text-slate-500">
          Look for listings in your favorite cities
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-16">
          <LocationItem
            span="col-span-1"
            image={harare}
            location="Harare"
            properties="60"
          />
          <LocationItem
            span="md:col-span-2 col-span-1"
            image={bulawayo}
            location="Bulawayo"
            properties="12"
          />
          <LocationItem
            span="md:col-span-2 col-span-1"
            image={masvingo}
            location="Masvingo"
            properties="13"
          />
          <LocationItem
            span="col-span-1"
            image={mutare}
            location="Mutare"
            properties="30"
          />
        </div>
      </div>
    </div>
  );
}

const LocationItem = ({
  span,
  image,
  location,
  properties,
}: ItemLocationProps) => {
  return (
    <div
      className={`${span} md:h-96 h-80 rounded-lg p-6 relative flex flex-col items-center overflow-hidden bg-no-repeat cursor-pointer`}
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40" />
      <div className="flex-1"></div>
      <p className="text-white font-semibold text-lg z-10">{location}</p>
      <p className="text-white z-10">{properties} Properties</p>
    </div>
  );
};

export default LocationSection;
