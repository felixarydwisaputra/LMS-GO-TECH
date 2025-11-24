import React from "react";
import Hero from "../../components/student/Hero";
import CoursesSection from "../../components/student/CoursesSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Hero />
        <CoursesSection />
      </div>
    </>
  );
}
