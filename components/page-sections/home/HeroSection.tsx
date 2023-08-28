import hero_section from "../../../public/bg1.jpg";
import { useState } from "react";

type Props = {};

function HeroSection({}: Props) {
  const [option, setOption] = useState("buy");

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
      {/* <header className="mb-16 group">
  <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
    hi, I'm <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      vanntile 👋
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
    ></span>
  </h1>
  <div className="text-xl font-semibold md:text-3xl">developer by choice and designer for fun</div>
</header> */}

      <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
      <div className="min-h-screen grid items-center content-center justify-center w-full z-10 space-y-4 ">
        <div className="flex  items-center justify-center ">
          <div className="w-max">
            {/* <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
              Find Your Dream Home
            </h1> */}
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
            <div className="contact bg-primary-original text-white font-semibold rounded-lg text-center col-span-1 px-3 py-2">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
