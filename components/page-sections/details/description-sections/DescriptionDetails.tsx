import React from 'react'

type Props = {}

const DescriptionDetails = (props: Props) => {
  return (
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
  )
}

interface DetailItemProps {
    name: string;
    other: string;
  }

const DetailsItem = ({ name, other }: DetailItemProps) => {
    return (
      <p className="text-sm text-slate-600">
        {name}: <span className="text-slate-700 font-semibold">{other}</span>
      </p>
    );
  };

export default DescriptionDetails