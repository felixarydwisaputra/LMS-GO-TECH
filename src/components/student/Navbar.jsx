import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

export default function Navbar() {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { navigate, isEducator } = useContext(AppContext);

  const { user } = useUser();

  return (
    <div
      className={`w-full h-18 flex items-center justify-between px-10 xl:px-30 2xl:px-50 ${
        isCourseListPage ? "bg-white" : "bg-amber-100/80"
      } `}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-26 cursor-pointer"
      />
      <div className="flex gap-5 text-sm md:text-base">
        <div className="hidden lg:flex gap-5">
          {user ? (
            <div className="flex gap-3 items-center text-gray-500">
              <Link to="/educator" className="cursor-pointer">
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </Link>
              |
              <Link to="/my-enrollments" className="cursor-pointer">
                My Enrollments
              </Link>
            </div>
          ) : (
            <></>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="border border-black text-black hover:bg-black hover:text-white transition-all px-5 py-2 rounded-full cursor-pointer"
            >
              Login / Create Account
            </button>
          )}
        </div>
        <div className="lg:hidden flex items-center gap-5 text-gray-500">
          {user && (
            <div className="flex gap-5 items-center">
              <Link className="cursor-pointer">
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </Link>
              |
              <Link to="/" className="cursor-pointer">
                My Enrollments
              </Link>
            </div>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} alt="profile" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
