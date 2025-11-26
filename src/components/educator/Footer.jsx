import React from "react";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="flex w-full h-18 items-center max-sm:justify-between justify-end gap-5 max-sm:mb-40 max-sm:mt-10">
      <div className="flex max-sm:gap-2 gap-5 ml-15">
        <img
          src={assets.instagram_icon}
          alt="icon"
          className="cursor-pointer"
        />
        <img src={assets.twitter_icon} alt="icon" className="cursor-pointer" />
        <img src={assets.facebook_icon} alt="icon" className="cursor-pointer" />
      </div>
      <img src={assets.logo} alt="logo" className="w-34 pr-10" />
    </footer>
  );
}
