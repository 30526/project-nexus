import React, { use } from "react";
import AuthContext from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = () => {
  const { user } = use(AuthContext);
  const location = useLocation();
  if (!user) return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};
export default PrivateRoute;
