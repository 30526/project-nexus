import React from "react";
import useCourseData from "../../Hooks/useCourseData";
import TopRatedCard from "../../components/TopRatedCard/TopRatedCard";
import Container from "../../components/Container/Container";
import SessionForm from "../../components/SessionForm/SessionForm";

const AllTopRatedCourses = () => {
  const [courseData] = useCourseData();

  const sortedData = [...courseData].sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 my-20 p-4 md:p-0">
          {sortedData.map((topCourse) => (
            <TopRatedCard
              key={topCourse.skillId}
              topCourse={topCourse}
            ></TopRatedCard>
          ))}
        </div>
      </Container>
      <div>
        <SessionForm></SessionForm>
      </div>
    </div>
  );
};

export default AllTopRatedCourses;
