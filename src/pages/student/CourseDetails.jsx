/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";

export default function CourseDetails() {
  const { navigate } = useContext(AppContext);
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [isEnroll, setIsEnroll] = useState(false);
  const {
    allCourses,
    calculatedRatings,
    currency,
    calculatedNoOfLecture,
    calculatedCourseDuration,
    calculatedChapterTime,
  } = useContext(AppContext);

  const toggleSections = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const fetchDataCourse = async () => {
    const findCourse = allCourses.find((course) => course._id == id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchDataCourse();
  }, [allCourses]);

  return courseData ? (
    <>
      <div className="flex flex-col xl:flex-row w-full items-start justify-between px-10 xl:px-30 2xl:px-50 pt-3 pb-10 2xl:py-20 relative gap-10 ">
        <div
          className="flex items-center gap-2 z-10 -mb-5 text-gray-400"
          onClick={() => navigate(-1)}
        >
          <img src={assets.arrow_icon} className="rotate-180 opacity-50" />
          <p>Back</p>
        </div>
        <div className="w-full h-[92vh] absolute top-0 bottom-0 right-0 left-0 z-1 bg-linear-to-b from-amber-100/80"></div>
        {/* sisi kiri */}
        <div className="z-2 2xl:max-w-2xl text-gray-500">
          <h2 className="text-4xl font-bold text-gray-800">
            {courseData.courseTitle}
          </h2>
          <p
            className="pt-4 text-base"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 259),
            }}
          ></p>
          {/* sisi kanan */}
          <div className="flex gap-2 mt-4">
            <p>{calculatedRatings(courseData)}</p>
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
                      : idx < Math.floor(calculatedRatings(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                ></img>
              ))}
            </div>
            <p className=" text-blue-500">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1
                ? " students"
                : " student"}
            </p>
          </div>
          <p className="pt-1">
            Course by{" "}
            <span className="text-blue-500 underline">GreatStack</span>{" "}
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>

            <div className="pt-3">
              {courseData.courseContent.map((chapter, idx) => (
                <div
                  key={idx}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    className="flex items-center justify-between px-4 cursor-pointer select-none"
                    onClick={() => toggleSections(idx)}
                  >
                    <div className="flex items-center py-3 gap-2">
                      <img
                        src={assets.down_arrow_icon}
                        alt="icon-down"
                        className={`transition-transform ${
                          openSections[idx] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="text-sm md:text-base">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-base flex">
                      {chapter.chapterContent.length} lectures
                      <span className="hidden md:flex">
                        - {calculatedChapterTime(chapter)}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden px-4 border-t border-gray-300 transition-all duration-300 ${
                      openSections[idx] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-3 py-3">
                      {chapter.chapterContent.map((lecture, idx) => (
                        <li key={idx} className="flex py-2 justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={assets.play_icon}
                              alt="play"
                              className="w-5"
                            />
                            <p className="font-semibold text-sm md:text-base">
                              {lecture.lectureTitle}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 text-sm md:text-base">
                            {lecture.isPreviewFree && (
                              <p
                                className="cursor-pointer hover:underline text-blue-500"
                                onClick={() =>
                                  setPlayerData({
                                    videoId: lecture.lectureUrl
                                      .split("/")
                                      .pop(),
                                  })
                                }
                              >
                                Preview
                              </p>
                            )}
                            <p className="text-sm text-end md:text-start">
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <h2 className="text-xl font-semibold">Course Description</h2>
              <p
                className="text-base rich-text"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              ></p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="z-2 w-full h-full flex justify-center">
          <div className="max-w-lg bg-white p-0 shadow-lg rounded-lg overflow-hidden">
            {playerData ? (
              <YouTube
                videoId={playerData.videoId}
                opts={{
                  playerVars: { autoplay: 1 },
                }}
                iframeClassName="w-full aspect-video"
              />
            ) : (
              <img
                src={courseData.courseThumbnail}
                alt="image"
                className="w-full"
              />
            )}
            <div className="p-7 pb-10">
              <div className="flex gap-2">
                <img src={assets.time_left_clock_icon} alt="" />
                <p className="text-amber-700 font-light">
                  <span className="font-semibold">5 Days</span> left at this
                  price!
                </p>
              </div>
              <div className="py-5 flex gap-3 items-center">
                <h1 className="font-semibold text-4xl md:text-4xl">
                  {currency}
                  {(
                    courseData.coursePrice -
                    (courseData.discount * courseData.coursePrice) / 100
                  ).toFixed(2)}
                </h1>
                <h2 className="text-gray-500 line-through">
                  {currency}
                  {courseData.coursePrice}
                </h2>
                <p className="font-light">{courseData.discount}% off</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs md:text-base">
                <div className="flex gap-2">
                  <img src={assets.star} alt="" />
                  <p className="text-black font-semibold">
                    {calculatedRatings(courseData)}
                  </p>
                </div>
                |
                <div className="flex gap-2 text-gray-500">
                  <img src={assets.time_clock_icon} alt="" />
                  <p>{calculatedCourseDuration(courseData)}</p>
                </div>
                |
                <div className="flex gap-2 text-gray-500">
                  <img src={assets.lesson_icon} alt="" />
                  <p>{calculatedNoOfLecture(courseData)} lessons</p>
                </div>
              </div>
              <button
                onClick={() => setIsEnroll(true)}
                className="cursor-pointer my-5 py-3 rounded-md text-white w-full bg-amber-500"
              >
                {isEnroll ? "Already Enrolled" : "Enroll Now"}
              </button>
              <h2 className="text-xl">What's in the course?</h2>
              <ul className="list-disc text-sm ml-10 mt-5 text-gray-500">
                <li>Lifetime access with free update.</li>
                <li>Step by step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}
