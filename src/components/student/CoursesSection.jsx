import React, { useContext } from "react";
import CourseCard from "../../components/student/CourseCard";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function CoursesSection() {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="md:py-10 text-center px-5 md:px-10 xl:px-30 2xl:px-55">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Learn from the best
      </h1>
      <p className="lg:w-1/2 mx-auto mt-5 text-gray-500 text-base md:text-base">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 my-10 md:my-20">
        {allCourses.slice(0, 4).map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
      <Link
        to={"/courses-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-black hover:text-white transition-all"
      >
        Show all courses
      </Link>
    </div>
  );
}
