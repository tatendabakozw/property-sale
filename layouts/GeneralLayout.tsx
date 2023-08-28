import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function GeneralLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-full">
      <nav>
        <Navbar />
      </nav>
      <div className="flex flex-col w-full min-h-screen">{children}</div>
      <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default GeneralLayout;
