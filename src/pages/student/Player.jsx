import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import { Rating } from "react-simple-star-rating";
import RatingStar from "../../components/student/Rating";

export default function Player() {
  const { userEnrollCourses, calculatedChapterTime, navigate } =
    useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [openSections, setOpenSections] = useState(false);
  const is = false;

  const getDataUserCourse = () => {
    userEnrollCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  };

  const toggleSections = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    getDataUserCourse();
  });

  return (
    <>
      <div className="flex max-lg:flex-col-reverse w-full min-h-[70vh] items-start justify-between px-10 xl:px-30 2xl:px-50 max-sm:py-5 max-sm:pb-10 py-20 relative gap-10">
        {/* kiri side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold">Course Structure</h2>
          <div className="pt-3">
            {courseData &&
              courseData.courseContent.map((chapter, idx) => (
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
                      <p className="text-sm">{chapter.chapterTitle}</p>
                    </div>
                    <p className="max-sm:text-xs flex">
                      {chapter.chapterContent.length} lectures
                      <span className="hidden lg:flex">
                        - {calculatedChapterTime(chapter)}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden px-4 border-t border-gray-300 transition-all duration-300 ${
                      openSections[idx] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="md:pl-3 py-3">
                      {chapter.chapterContent.map((lecture, indx) => (
                        <li key={indx} className="flex py-2 justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={assets.play_icon}
                              alt="play"
                              className="w-5"
                            />
                            <p className="font-semibold max-sm:text-sm">
                              {lecture.lectureTitle}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            {lecture.lectureUrl && (
                              <p
                                className="cursor-pointer hover:underline text-blue-500"
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture,
                                    chapter: idx + 1,
                                    lecture: indx + 1,
                                  })
                                }
                              >
                                Watch
                              </p>
                            )}
                            <p className="text-xs md:text-base text-wrap">
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
          <div className="mt-10 flex gap-3 items-center">
            <h3 className="font-semibold text-xl">Rate this course :</h3>
            <RatingStar intialRating={0} />
          </div>
        </div>

        {/* kanan side */}
        <div className="w-full lg:w-1/2">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                opts={{
                  playerVars: { autoplay: 1 },
                }}
                iframeClassName="w-full aspect-video"
              />
              <div className="flex items-center justify-between mt-3">
                <h2 className="text-3xl">
                  {playerData.chapter}.{playerData.lecture}{" "}
                  {playerData.lectureTitle}
                </h2>
                <button className="cursor-pointer  px-3 py-1.5 bg-green-600 text-white rounded">
                  {is ? "Completed" : "Mark Complete"}
                </button>
              </div>
            </div>
          ) : (
            <img
              src={courseData && courseData.courseThumbnail}
              alt="thumbnail"
              className="w-full"
            />
          )}
        </div>
        <div
          className="flex items-center gap-2 z-10 -mb-5 text-gray-400"
          onClick={() => navigate(-1)}
        >
          <img src={assets.arrow_icon} className="rotate-180 opacity-50" />
          <p>Back</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
