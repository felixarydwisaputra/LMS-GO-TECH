import { assets, dummyTestimonial } from "../../assets/assets";

export default function Testimonial() {
  return (
    <div className="my-30 px-5 md:px-10 xl:px-30 2xl:px-70">
      <h2 className="text-4xl font-semibold text-center">Testimonials</h2>
      <p className="lg:w-[40vw] mx-auto mt-5 text-gray-500 text-center">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 my-20">
        {dummyTestimonial.map((testimonal, idx) => (
          <div key={idx} className="shadow-lg rounded-md overflow-hidden">
            <div className="flex items-center bg-gray-300/30 p-7 gap-5">
              <img className="w-12" src={testimonal.image} alt="img-profile" />
              <div>
                <h2>{testimonal.name}</h2>
                <p className="text-xs text-gray-400">{testimonal.role}</p>
              </div>
            </div>
            <div className="p-7">
              <p className="flex">
                {[...Array(5)].map((_, idx) => (
                  <img
                    key={idx}
                    className="w-4"
                    src={
                      idx < Math.floor(testimonal.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                  ></img>
                ))}
              </p>
              <p className="my-4 text-gray-400">{testimonal.feedback}</p>
              <button className="mt-5 text-blue-500 underline cursor-pointer">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
