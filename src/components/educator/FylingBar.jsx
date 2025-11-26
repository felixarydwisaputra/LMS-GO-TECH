import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

export default function FylingBar() {
  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    {
      name: "Add Course",
      path: "/educator/add-course",
      icon: assets.add_icon,
    },
    {
      name: "My Course",
      path: "/educator/my-courses",
      icon: assets.my_course_icon,
    },
    {
      name: "Student Enrolled",
      path: "/educator/student-enrolled",
      icon: assets.person_tick_icon,
    },
  ];
  return (
    <div className="fixed z-10 w-full py-3 flex justify-center bottom-5">
      <div className="flex gap-10 items-center bg-black text-white px-7 py-3 rounded-full shadow-xl">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/educator"}
          >
            <img
              src={item.icon}
              alt="icon-sidebar"
              className="md:ml-5 lg:ml-0 w-5 text-center invert"
            />
            <p className="hidden lg:text-sm">{item.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
