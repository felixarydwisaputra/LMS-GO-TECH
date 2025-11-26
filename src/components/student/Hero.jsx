import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
import Companies from "../../components/student/Companies";
import { AppContext } from "../../context/AppContext";

export default function Hero() {
  return (
    <>
      <div className="w-full lg:min-h-screen flex lg:flex-row flex-col mb-30 lg:mb-0 px-10 xl:px-30 2xl:px-50 items-center bg-linear-to-b from-amber-100/80 to-white ">
        <div className="w-full h-full flex flex-col justify-center mt-10 md:mt-30 lg:-mt-40">
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl text-center lg:text-start font-bold relative">
            Empower your future with the courses designed to{" "}
            <span className="text-amber-500 block">fit your choice.</span>
            <img src={assets.sketch} alt="" className="hidden md:absolute" />
          </h1>
          <div className="hidden md:flex lg:hidden w-full lg:w-1/2 h-full flex-col justify-center gap-5 md:px-20 my-12 lg:-mt-40">
            <SearchBar isHero={false} />
          </div>
          <p className="text-center lg:text-start text-xs md:text-xl text-gray-500 mt-5 lg:mt-6">
            We bring together world-class instructors, interactive content, and
            a supportive community to help you achieve your personal and
            professional goals.
          </p>
          <Companies />
        </div>
        <div className="md:hidden xl:flex w-full xl:h-screen flex-col justify-center gap-5 mt-10 xl:-mt-40 xl:px-5">
          <SearchBar isHero={true} />
        </div>
      </div>
    </>
  );
}
