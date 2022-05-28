import { replace } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { object } from "yup";
import "./SCSS/SignIn.scss";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChanged = (e) => {
    setName(e.target.value);
  };
  localStorage.setItem("Token", false);
  const handlePassWordChanged = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    const account = { ...localStorage };
    const keys = Object.keys(account);
    const values = Object.values(account);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === name && values[i] === password) {
        console.log(true);
        localStorage.setItem("Token", true);
        return navigate("/");
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
          <input onChange={handlePassWordChanged} type="password" />
        </div>
        <div className="btn-sign-in">
          <button onClick={() => onLogin(name)} type="submit">
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
