import GeneralLayout from "@/layouts/GeneralLayout";
import React from "react";
import hero_section from "@/public/bg1.jpg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

type Props = {};

const Contact = (props: Props) => {
  return (
    <GeneralLayout>
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
            <p className="text-5xl font-semibold text-white z-10">Contact Us</p>
          </div>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-1 gap-8 max-w-7xl w-full mx-auto py-16">
          <div className="flex col-span-5 flex-col space-y-8 md:p-8 p-4 bg-white rounded-lg shadow">
            <p className="font-semibold text-lg text-slate-900">
              Send Us An Email
            </p>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              gravida quis libero eleifend ornare. Maecenas mattis enim at arcu
              feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
              malesuada eu libero sit amet, congue aliquam leo. In hac habitasse
              platea dictumst.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                className="col-span-1 border border-slate-200 rounded-lg p-2"
                placeholder="name"
              />
              <input
                type="text"
                className="col-span-1 border border-slate-200 rounded-lg p-2"
                placeholder="email"
              />
              <input
                type="text"
                className="col-span-1 border border-slate-200 rounded-lg p-2"
                placeholder="phone"
              />
              <input
                type="text"
                className="col-span-1 border border-slate-200 rounded-lg p-2"
                placeholder="subject"
              />
              <textarea
                rows={5}
                className="col-span-2 border border-slate-200 rounded-lg p-2"
                placeholder="subject"
              />
              <PrimaryButton text={"Send Message"} />
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-lg shadow flex flex-col space-y-8 md:p-8 p-4">
            <p className="font-semibold text-lg text-slate-900">Contact Us</p>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              gravida quis libero eleifend ornare.
            </p>
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-lg text-slate-900">Address</p>
              <p className="text-slate-700 text-sm">
                15002 Zengeza 3 Extension, Chitungwiza, Harare
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-lg text-slate-900">Phone</p>
              <p className="text-slate-700 text-sm">+263771445411</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-lg text-slate-900">Mail</p>
              <p className="text-slate-700 text-sm">trewmane@gmail.com</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-lg text-slate-900">Follow Us</p>
              <div className="text-slate-500 text-sm flex flex-row items-center space-x-4">
                <div className="flex bg-slate-100 p-2 rounded-lg">
                  <FaFacebookF />
                </div>
                <div className="flex bg-slate-100 p-2 rounded-lg">
                  <FaTwitter />
                </div>
                <div className="flex bg-slate-100 p-2 rounded-lg">
                  <FaInstagram />
                </div>
                <div className="flex bg-slate-100 p-2 rounded-lg">
                  <FaPinterest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Contact;
