import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingSection = () => {
  return (
    <div className="bg-blue-50 py-30">
      <div className=" mx-auto justify-items-center ">
        <h2 className="font-semibold text-4xl text-center mt-40 mb-10">
          Select Your Plan
        </h2>
      </div>
      <div className="p-4 md:p-0">
        <PricingCard></PricingCard>
      </div>
    </div>
  );
};

export default PricingSection;
