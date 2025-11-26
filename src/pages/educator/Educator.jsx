import React from "react";
import { Outlet } from "react-router-dom";
import NavbarEdu from "../../components/educator/Navbar";
import SideBar from "../../components/educator/SideBar";
import Footer from "../../components/educator/Footer";
import FlyingBar from "../../components/educator/FylingBar";

export default function Educator() {
  return (
    <div className="min-h-screen relative">
      <NavbarEdu />
      <div className="flex">
        <FlyingBar />
        <div className="max-sm:hidden md:w-1/8 lg:w-1/5 h-full">
          <SideBar />
        </div>
        <div className="max-sm:w-full md:w-7/8 lg:w-4/5 h-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
