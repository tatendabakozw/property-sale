import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-slate-800 flex flex-col py-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-4 gap-8">
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
          <p className="text-slate-500 text-sm">info@site.com</p>
          <p className="text-slate-500 text-sm">15002 Zengeza 3 Ext</p>
          <p className="text-slate-500 text-sm">Chitungwiza, Harare</p>
          <p className="text-slate-500 text-sm">+263771445411</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
