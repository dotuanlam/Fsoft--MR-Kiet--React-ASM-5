import React from "react";
import { Outlet, Navigate } from "react-router";
const index = () => {
  const Token = localStorage.getItem("Token");
  return (
    <>{Token === "true" ? <Outlet /> : <Navigate to="/login" replace />}</>
  );
};

export default index;
