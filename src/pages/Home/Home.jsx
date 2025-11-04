import React from "react";
import Slider from "../../components/Slider/Slider";

import PopularCourses from "../../components/PopularCourses/PopularCourses";
import TopRatedProvider from "../../components/TopRatedProvider/TopRatedProvider";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import PricingSection from "../../components/PricingSection/PricingSection";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <PopularCourses></PopularCourses>
      <TopRatedProvider></TopRatedProvider>
      <HowItWorks></HowItWorks>
      <PricingSection></PricingSection>
    </div>
  );
};

export default Home;
