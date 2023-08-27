import React from "react";
import house1 from "../../public/house1.jpg";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

type Props = {};

const PropertyItem = (props: Props) => {
  return (
    <div className="flex rounded-lg flex-col bg-white shadow space-y-4 p-2">
      <div
        className="h-52 rounded-lg flex flex-col bg-no-repeat p-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${house1.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40" />
        <div className="flex z-10 capitalize flex-row items-center space-x-2">
          <div className="featured z-10 rounded bg-secondary-original p-1 text-xs text-white">
            featured
          </div>
          <div className="text-xs bg-primary-original text-white rounded z-10 p-1">
            For Sale
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="bottom font-semibold text-white z-10">1300/m</div>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <p className="text-primary-original text-sm ">Apartment</p>
        <p className="text-slate-800 font-semibold">Renovated Family Home</p>
        <div className="flex flex-row items-center space-x-2">
          <MapPinIcon height={16} width={16} />
          <p className="text-sm text-slate-500">
            15002 zengeza 3 ext Chitungwiza
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4 text-sm text-slate-500">
          <p>Beds: 1</p>
          <p>Baths:1</p>
          <p>Area:400sqrm</p>
        </div>
      </div>
      <div className="border border-slate-100"></div>
      <div className="px-4 py-2 flex flex-row items-center text-xs text-slate-500 space-x-2">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <p>T.Bako</p>
        <div className="flex-1"></div>
        <p>1 Year Ago</p>
      </div>
    </div>
  );
};

export default PropertyItem;
