import React, { use } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const LoginBtnToggle = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((error) => toast.error(error.message));
  };

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg  bg-linear-to-br from-[#1770ff] to-[#07c2f1fa]"></span>
    );
  }
  return (
    <div>
      {user ? (
        <>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-2"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-8 border-none"
          >
            Log Out
          </button>
        </>
      ) : (
        <Link
          to={"/login"}
          className="btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-8 border-none"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginBtnToggle;
