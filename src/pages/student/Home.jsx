import React from "react";
import Hero from "../../components/student/Hero";
import CoursesSection from "../../components/student/CoursesSection";
import Testimonial from "../../components/student/Testimonial";
import CallToAction from "../../components/student/CallToAction";
import Helpers from "../../components/student/Helpers";
import Footer from "../../components/student/Footer";
import Companies from "../../components/student/Companies";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center">
        <Hero />
        <CoursesSection />
        <Testimonial />
        <CallToAction />
        <Helpers />
        <Footer />
      </div>
    </>
  );
}
