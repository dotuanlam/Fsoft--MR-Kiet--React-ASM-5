import React from "react";
import ReactDOM from "react-dom/client";
import Sigin from "./components/Sigin";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp/index.js";
import PrivateRoute from "./components/PrivateRoutes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Sigin />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
