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
    <div className="w-full min-h-screen md:min-h-[95vh] border-r-2 border-gray-300 flex flex-col relative">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === "/educator"}
          className={({ isActive }) =>
            `flex gap-3 px-3 lg:px-10 py-5 items-center md:justify-start ${
              isActive ? "bg-gray-300/30 border-r-[6px] border-amber-400" : ""
            }`
          }
        >
          <img
            src={item.icon}
            alt="icon-sidebar"
            className="md:ml-5 lg:ml-0 w-5 text-center"
          />
          <p className="">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
