import React from "react";

type Props = {};

const FilterSection = (props: Props) => {
  return (
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
  );
};

export default FilterSection;
