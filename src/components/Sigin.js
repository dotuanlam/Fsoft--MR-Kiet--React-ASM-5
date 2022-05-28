import { replace } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";

import "./SCSS/SignIn.scss";

const Login = () => {
  const navigate = useNavigate();
  localStorage.setItem("Token", false);
  const account = { ...localStorage };
  const nameInLocal = Object.keys(account);
  const passwordInLocal = Object.values(account);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChanged = (e) => {
    setName(e.target.value);
  };
  const handlePassWordChanged = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    for (let i = 0; i < nameInLocal.length; i++) {
      if (name === nameInLocal[i] && password === passwordInLocal[i]) {
        localStorage.setItem("Token", true);
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="form-input">
        <div className="logo-login">
          <img
            alt="avatar login"
            src="https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          ></img>
        </div>
        <div className="input-name">
          <label>User Name</label>
          <input onChange={handleNameChanged} autoFocus type="text" />
        </div>
        <div className="input-password">
          <label>Password</label>
          <input onChange={handlePassWordChanged} type="text" />
        </div>
        <div className="btn-sign-in">
          <button onClick={onLogin} type="submit">
            Sign in
          </button>
        </div>
        <div className="text-create-accout">
          <a onClick={() => navigate("/signup")}>Create new account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
