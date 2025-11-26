import React from "react";
import { assets } from "../../assets/assets";

export default function Companies() {
  return (
    <div className="flex w-ful flex-col gap-7 mt-7 md:mt-15 lg:mt-5">
      <p className="text-gray-500 font-semibold text-center xl:text-start">
        Trusted by learners from
      </p>
      <div className="flex flex-wrap gap-5 md:gap-10 justify-center xl:justify-start -mt-2 md:mt-0">
        <img src={assets.microsoft_logo} alt="logo" className="w-17" />
        <img src={assets.accenture_logo} alt="logo" className="w-17" />
        <img src={assets.walmart_logo} alt="logo" className="w-17" />
        <img src={assets.adobe_logo} alt="logo" className="w-17" />
        <img src={assets.paypal_logo} alt="logo" className="w-17" />
      </div>
    </div>
  );
}
