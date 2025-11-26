import React from "react";
import { Outlet, Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollment from "./pages/student/MyEnrollment";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";
import "quill/dist/quill.snow.css";

export default function App() {
  const isEducatorPage = useMatch("/educator/*");

  return (
    <>
      <div className="min-h-screen bg-white relative">
        {!isEducatorPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses-list" element={<CoursesList />} />
          <Route path="/courses-list/:input" element={<CoursesList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollment />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />
          <Route path="/educator" element={<Educator />}>
            <Route index element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="student-enrolled" element={<StudentsEnrolled />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
