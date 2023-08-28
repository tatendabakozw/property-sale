import {
  BanknotesIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const WhyUsSection = (props: Props) => {
  const why_data = [
    {
      icon: <ClipboardDocumentListIcon height={56} width={56} />,
      heading: "Trusted by thousands",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
        cum, omnis ullam, sequi dolores ratione atque reprehenderit expedita
        minima ipsum vel consequatur`,
    },
    {
      icon: <BuildingOffice2Icon height={56} width={56} />,
      heading: "Wide range of properties",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
          cum, omnis ullam, sequi dolores ratione atque reprehenderit expedita
          minima ipsum vel consequatur`,
    },
    {
      icon: <BanknotesIcon height={56} width={56} />,
      heading: "Financing Made Easy",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
          cum, omnis ullam, sequi dolores ratione atque reprehenderit expedita
          minima ipsum vel consequatur`,
    },
  ];

  return (
    <div className="bg-slate-100">
      <div className="flex flex-col space-y-2 max-w-7xl px-4 py-32 mx-auto ">
        <p className="text-center text-slate-900 text-3xl font-semibold">
          Why choose us
        </p>
        <p className="text-center text-slate-500">
          We provide full service at every step.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-16">
          {why_data.map((item, index) => (
            <WhyComponent
              icon={item.icon}
              heading={item.heading}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface WhyComponentProps {
  icon: any;
  heading: string;
  description: string;
}

const WhyComponent = ({ icon, heading, description }: WhyComponentProps) => {
  return (
    <div className="flex flex-col p-8 items-center">
      <div className="flex flex-col items-center space-y-4">
        {icon}
        <p className="font-semibold text-slate-900">{heading}</p>
        <p className="text-center text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsSection;
