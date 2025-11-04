import React, { use, useState } from "react";
import { FaEnvelope, FaUser, FaCalendarAlt, FaBook } from "react-icons/fa";
import "animate.css";

import "aos/dist/aos.css";
import AuthContext from "../../provider/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  

  if (!user) {
    return (
      <div className="text-center p-10 text-gray-500 min-h-screen">
        No user data available
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="md:w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <div className="flex items-center p-6 bg-blue-600 text-white">
          <img
            src={user.photoURL || "https://i.pravatar.cc/150"}
            alt={user.name}
            className="w-20 h-20 rounded-full border-2 border-white mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <FaUser className="text-blue-600" />
            <span>Username: {user.displayName || "N/A"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-green-600" />
            <span>Member since: {user.memberSince || "Jan 2024"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaBook className="text-purple-600" />
            <span>Courses Enrolled: {user.coursesEnrolled || 0}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-600" />
            <span>Email: {user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
