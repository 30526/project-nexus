import React, { use } from "react";
import Container from "../Container/Container";
import MyLinks from "../MyLinks/MyLinks";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import AuthContext from "../../provider/AuthContext";

const Navbar = () => {
  const getContext = use(AuthContext);

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <Container>
        <div className="flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <MyLinks to={"/"}>
                  <li>Home</li>
                </MyLinks>
                <MyLinks to={"myProfile"}>
                  <li>My Profile</li>
                </MyLinks>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-8" src={logo} alt="" />
              <NavLink to={"/"}>
                <span className="text-2xl font-bold ">Nexus</span>
              </NavLink>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="gap-4 menu menu-horizontal px-1">
              <MyLinks to={"/"}>Home</MyLinks>
              <MyLinks to={"myProfile"}>My Profile</MyLinks>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <Link
              to={"/login"}
              className="btn bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] text-white px-8 border-none"
            >
              Login
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
