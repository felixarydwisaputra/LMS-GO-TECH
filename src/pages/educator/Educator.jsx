import React from "react";
import { Outlet } from "react-router-dom";
import NavbarEdu from "../../components/educator/Navbar";
import SideBar from "../../components/educator/SideBar";
import Footer from "../../components/educator/Footer";

export default function Educator() {
  return (
    <div className="min-h-screen bg-white relative">
      <NavbarEdu />
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
