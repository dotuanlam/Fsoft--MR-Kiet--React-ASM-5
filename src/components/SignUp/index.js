// Helper styles for demo
import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "./index.scss";

const App = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            "Must Contain  One Uppercase, One Lowercase and Not WhiteSpace"
          )
          .min(3, "Too Short!")
          .max(15, "To Long!")
          .required("Required"),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          )
          .max(15, "To Long!")
          .min(6, "Too Short!")
          .required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        const handleAddingNewAccount = () => {
          if (props.errors.email !== null && props.errors.password !== null) {
            localStorage.setItem(props.values.email, props.values.password);
          }
        };

        return (
          <div className="container-form-signup">
            <form className="wrapper-form-signup" onSubmit={handleSubmit}>
              <div className="form-signup">
                <img src="https://i.pinimg.com/564x/fb/a7/06/fba7061e7e36d9b9efdf4d421d17b94a.jpg" />
                <div className="form-input">
                  <label>
                    Name *
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      border={touched.email && errors.email && "1px solid red"}
                      type="text"
                      name="email"
                      placeholder="Name"
                    />
                  </label>
                  {touched.email && errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                  <label>
                    Password *
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      border={
                        touched.password && errors.password && "1px solid red"
                      }
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </label>
                  {touched.password && errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>
                <button
                  className="btn-signup"
                  onClick={handleAddingNewAccount}
                  type="submit"
                >
                  SignUp
                </button>
                <div className="link-signin">
                  <Link to="/login">Signin</Link>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  </div>
);

export default App;
