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
    return <span className="loading loading-dots loading-lg  bg-linear-to-br from-[#1770ff] to-[#07c2f1fa]"></span>;
  }
  return (
    <div>
      {user ? (
        <button
          onClick={handleSignOut}
          className="btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-8 border-none"
        >
          Log Out
        </button>
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
