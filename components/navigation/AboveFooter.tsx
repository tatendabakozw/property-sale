import React from 'react'

type Props = {}

const AboveFooter = (props: Props) => {
  return (
    <div className="flex bg-primary-original py-16 text-white px-2">
    <div className="max-w-7xl flex md:flex-row flex-col items-center justify-between mx-auto w-full">
      <div className="flex flex-col md:items-start items-center space-y-2 ">
        <p className="text-3xl md:text-start text-center font-semibold">
        Find Your Dream Home Now
        </p>
        <p className="text-sm md:text-start text-center">
          We only work with the best companies around the globe
        </p>
      </div>
      <div className="bg-primary-light p-4 rounded-lg md:mt-0 mt-8 text-white">
        Explore Properties
      </div>
    </div>
  </div>
  )
}

export default AboveFooter