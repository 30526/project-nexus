import React from "react";
import { NavLink } from "react-router";

const MyLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-linear-to-br from-[#1770ff] to-[#07c2f1fa] bg-clip-text text-transparent font-bold text-[16px]"
          : "font-semibold text-[16px]"
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
