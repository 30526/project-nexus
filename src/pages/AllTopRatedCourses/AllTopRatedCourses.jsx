import React from "react";
import useCourseData from "../../Hooks/useCourseData";
import TopRatedCard from "../../components/TopRatedCard/TopRatedCard";
import Container from "../../components/Container/Container";

const AllTopRatedCourses = () => {
  const [courseData] = useCourseData();

  const sortedData = [...courseData].sort((a, b) => b.rating - a.rating);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 my-20">
        {sortedData.map((topCourse) => (
          <TopRatedCard
            key={topCourse.skillId}
            topCourse={topCourse}
          ></TopRatedCard>
        ))}
      </div>
    </Container>
  );
};

export default AllTopRatedCourses;
