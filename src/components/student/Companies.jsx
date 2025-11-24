import React from "react";
import { assets } from "../../assets/assets";

export default function Companies() {
  return (
    <div className="w-ful flex flex-col gap-7 mt-5">
      <p className="text-gray-500 font-semibold">Trusted by learners from</p>
      <div className="flex gap-10">
        <img src={assets.microsoft_logo} alt="logo" />
        <img src={assets.accenture_logo} alt="logo" />
        <img src={assets.walmart_logo} alt="logo" />
        <img src={assets.adobe_logo} alt="logo" />
        <img src={assets.paypal_logo} alt="logo" />
      </div>
    </div>
  );
}
