import React, { use } from "react";
import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaBook,
  FaEdit,
} from "react-icons/fa";
import "animate.css";

import "aos/dist/aos.css";
import AuthContext from "../../provider/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  if (!user) {
    return (
      <div className="text-center p-10 text-gray-500 min-h-screen">
        No user data available
      </div>
    );
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const newName = name ? name : user.displayName;
    const photo = e.target.url.value;
    const newPhoto = photo ? photo : user.photoURL;
    updateUser({ displayName: newName, photoURL: newPhoto })
      .then(() =>
        setUser({ ...user, displayName: newName, photoURL: newPhoto })
      )
      .catch((error) => toast.error(error.message));
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="md:w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <div className=" p-6 bg-blue-600">
          <div className="flex items-center text-white">
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
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="absolute top-4 right-6 text-white cursor-pointer"
          >
            <FaEdit size={20} />
          </button>
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
      {/* modal  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-6">Update Profile</h3>

          <div>
            <form onSubmit={handleUpdateProfile}>
              <label className="label">Set Name</label> <br />
              <input
                className="input mb-3"
                type="text"
                name="name"
                placeholder={user.displayName}
              />
              <br />
              <label className="label">Photo Url</label> <br />
              <input className="input mb-6" type="url" name="url" /> <br />
              <button type="submit" className="btn bg-blue-600 text-white">
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
