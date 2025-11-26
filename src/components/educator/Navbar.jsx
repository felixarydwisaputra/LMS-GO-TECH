import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

export default function NavbarEdu() {
  const { navigate } = useContext(AppContext);
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-10 xl:px-30 py-4 border-b-2 border-amber-500 ">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-26 cursor-pointer"
      />
      <div className="flex items-center gap-3">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img src={assets.profile_img} alt="profile" className="w-7" />
        )}
      </div>
    </div>
  );
}
