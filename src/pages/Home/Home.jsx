import React from "react";
import Slider from "../../components/Slider/Slider";
import Card from "../../components/card/Card";
import useCourseData from "../../Hooks/useCourseData";
import PopularCourses from "../../components/PopularCourses/PopularCourses";

const Home = () => {
  console.log(useCourseData());
  return (
    <div className="">
      <Slider></Slider>
      <PopularCourses></PopularCourses>
    </div>
  );
};

export default Home;
