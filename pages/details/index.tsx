import GallerySection from "@/components/page-sections/details/GallerySection";
import ProductDescriptionSection from "@/components/page-sections/details/ProductDescriptionSection";
import GeneralLayout from "@/layouts/GeneralLayout";
import React from "react";

type Props = {};

const Details = (props: Props) => {
  return (
    <GeneralLayout title="Property Details" description="See description about this property">
      <div className="pt-32 min-h-screen">
        <GallerySection />
        <ProductDescriptionSection />
      </div>
    </GeneralLayout>
  );
};

export default Details;
