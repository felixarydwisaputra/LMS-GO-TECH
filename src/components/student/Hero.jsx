import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
import Companies from "../../components/student/Companies";
import { AppContext } from "../../context/AppContext";

export default function Hero() {
  return (
    <>
      <div className="w-full min-h-screen flex px-50 items-center bg-linear-to-b from-amber-100/80 to bg-white">
        <div className="w-1/2 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold">
            Empower your future with the courses designed to{" "}
            <span className="text-amber-500 block">fit your choice.</span>
            <img src={assets.sketch} alt="" />
          </h1>
          <p className="text-lg text-gray-500 my-8">
            We bring together world-class instructors, interactive content, and
            a supportive community to help you achieve your personal and
            professional goals.
          </p>
          <Companies />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center gap-5 px-20">
          <SearchBar />
        </div>
      </div>
    </>
  );
}
