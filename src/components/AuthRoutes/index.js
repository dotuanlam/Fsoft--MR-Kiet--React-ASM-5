import React from "react";
import { Outlet, Navigate } from "react-router";
const index = () => {
  const Token = localStorage.getItem("Token");
  return (
    <>{Token === "true" ? <Navigate to="/" replace />: <Outlet/>}</>
  );
};

export default index;