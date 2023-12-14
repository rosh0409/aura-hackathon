import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  if (!sessionStorage.getItem("auth")) {
    return (
      toast.error("Please login first", {
        duration: 2000,
        position: "bottom-right",
      }),
      (<Navigate to="/signin" />)
    );
  }
  return children;
};

export default ProtectedRoutes;
