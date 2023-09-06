import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
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
  );
};

interface FeatureItemProps {
  name: string;
}

const FeatureItem = ({ name }: FeatureItemProps) => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <CheckIcon height={16} width={16} className="text-primary-original" />
      <p>{name}</p>
    </div>
  );
};

export default Features;
