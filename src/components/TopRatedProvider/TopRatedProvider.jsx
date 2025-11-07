import React from "react";
import useCourseData from "../../Hooks/useCourseData";
import TopRatedCard from "../TopRatedCard/TopRatedCard";
import Container from "../Container/Container";
import { Link } from "react-router";

const TopRatedProvider = () => {
  const [courseData] = useCourseData();
  const sortedData = [...courseData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="p-4 bg-blue-50">
      <Container>
        <div className="mb-20">
          <h2 className="text-2xl font-semibold  mt-20 mb-10">
            The Courses and the Instructors That are Rated top By the Learners.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          {sortedData.map((topCourse, i) => (
            <TopRatedCard key={i} topCourse={topCourse}></TopRatedCard>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to={"/topRatedCourses"}>
            <button className="border border-blue-600/80 py-2 px-6 bg-white rounded-lg font-semibold text-blue-600/80 text-xs cursor-pointer">
              Show All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopRatedProvider;
