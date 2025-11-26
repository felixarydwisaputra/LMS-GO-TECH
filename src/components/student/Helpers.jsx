import React from "react";

export default function Helpers() {
  return (
    <>
      <div className="w-full h-[50vh] 2xl:min-h-[80vh] overflow-hidden relative">
        <div className="absolute z-3 w-full h-full md:px-10 xl:px-30 flex items-center justify-center md:justify-start">
          <div className="lg:px-10 2xl:px-40 flex justify-center items-center">
            <h1 className="text-3xl md:text-6xl lg:text-8xl text-center md:text-start md:w-[70vw] uppercase text-white font-bold">
              "Small steps for{" "}
              <span className="text-amber-500">
                <br />
                big results.
              </span>
              " ~
            </h1>
          </div>
        </div>
        <div className="z-2 backdrop absolute top-0 left-0 right-0 bottom-0 bg-black/30 "></div>
        <img
          className="w-full h-full object-cover blur-[2px]"
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </>
  );
}
