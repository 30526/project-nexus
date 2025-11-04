import React from "react";
import { GiCheckMark } from "react-icons/gi";

const PricingCard = () => {
  return (
    <div className="flex justify-center gap-4 pb-30 py-10 bg-blue-50">
      <div className="w-sm pb-15 bg-white h-fit translate-y-8">
        <div className="py-6">
          <h2 className="text-2xl font-bold my-5 text-center">
           Single learning program
          </h2>
          <p className="text-center mb-15">
           Learn a single topic or skill and earn a credential
          </p>
          <p className="text-4xl font-semibold text-center">
            $16-20/<span className="text-[22px]">month</span>
          </p>
          <div className="flex justify-center">
        
          </div>
          <p className="font-semibold text-xl text-center">Cancel Anytime</p>
        </div>
        <div className="border border-gray-200 mt-20 mb-10"></div>
        <div className="px-3 flex flex-col gap-6">
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
        </div>
      </div>
      <div className="w-sm h-fit pb-15 border-t-25 border-3 border-blue-600 relative bg-white ">
        <p className="absolute bottom-286 text-white font-bold translate-x-32">
          Most Popular
        </p>
        <div className="py-6">
          <h2 className="text-2xl font-bold my-5 text-center">
            Nexus Plus Monthly
          </h2>
          <p className="text-center mb-15">
            Complete multiple courses and earn credentials in the short term
          </p>
          <p className="text-4xl font-semibold text-center">
            $24/<span className="text-[22px]">month</span>
          </p>
          <div className="flex justify-center">
            <button className="my-6 py-4 rounded-xl cursor-pointer font-medium bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-25  border-none">
              Start 7-day free trial
            </button>
          </div>
          <p className="font-semibold text-xl text-center">Cancel Anytime</p>
        </div>
        <div className="border border-gray-200 mt-20 mb-10"></div>
        <div className="px-3 flex flex-col gap-6">
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
        </div>
      </div>
      <div className="w-sm  pb-15 bg-white h-fit translate-y-8">
        <div className="py-6">
          <h2 className="text-2xl font-bold my-5 text-center">
            Nexus Plus Annual
          </h2>
          <p className="text-center mb-15">
           Combine flexibility and savings with long-term learning goals
          </p>
          <p className="text-4xl font-semibold text-center">
            $120/<span className="text-[22px]">year</span>
          </p>
          <div className="flex justify-center">
            <button className="my-6 py-4 rounded-xl cursor-pointer font-medium border-1 text-blue-600 border-blue-600 text-blue px-12">
             Try Course Plan Annual
            </button>
          </div>
          <p className="font-semibold text-xl text-center">Cancel Anytime</p>
        </div>
        <div className="border border-gray-200 mt-20 mb-10"></div>
        <div className="px-3 flex flex-col gap-6">
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
          <div className="border border-gray-200"></div>
          <p className="flex gap-4">
            {" "}
            <span className="mt-1 text-blue-600">
              {" "}
              <GiCheckMark />
            </span>
            Access 10,000+ courses and Specializations from 170+ leading
            companies and universities
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
