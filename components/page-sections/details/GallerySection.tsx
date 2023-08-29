import React from 'react'

type Props = {}

function GallerySection({}: Props) {
  return (
    <div className=" pb-16 w-full">
          <div className="max-w-7xl w-full mx-auto px-2 flex flex-col">
            <div className="flex flex-row items-center pb-8">
              <div className="flex flex-col flex-1">
                <p className="text-slate-700 font-semibold">
                  Luxury Family Home
                </p>
                <p>15002 Zengeza 3 Extension, Chitungwiza</p>
              </div>
              <p className="text-lg font-semibold text-slate-700">
                13000{" "}
                <span className="text-sm font-medium text-slate-700">/mo</span>
              </p>
            </div>
            <div className="grid md:grid-cols-7 grid-cols-2 h-96 gap-4">
              <div className="col-span-5 h-full bg-blue-700 rounded-xl"></div>
              <div className="md:col-span-2 col-span-5 h-full grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    className="col-span-1 bg-blue-700 rounded-xl"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default GallerySection