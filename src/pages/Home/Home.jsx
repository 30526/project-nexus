import React from "react";
import Slider from "../../components/Slider/Slider";
import Card from "../../components/card/Card";
import useCourseData from "../../Hooks/useCourseData";

const Home = () => {
  console.log(useCourseData());
  return (
    <div className="">
      <Slider></Slider>
      <Card></Card>
    </div>
  );
};

export default Home;
