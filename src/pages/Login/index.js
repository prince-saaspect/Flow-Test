import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppleLogo from "../../assets/images/apple.svg";
import GoogleLogo from "../../assets/images/google.svg";
import FacebookLogo from "../../assets/images/facebook.svg";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { get } from "lodash";
import { connect, useDispatch } from "react-redux";
import { loginRequest } from "../../store/actions";
import { Formik } from "formik";
import { loginValidator } from "../../utils/validators";

const Login = ({ isLoading, isLoggedIn }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const submitHandler = (values, { setSubmitting }) => {
    dispatch(loginRequest(values));
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Login | Company Name</title>
        <meta name="description" content="" />
        <meta name="robots" content="index, archive" />
        <meta name="canonical" content={window.location.hostname + "/login"} />
      </Helmet>
      <Header />
      <section>
        <div className="login-form">
          <h1 className="login-heading">Login to Your Account</h1>
          <p className="login-description">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={loginValidator}
            onSubmit={submitHandler}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="login-form-container" onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="input-container">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </div>
                <p className="forget-password">Forget password?</p>
                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
          <div className="login-provider-container">
            <img src={AppleLogo} alt="Apple Login" />
            <img src={FacebookLogo} alt="Facebook Login" />
            <img src={GoogleLogo} alt="Google Login" />
          </div>
          <p className="signup-content">
            New to This Website? <Link to="/signup">Register</Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: get(state, "auth.loading", false),
    isLoggedIn: get(state, "auth.isLoggedIn", false),
    authErrors: get(state, "auth.error", {}),
  };
};

export default connect(mapStateToProps)(Login);
