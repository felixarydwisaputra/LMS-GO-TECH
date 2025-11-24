import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const { currency, calculatedRatings } = useContext(AppContext);
  console.log(course);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-300 rounded-lg overflow-hidden"
    >
      <img
        src={course.courseThumbnail}
        alt="imageThumbnail"
        className="w-full rounded-t-xl"
      />
      <div className="flex flex-col items-start px-5 py-5 gap-1.5">
        <h1 className=" text-start text-xl font-semibold">
          {course.courseTitle}
        </h1>
        <div className="flex gap-2">
          <p>{calculatedRatings(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, idx) => (
              <img
                key={idx}
                className="w-3.5"
                src={
                  idx <= 3
                    ? idx < Math.floor(4)
                      ? assets.star
                      : assets.star_blank
                    : idx < Math.floor(calculatedRatings(course))
                    ? assets.star
                    : assets.star_blank
                }
              ></img>
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <div className="font-bold">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
