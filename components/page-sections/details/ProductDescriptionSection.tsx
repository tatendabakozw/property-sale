import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Avatar } from "@chakra-ui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const ProductDescriptionSection = (props: Props) => {
  return (
    <div className="bg-slate-100 w-full py-16">
      <div className="max-w-7xl mx-auto w-full px-2 grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="col-span-5 flex flex-col space-y-8">
          <div className=" bg-white md:p-8 p-2 rounded-lg w-full shadow flex flex-col space-y-6">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <p className="text-sm bg-slate-50 rounded text-slate-600 p-2">
                Apartment
              </p>
              <p className="text-sm bg-slate-50 rounded text-slate-600 p-2">
                Beds:4
              </p>
              <p className="text-sm bg-slate-50 rounded text-slate-600 p-2">
                Baths:2
              </p>
              <p className="text-sm bg-slate-50 rounded text-slate-600 p-2">
                Area: 2500sqrm
              </p>
            </div>
            <p className="text-lg font-semibold text-slate-700">Description</p>
            <p className="text-slate-700">
              Evans Tower very high demand corner junior one bedroom plus a
              large balcony boasting full open NYC views. You need to see the
              views to believe them. Mint condition with new hardwood floors.
              Lots of closets plus washer and dryer. Fully furnished. Elegantly
              appointed condominium unit situated on premier location. PS6. The
              wide entry hall leads to a large living room with dining area.
              This expansive 2 bedroom and 2 renovated marble bathroom apartment
              has great windows. Despite the interior views, the apartments
              Southern and Eastern exposures allow for lovely natural light to
              fill every room. The master suite is surrounded by handcrafted
              milkwork and features incredible walk-in closet and storage space.
              Fully furnished. Elegantly appointed condominium unit situated on
              premier location. PS6. The wide entry hall leads to a large living
              room with dining area. This expansive 2 bedroom and 2 renovated
              marble bathroom apartment has great windows. Despite the interior
              views, the apartments Southern and Eastern exposures allow for
              lovely natural light to fill every room. The master suite is
              surrounded by handcrafted milkwork and features incredible walk-in
              closet and storage space. Fully furnished. Elegantly appointed
              condominium unit situated on premier location. PS6. The wide entry
              hall leads to a large living room with dining area. This expansive
              2 bedroom and 2 renovated marble bathroom apartment has great
              windows. Despite the interior views, the apartments Southern and
              Eastern exposures allow for lovely natural light to fill every
              room. The master suite is surrounded by handcrafted milkwork and
              features incredible walk-in closet and storage space.
            </p>
            <div className="border-t border-slate-300 w-full my-4"></div>
            <p className="text-lg font-semibold text-slate-700 ">Details</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              <DetailsItem name="Property ID" other="JK77" />
              <DetailsItem name="Bedrooms" other="7" />
              <DetailsItem name="Property Type" other="Apartment" />
              <DetailsItem name="Price" other="$45000" />
              <DetailsItem name="Bathrooms" other="3" />
              <DetailsItem name="Property Status" other="For Sale" />
              <DetailsItem name="Property Size" other="3000sqrm" />
              <DetailsItem name="Garage" other="3" />
              <DetailsItem name="Year Built" other="2015" />
            </div>
          </div>
          <div className="bg-white md:p-8 p-2 rounded-lg w-full shadow flex flex-col space-y-6">
            <p className="text-lg font-semibold text-slate-700 ">Features</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              <FeatureItem name="Lawn" />
              <FeatureItem name="Pool" />
              <FeatureItem name="Air Conditioner" />
              <FeatureItem name="Barbeque" />
              <FeatureItem name="Microwave" />
              <FeatureItem name="TV Cable" />
              <FeatureItem name="Dryer" />
              <FeatureItem name="Outdoor Shower" />
              <FeatureItem name="Refrigerator" />
              <FeatureItem name="Washer" />
              <FeatureItem name="Washer" />
              <FeatureItem name="Washer" />
              <FeatureItem name="Sauna" />
              <FeatureItem name="Window Coverings" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white md:p-8 p-2 rounded-lg shadow flex flex-col space-y-4">
            <p className="text-lg font-semibold text-slate-700 ">Listed By</p>
            <div className="flex flex-row items-center space-x-2">
              <Avatar
                size={"lg"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <div className="flex flex-col">
                <p className="text-slate-700 font-semibold">Tatenda Bako</p>
                <p className="text-sm text-slate-500">+263771445411</p>
                <p className="text-sm text-slate-500">trewmane@gmail.com</p>
              </div>
            </div>
            <input
              type="text"
              className="p-3 rounded-lg outline-none border border-slate-200"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="p-3 rounded-lg outline-none border border-slate-200"
              placeholder="Phone"
            />
            <input
              type="email"
              className="p-3 rounded-lg outline-none border border-slate-200"
              placeholder="Email"
            />
            <textarea
              rows={5}
              className="p-3 rounded-lg outline-none border border-slate-200"
              placeholder="Your Message"
            />
            <PrimaryButton text={'Send Message'} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  name: string;
}

interface DetailItemProps {
  name: string;
  other: string;
}

const FeatureItem = ({ name }: FeatureItemProps) => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <CheckIcon height={16} width={16} className="text-primary-original" />
      <p>{name}</p>
    </div>
  );
};

const DetailsItem = ({ name, other }: DetailItemProps) => {
  return (
    <p className="text-sm text-slate-600">
      {name}: <span className="text-slate-700 font-semibold">{other}</span>
    </p>
  );
};

export default ProductDescriptionSection;
