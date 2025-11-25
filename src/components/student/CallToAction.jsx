import React from "react";

export default function CallToAction() {
  return (
    <div className="my-30 px-5 md:px-10 xl:px-30">
      <h1 className="text-6xl font-semibold text-center">
        Learn anything, anytime, anywhere
      </h1>
      <p className="w-[40vw] mx-auto mt-5 text-gray-500 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum
        numquam reiciendis corrupti minus ex ratione perspiciatis quam,
        mollitia, ducimus laborum unde, voluptatem perferendis! Architecto
        laborum consectetur accusantium repellat distinctio.
      </p>
      <div className="my-10 flex gap-3 w-full justify-center">
        <button className="cursor-pointer px-10 py-3 bg-black rounded-md text-white">
          Get Started
        </button>
        <button className="cursor-pointer px-10 py-3 rounded-md text-amber-500">
          Learn More <span className="text-xl ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
