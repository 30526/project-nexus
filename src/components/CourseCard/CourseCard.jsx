import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const CourseCard = ({ data }) => {
  const { skillName, image, rating, price } = data;

  const renderStars = (value) => {
    const stars = [];
    const full = Math.floor(value);
    const hasHalf = value - full >= 0.5;

    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={`f-${i}`} className="inline-block" />);
    }
    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="inline-block" />);
    }
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
      stars.push(<FaRegStar key={`e-${i}`} className="inline-block" />);
    }
    return stars;
  };

  return (
    <article
      aria-labelledby={`skill-${data.skillId}-title`}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
    >
      <div className="relative">
        <img src={image} alt={skillName} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-white rounded-full px-3 py-1 text-sm font-semibold backdrop-blur">
          ${price}
        </div>
      </div>
      <div className="p-4">
        <h3
          id={`skill-${data.skillId}-title`}
          className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2"
        >
          {skillName}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-yellow-400">
            <div className="flex items-center text-sm">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
              {rating.toFixed(1)}
            </span>
          </div>
          <button
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-[#1770ff] to-[#07c2f1fa] text-white text-sm font-medium shadow hover:brightness-95
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1770ff]/60 cursor-pointer"
            aria-label={`View details for ${skillName}`}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
