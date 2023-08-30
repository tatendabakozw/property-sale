import React, { ReactElement } from "react";

interface Props {
  outline?: boolean;
  text?: any;
  onClick?: any;
  className?: string;
  loading?: boolean;
}


const PrimaryButton = ({
    outline,
    text,
    onClick,
    className,
    loading,
  }: Props):ReactElement => {
  return (
    <button
    type="button"
    onClick={loading ? () => console.log("loading...") : onClick}
    className={`${className} ${
      outline
        ? "text-primary-original bg-white border hover:bg-primary-original hover:text-white"
        : "bg-primary-original text-white hover:bg-primary-dark "
    } rounded outline-none border-primary-original `}
  >
    {loading ? (
      <div className="flex flex-row items-center justify-center font-semibold md:p-3 p-2 capitalize">
        <div
          className={`animate-spin rounded-full h-5 w-5 mr-2 border-t-2  border-b-2 ${
            outline ? "border-primary-original hover:border-white" : "border-white"
          }`}
        ></div>
        <p className="font-semibold capitalize">Loading...</p>
      </div>
    ) : (
      <div className="font-semibold md:p-3 p-2 capitalize text-sm text-center mx-auto flex flex-col items-center">
        {" "}
        {text}
      </div>
    )}
  </button>
  )
}

export default PrimaryButton