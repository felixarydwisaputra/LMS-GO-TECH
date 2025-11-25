/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";

export default function RatingStar({ intialRating, onRate }) {
  const [rating, setRating] = useState(intialRating || 0);
  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (intialRating) {
      setRating(intialRating);
    }
  }, [intialRating]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, idx) => {
        const startValue = idx + 1;
        return (
          <span
            key={idx}
            className={`text-3xl cursor-pointer transition-colors ${
              startValue <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => handleRating(startValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
