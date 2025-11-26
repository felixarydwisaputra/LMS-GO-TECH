import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Quill from "quill";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import uniqid from "uniqid";

export default function AddCourse() {
  const { currency } = useContext(AppContext);
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitile: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name: ");
      if (title) {
        const newsChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chpaterOrder + 1 : 1,
        };
        setChapters([...chapters, newsChapter]);
      }
    } else if (action === "remove") {
      setChapters(
        chapters.filter((chapter) => chapter.chapterId !== chapterId)
      );
    } else if (action === "toggle") {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitile: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // initial quill editor
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="p-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex xl:flex-row flex-col gap-10"
      >
        <div className="flex-1">
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="course_title" className="font-semibold">
              Course Title
            </label>
            <input
              onChange={(e) => setCourseTitle(e.target.value)}
              value={courseTitle}
              type="text"
              name="course_title"
              id="course_title"
              className="px-4 py-3 border border-gray-400 rounded"
              placeholder="Type here..."
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="editor" className="font-semibold mb-3">
              Course Description
            </label>
            <div ref={editorRef} required></div>
          </div>
          <div className="flex max-sm:gap-2 gap-5 mb-5">
            <div className="w-1/2 flex flex-col gap-3">
              <label htmlFor="course_price">Course Price ({currency})</label>
              <input
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                min={0}
                type="number"
                placeholder="0"
                className="px-4 py-3 border border-gray-400 rounded"
                required
              />
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <label htmlFor="course_price">Discount (%)</label>
              <input
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                min={0}
                type="number"
                placeholder="0"
                className="px-4 py-3 border border-gray-400 rounded"
                required
              />
            </div>
          </div>
          {/* Chapters */}
          <div>
            {chapters.map((chapter, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 rounded-lg mb-4"
              >
                <div className="flex items-center px-4 py-3 justify-between border-b border-gray-300">
                  <div className="flex items-center">
                    <img
                      onClick={() => handleChapter("toggle", chapter.chapterId)}
                      src={assets.dropdown_icon}
                      width={14}
                      alt=""
                      className={`mr-2 cursor-pointer transition-all ${
                        chapter.collapsed && "-rotate-90"
                      }`}
                    />
                    <span className="font-semibold">
                      {idx + 1} {"  "}
                      {chapter.chapterTitle}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    {chapter.chapterContent.length} Lectures
                  </span>
                  <img
                    onClick={() => handleChapter("remove", chapter.chapterId)}
                    src={assets.cross_icon}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
                {!chapter.collapsed && (
                  <div className="p-4">
                    {chapter.chapterContent.map((lecture, Lidx) => (
                      <div
                        key={Lidx}
                        className="flex justify-between items-center mb-2"
                      >
                        <span>
                          {Lidx + 1} {lecture.lectureTitile} -{" "}
                          {lecture.lectureDuration} mins -{" "}
                          <a
                            href={lecture.lectureUrl}
                            target="_blank"
                            className="text-blue-500"
                          >
                            Link
                          </a>{" "}
                          - {lecture.isPreviewFreen ? "Free Preview" : "Paid"}
                        </span>
                        <img
                          onClick={() =>
                            handleLecture("remove", chapter.chapterId, Lidx)
                          }
                          src={assets.cross_icon}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    ))}
                    <div
                      onClick={() => handleLecture("add", chapter.chapterId)}
                      className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"
                    >
                      + Add Lecture
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div
              onClick={() => handleChapter("add")}
              className="flex justify-center items-center bg-amber-100 p-2
             rounded-lg cursor-pointer"
            >
              + Add Chapter
            </div>
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50">
                <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
                  <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>
                  <div className="mb-2">
                    <p>Lecture Title</p>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded py-1 px-2"
                      value={lectureDetails.lectureTitile}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureTitile: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <p>Lecture Duration</p>
                    <input
                      type="number"
                      className="mt-1 block w-full border rounded py-1 px-2"
                      value={lectureDetails.lectureDuration}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureDuration: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <p>Lecture URL</p>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded py-1 px-2"
                      value={lectureDetails.lectureUrl}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          lectureUrl: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex gap-2 my-4">
                    <p>Is Preview Free?</p>
                    <input
                      type="checkbox"
                      className="mt-1 scale-125"
                      checked={lectureDetails.isPreviewFree}
                      onChange={(e) =>
                        setLectureDetails({
                          ...lectureDetails,
                          isPreviewFree: e.target.checked,
                        })
                      }
                    />
                  </div>
                  <button
                    onClick={addLecture}
                    type="button"
                    className="w-full bg-blue-400 text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                  <img
                    src={assets.cross_icon}
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 w-4 cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-black cursor-pointer text-white w-max py-2.5 px-8 rounded my-4"
          >
            Add Course
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label htmlFor="" className="font-semibold">
            Course Thumbnail
          </label>
          <div
            className={`${
              image ? "border border-gray-400 rounded" : "bg-blue-500 py-3 px-3"
            } w-fit rounded flex justify-center`}
          >
            <label htmlFor="image_thumbnail">
              <img
                src={!image && assets.file_upload_icon}
                alt=""
                className="w-7 cursor-pointer"
              />
              <input
                type="file"
                id="image_thumbnail"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
              <img src={image && URL.createObjectURL(image)} />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
