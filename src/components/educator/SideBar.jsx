import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

export default function SideBar() {
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
    <div className="w-72 min-h-[94vh] border-r-2 border-gray-300 flex flex-col">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === "/educator"}
          className={({ isActive }) =>
            `flex gap-3 px-10 py-5 justify-center md:justify-start ${
              isActive ? "bg-gray-300/30 border-r-[6px] border-amber-400" : ""
            }`
          }
        >
          <img src={item.icon} alt="icon-sidebar" />
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
