import React from "react";
import useCourseData from "../../Hooks/useCourseData";

const TopRatedCard = ({ topCourse }) => {
  const [courseData, error, loading] = useCourseData();

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        Error: {error.message}
      </div>
    );
  }

  if (!courseData.length) {
    return (
      <div className="text-center text-gray-500 py-8">No courses found</div>
    );
  }

  // Find the top-rated course

  return (
    <div className="max-w-md bg-white rounded-xl  p-6 border border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={topCourse.image}
          alt={topCourse.providerName}
          className="w-14 h-14 rounded-full object-cover"
        />
        <h3 className="font-semibold text-gray-800 text-lg">
          {topCourse.providerName}
        </h3>
      </div>

      <p className="mt-4 text-gray-700 text-sm leading-relaxed">
        "{topCourse.description}"
      </p>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>Skill:</strong> {topCourse.skillName}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {topCourse.rating}
        </p>
      </div>
    </div>
  );
};

export default TopRatedCard;
