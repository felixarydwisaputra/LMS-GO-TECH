/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

export default function CoursesList() {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourses(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourses(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="px-50">
        <div className="flex mb-10 mt-20 justify-between">
          <div className="w-1/2">
            <h1 className="text-6xl">Course List</h1>
            <p className="mt-2">
              <span className="text-amber-500" onClick={() => navigate("/")}>
                Home
              </span>{" "}
              /<span className="text-gray-500"> Course List</span>
            </p>
          </div>
          <div className="w-1/2 pl-50">
            <SearchBar />
          </div>
        </div>

        {input && (
          <div className="inline-flex border px-4 py-2 gap-4">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              className="cursor-pointer"
              alt="close"
              onClick={() => navigate("/courses-list")}
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-10 mb-20">
          {filteredCourses.map((e, idx) => (
            <CourseCard key={idx} course={e} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
