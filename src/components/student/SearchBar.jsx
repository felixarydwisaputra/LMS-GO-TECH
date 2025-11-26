import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const onSearchHandler = (e) => {
    console.log(input);

    e.preventDefault();
    navigate("/courses-list/" + input);
    setInput("");
  };

  return (
    <>
      <h1 className="hidden md:block text-base md:text-2xl mt-7 mb-2 md:mt-0 uppercase font-semibold text-center xl:text-start">
        Search for your courses here
      </h1>
      <form
        onSubmit={onSearchHandler}
        className="bg-white w-full flex items-center pl-5 pr-1 py-1 rounded-lg border border-gray-500"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-4 md:w-5"
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full px-5 focus:outline-0"
          placeholder="Search for courses"
        />
        <button
          type="submit"
          className="w-40 h-full bg-amber-500 text-white px-3 md:px-7 py-2 md:py-3 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>
    </>
  );
}
