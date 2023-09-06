import React from "react";
import hero_section from "@/public/bg1.jpg";
import AboveFooter from "@/components/navigation/AboveFooter";
import GeneralLayout from "@/layouts/GeneralLayout";

type Props = {};

const About = (props: Props) => {
  return (
    <GeneralLayout title="About" description="About the platform">
      <div className="flex flex-col w-full h-full py-16 flex-1 bg-slate-100 ">
        <div
          className="h-96  py-8 relative"
          style={{
            backgroundImage: `url(${hero_section.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
          <div className="max-w-7xl w-full mx-auto px-2 z-10 grid items-center content-center h-full flex-1">
            <div className="flex flex-col space-y-2 z-10">
              <p className="space-x-4 text-white pl-2">
                Home <span>/</span> About
              </p>
              <p className="text-5xl font-semibold text-white z-10">About Us</p>
            </div>
          </div>
        </div>
      </div>
      <AboveFooter />
    </GeneralLayout>
  );
};

export default About;
