import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-slate-800 flex flex-col py-16">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-4 grid-cols-1 gap-8 px-2">
        <div className="col-span-1 flex flex-col space-y-4">
          <p className="text-lg font-semibold text-white">About Site</p>
          <p className="text-slate-500 text-sm">
            We’re reimagining how you buy, sell and rent. It’s now easier to get
            into a place you love. So let’s do this, together.
          </p>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <p className="text-lg font-semibold text-white">Quick Links</p>
          <p className="text-slate-500 text-sm">About Us</p>
          <p className="text-slate-500 text-sm">Terms & Conditions</p>
          <p className="text-slate-500 text-sm">Users Guide</p>
          <p className="text-slate-500 text-sm">Contact</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <p className="text-lg font-semibold text-white">Contact Us</p>
          <p className="text-slate-500 text-sm">info@site.com</p>
          <p className="text-slate-500 text-sm">15002 Zengeza 3 Ext</p>
          <p className="text-slate-500 text-sm">Chitungwiza, Harare</p>
          <p className="text-slate-500 text-sm">+263771445411</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <p className="text-lg font-semibold text-white">Follow us</p>
          <div className="text-slate-500 text-sm flex flex-row items-center space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
          <p className="text-lg font-semibold text-white">Subscribe</p>
          <div className="flex flex-row items-center space-x-2 w-16">
            <input type="text" className="p-3 rounded-full bg-slate-700 w-56" placeholder="Your Email" />
            <div className="rounded-full bg-slate-700 p-4">
              <ChevronRightIcon height={16} width={16} className="text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
