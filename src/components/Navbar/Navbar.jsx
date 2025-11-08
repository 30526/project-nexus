import React from "react";
import Container from "../Container/Container";
import MyLinks from "../MyLinks/MyLinks";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import LoginBtnToggle from "../LoginBtnToggle/LoginBtnToggle";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm top-0 z-50">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-1"
              >
                <MyLinks to={"/"}>Home</MyLinks>
                <MyLinks to={"/allCourses"}>Courses</MyLinks>
                <MyLinks to={"/myProfile"}>Profile</MyLinks>
              </ul>
            </div>
            <NavLink to={"/"}>
              <div className="flex items-center gap-2">
                <img className="w-8" src={logo} alt="" />
                <span className="text-2xl font-bold hidden md:block">
                  Nexus
                </span>
              </div>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="gap-4 menu menu-horizontal px-1">
              <MyLinks to={"/"}>Home</MyLinks>
              <MyLinks to={"/allCourses"}>Courses</MyLinks>
              <MyLinks to={"/myProfile"}>Profile</MyLinks>
            </ul>
          </div>
          <div className="navbar-end">
            <LoginBtnToggle></LoginBtnToggle>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
