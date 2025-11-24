import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

export default function Footer() {
  return (
    <div className="w-full h-[50vh] bg-[#212122] flex flex-col px-5 md:px-10 xl:px-30">
      <div className="flex w-full h-[80%] mt-20">
        <div className="w-2/5 h-full px-20 py-15">
          <img src={assets.logo2} alt="" />
          <p className="mt-10 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            ducimus rerum placeat a repellendus voluptas aspernatur dolore. Amet
            totam minima a cumque ut. Voluptatibus ab minus consequatur quae
            unde maxime?
          </p>
        </div>
        <div className="w-1/5 h-full px-20 py-15">
          <h1 className="text-xl font-semibold text-white">Company</h1>
          <div className="mt-8 flex flex-col gap-3 text-white">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
        </div>
        <div className="w-2/5 h-full px-20 py-15">
          <h1 className="text-xl text-white">Subscribe to our newslatter</h1>
          <p className="mt-5 text-white font-light">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="input-email flex gap-2 mt-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-3 py-3 bg-white/20 w-full rounded-sm focus:outline-0 text-white"
            />
            <button className="px-5 py-2 bg-amber-500 text-white rounded-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[20%] border-t border-white flex justify-center items-center">
        <p className="text-white font-light">
          Copyright 2025 &copy; All rights reserved.
        </p>
      </div>
    </div>
  );
}
