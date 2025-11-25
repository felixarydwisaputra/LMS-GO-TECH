/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/student/Loading";

export default function StudentsEnrolled() {
  const [studentEnroll, setStudentEnroll] = useState(null);

  const fetchStudentEnroll = async () => {
    setStudentEnroll(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchStudentEnroll();
  }, []);

  return studentEnroll ? (
    <div className="px-10 py-3">
      <div className="max-w-4xl mt-5 rounded-md border border-gray-500/20">
        <table className="w-full table-auto text-gray-700">
          <thead className="border-b border-gray-300/60 rounded-xl overflow-hidden">
            <tr>
              <th className="px-5 py-3 text-start">#</th>
              <th className="px-5 py-3 text-start">Student Name</th>
              <th className="px-5 py-3 text-start">Course Title</th>
              <th className="px-5 py-3 text-start">Date</th>
            </tr>
          </thead>
          <tbody>
            {studentEnroll.map((student, idx) => (
              <tr key={idx}>
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="flex items-center gap-3 py-3 px-3">
                  <img
                    src={student.student.imageUrl}
                    alt="image"
                    className="w-10 shadow-lg rounded-full"
                  />
                  <span>{student.student.name}</span>
                </td>
                <td className="px-6 py-4">{student.courseTitle}</td>
                <td className="px-6 py-4">
                  {new Date(student.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
