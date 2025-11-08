import React from "react";
import useCourseData from "../../Hooks/useCourseData";
import CourseCard from "../../components/CourseCard/CourseCard";
import Container from "../../components/Container/Container";
import LoadingPage from "../LoadingPage/LoadingPage";

const AllCourses = () => {
  const [courseData, loading] = useCourseData();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <Container>
      <div>
        <h2 className="text-center text-4xl font-bold my-10">
          All Available Courses
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4 mb-10 p-4 md:p-0">
        {courseData.map((data) => (
          <CourseCard key={data.skillId} data={data}></CourseCard>
        ))}
      </div>
    </Container>
  );
};

export default AllCourses;
