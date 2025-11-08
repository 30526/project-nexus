import React from "react";
import useCourseData from "../../Hooks/useCourseData";
import Container from "../Container/Container";
import CourseCard from "../CourseCard/CourseCard";
import person from "../../assets/Coursera.jpeg";
import { Link } from "react-router";

const PopularCourses = () => {
  const [courseData] = useCourseData();
  const slicedCourseData = courseData.slice(0, 6);

  return (
    <Container>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4 my-30">
        <div className="md:col-span-4 p-4 md:p-0">
          <h2
            className=" text-4xl font-bold mb-18 bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-transparent bg-clip-text
          text-center md:text-left"
          >
            Popular Courses
          </h2>
          <img className="mb-3 w-80 mx-auto md:w-100" src={person} alt="" />
          <h3 className="text-3xl font-bold">
            Discover Your Next Skill Journey
          </h3>
          <p className="my-5">
            Explore trending courses and boost your skills with top-rated
            instructors.
          </p>
          <Link to={"/allCourses"}>
            <button className="btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-8 border-none">
              See All Courses
            </button>
          </Link>
        </div>
        <div className="md:col-span-8">
          <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 p-4 md:p-0">
            {slicedCourseData.map((data) => (
              <CourseCard key={data.skillId} data={data}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularCourses;
