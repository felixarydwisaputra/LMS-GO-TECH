/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

export default function Dashboard() {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  console.log("laj");
  return dashboardData ? (
    <div className="p-10">
      <div className="flex gap-5 flex-wrap items-center">
        <div className="flex justify-center gap-5 border-2 border-gray-300 p-7 rounded-lg min-w-[15vw]">
          <img
            className="rounded-full"
            src={assets.patients_icon}
            alt="users"
          />
          <div>
            <h1 className="text-3xl">
              {dashboardData.enrolledStudentsData.length}
            </h1>
            <p className="text-gray-400">Total Enrollments</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 border-2 border-gray-300 p-7 rounded-lg min-w-[15vw]">
          <img
            className="rounded-full"
            src={assets.appointments_icon}
            alt="appointment"
          />
          <div>
            <h1 className="text-3xl">{dashboardData.totalCourses}</h1>
            <p className="text-gray-400">Total Courses</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 border-2 border-gray-300 p-7 rounded-lg min-w-[15vw]">
          <img
            className="rounded-full"
            src={assets.earning_icon}
            alt="appointment"
          />
          <div>
            <h1 className="text-3xl">
              {currency}
              {dashboardData.totalEarnings}
            </h1>
            <p className="text-gray-400">Total Earnings</p>
          </div>
        </div>
      </div>
      <h2 className="mt-10 text-xl font-semibold">Latest Enrollments</h2>
      <div className="flex flex-col items-center w-4xl h-full overflow-hidden rounded-sm border border-gray-500/20 mt-3">
        <table className="w-full md:table-auto overflow-hidden">
          <thead className="text-gray-900 border-b border-gray-500/20">
            <tr>
              <th className="px-4 py-3 font-semibold text-start">#</th>
              <th className="px-4 py-3 font-semibold text-start">
                Student Name
              </th>
              <th className="px-4 py-3 font-semibold text-start">
                Course Title
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {dashboardData.enrolledStudentsData.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="py-3 px-4.5">{idx + 1}</td>
                <td className="py-3 px-4.5 flex items-center gap-3">
                  <img
                    className="w-7 rounded-full"
                    src={item.student.imageUrl}
                    alt="profile_students"
                  />
                  <span className="truncate">{item.student.name}</span>
                </td>
                <td className="py-3 px-5 truncate">{item.courseTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
