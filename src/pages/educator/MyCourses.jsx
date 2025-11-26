/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";

export default function MyCourses() {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchDataCourses = async () => {
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchDataCourses();
  }, []);

  return courses ? (
    <div className="p-10">
      <h2 className="text-xl font-semibold">My Course</h2>
      <div className="max-w-4xl mt-5 rounded-md border border-gray-500/20">
        <table className="w-full table-auto">
          <thead className="border-b border-gray-300/60 rounded-xl overflow-hidden">
            <tr>
              <th className="px-5 py-3 text-start">All Course</th>
              <th className="px-5 py-3 text-start">Earnings</th>
              <th className="px-5 py-3 text-start hidden lg:block">Students</th>
              <th className="px-5 py-3 text-start hidden lg:block">
                Published On
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-3 py-3 px-3">
                  <img
                    src={item.courseThumbnail}
                    alt="image"
                    className="max-sm:hidden w-28"
                  />
                  <span>{item.courseTitle}</span>
                </td>
                <td className="px-6 py-4">
                  {currency}
                  {Math.floor(
                    item.enrolledStudents.length *
                      (item.coursePrice -
                        (item.discount * item.coursePrice) / 100)
                  )}
                </td>
                <td className="px-6 py-4 hidden lg:block">
                  {item.enrolledStudents.length}
                </td>
                <td className="px-6 py-4 max-sm:hidden">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
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
