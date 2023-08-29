import GallerySection from "@/components/page-sections/details/GallerySection";
import ProductDescriptionSection from "@/components/page-sections/details/ProductDescriptionSection";
import GeneralLayout from "@/layouts/GeneralLayout";
import React from "react";

type Props = {};

const Details = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="py-32 min-h-screen">
        <GallerySection />
        <ProductDescriptionSection />
      </div>
    </GeneralLayout>
  );
};

export default Details;
