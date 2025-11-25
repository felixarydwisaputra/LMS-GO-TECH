import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";

export default function MyEnrollment() {
  const { userEnrollCourses, calculatedCourseDuration, navigate } =
    useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 5 },
  ]);

  return (
    <>
      <div className="md:px-50 px-8 pt-10 pb-10">
        <h2 className="text-3xl font-semibold">MyEnrollment</h2>
        <table className="table-fixed md:table-auto w-full overflow-hidden border border-gray-400/30 mt-5 mb-10">
          <thead className="border-b border-gray-400/30 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-3 truncate font-semibold">Course</th>
              <th className="px-4 py-3 truncate font-semibold">Duration</th>
              <th className="px-4 py-3 truncate font-semibold">Complete</th>
              <th className="px-4 py-3 truncate font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {userEnrollCourses.map((course, idx) => (
              <tr key={idx} className="border-b border-gray-400/30">
                <td className="py-3 px-4 flex items-center gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt="thumbnail"
                    className="w-34"
                  />
                  <div className="flex-1">
                    <p>{course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      trailWidth={2}
                      percent={
                        progressArray[idx]
                          ? (progressArray[idx].lectureCompleted * 100) /
                            progressArray[idx].totalLectures
                          : 0
                      }
                      strokeColor={"#FFBF00 "}
                    />
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculatedCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[idx] &&
                    `${progressArray[idx].lectureCompleted} / ${progressArray[idx].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    onClick={() => navigate("/player/" + course._id)}
                    className={`px-3 cursor-pointer py-1.5 text-white rounded ${
                      progressArray[idx] &&
                      progressArray[idx].lectureCompleted /
                        progressArray[idx].totalLectures ===
                        1
                        ? "bg-green-600 "
                        : "bg-blue-600"
                    }`}
                  >
                    {progressArray[idx] &&
                    progressArray[idx].lectureCompleted /
                      progressArray[idx].totalLectures ===
                      1
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
