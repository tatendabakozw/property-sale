import PropertyItem from "@/components/property-item/PropertyItem";
import GeneralLayout from "@/layouts/GeneralLayout";
import React from "react";

type Props = {};

const Explore = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="bg-slate-100 min-h-screen py-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 gap-8 px-2">
          <p className="text-2xl col-span-3 font-semibold text-slate-700">
            Properties List
          </p>
          <div className="md:col-span-1 col-span-3 w-full flex flex-col">
            <div className="rounded bg-white shadow p-4 w-full flex flex-col space-y-4">
              <input
                type="text"
                placeholder="keyword"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="location"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="status"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="property type"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="price range"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="bathrooms"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="bedrooms"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="garages"
                className="border border-slate-200 rounded p-2"
              />
              <input
                type="text"
                placeholder="year built"
                className="border border-slate-200 rounded p-2"
              />
              <div className="bg-primary-original p-3 rounded text-center text-white">
                Clear Filters
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-3 grid grid-cols-2 gap-8">
            <div className="col-span-2 flex flex-col space-y-8">
              <div className="flex text-sm flex-row items-center bg-white p-4 rounded shadow">
                <p className="text-sm text-slate-700 flex-1">
                  10 Search Results
                </p>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <PropertyItem key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Explore;
