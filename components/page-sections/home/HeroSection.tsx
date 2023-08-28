import { useRouter } from "next/router";
import hero_section from "../../../public/bg1.jpg";
import { useState } from "react";

type Props = {};

function HeroSection({}: Props) {
  const [option, setOption] = useState("buy");
  const router = useRouter()

  const home_options = [
    { name: "buy", option: "buy" },
    { name: "rent", option: "rent" },
  ];
  return (
    <div
      className={`flex w-full min-h-screen bg-no-repeat p-2 relative md:pt-0 pt-32`}
      style={{
        backgroundImage: `url(${hero_section.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
      <div className="min-h-screen grid items-center content-center justify-center w-full z-10 space-y-4 ">
        <div className="flex  items-center justify-center ">
          <div className="w-max">
            <p className="md:text-6xl text-3xl font-semibold text-white text-center animate-typing overflow-hidden whitespace-nowrap ">
              Find Your Dream Home
            </p>
          </div>
        </div>

        <p className="text-white md:text-lg text-sm text-center">
          From as low as $10 per day with limited time offer discounts.
        </p>
        <div className="flex flex-row items-center space-x-4 mx-auto pt-16 capitalize">
          {home_options.map((item, index) => (
            <button
              onClick={() => setOption(item.option)}
              key={index}
              className={`${
                item.option === option
                  ? "bg-primary-original text-white "
                  : "bg-white text-primary-original "
              } relative w-32 inline-block px-4 py-2 rounded-lg`}
            >
              {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-original">
           <ChevronDownIcon
             height={26}
             width={26}
             className="text-primary-original"
           />
         </span> */}
              <span className="relative">{item.option}</span>
            </button>
          ))}
        </div>
        <div className="bg-white bg-opacity-20 p-2 rounded-lg">
          <div className="bg-white md:p-8 p-4 rounded-lg max-w-6xl w-full mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center gap-4">
            <input
              type="text"
              className="p-2 rounded border border-slate-300 col-span-1"
              placeholder="Enter keyword..."
            />
            <input
              type="text"
              className="p-2 rounded border border-slate-300 col-span-1"
              placeholder="Property type..."
            />
            <input
              type="text"
              className="p-2 rounded border border-slate-300 col-span-1"
              placeholder="location..."
            />
            <input
              type="text"
              className="p-2 rounded border border-slate-300 col-span-1"
              placeholder="Price..."
            />
            <div onClick={() => router.push('/explore')} className="contact bg-primary-original text-white font-semibold rounded-lg text-center col-span-1 px-3 py-2">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
