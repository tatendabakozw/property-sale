import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Avatar } from "@chakra-ui/react";
import React from "react";
import DescriptionDetails from "./description-sections/DescriptionDetails";
import Features from "./description-sections/Features";
import MapSection from "./description-sections/MapSection";

type Props = {};

const ProductDescriptionSection = (props: Props) => {
  return (
    <div className="bg-slate-100 w-full py-16">
      <div className="max-w-7xl mx-auto w-full px-2 grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="col-span-5 flex flex-col space-y-8">
          <DescriptionDetails/>
          <Features/>
          <MapSection/>
        </div>
        <div className="md:col-span-2 col-span-5">
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



export default ProductDescriptionSection;
