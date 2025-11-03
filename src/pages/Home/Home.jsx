import React from "react";
import Slider from "../../components/Slider/Slider";

import PopularCourses from "../../components/PopularCourses/PopularCourses";
import TopRatedProvider from "../../components/TopRatedProvider/TopRatedProvider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <PopularCourses></PopularCourses>
      <TopRatedProvider></TopRatedProvider>
    </div>
  );
};

export default Home;
