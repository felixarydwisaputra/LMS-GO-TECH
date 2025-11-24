import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const onSearchHandler = (e) => {
    console.log(input);

    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <>
      <h1 className="text-2xl uppercase font-semibold">
        Search for your courses here....
      </h1>
      <form
        onSubmit={onSearchHandler}
        className="bg-white w-full flex items-center pl-5 pr-1 py-1 rounded-sm border border-gray-500"
      >
        <img src={assets.search_icon} alt="search_icon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full px-5 focus:outline-0"
          placeholder="Search for courses..."
        />
        <button
          type="submit"
          className="w-40 h-full bg-amber-500 text-white px-7 py-3 rounded-md"
        >
          Search
        </button>
      </form>
    </>
  );
}
