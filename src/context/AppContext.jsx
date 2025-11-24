/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();
const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [isEducator, setIsEducator] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  const calculatedRatings = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  const fetchDataArray = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchDataArray();
  });

  const value = {
    currency,
    allCourses,
    navigate,
    calculatedRatings,
    isEducator,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
