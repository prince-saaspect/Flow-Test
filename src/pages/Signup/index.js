import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AppleLogo from "../../assets/images/apple.svg";
import GoogleLogo from "../../assets/images/google.svg";
import FacebookLogo from "../../assets/images/facebook.svg";
import { connect, useDispatch } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import { signUpValidator } from "../../utils/validators";
import { signupRequest } from "../../store/actions";

const Signup = () => {
  const dispatch = useDispatch();

  const submitHandler = (values, { setSubmitting }) => {
    values.countryCode = "+91";
    dispatch(signupRequest(values));
    console.log("Signup Form Submitted");
    // alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <div className="signup-container">
      <Helmet>
        <title>SignUp |Company Name</title>
        <meta name="description" content="" />
        <meta name="robots" content="index, archive" />
        <meta name="canonical" content={window.location.location + "/signup"} />
      </Helmet>
      <Header />
      <section>
        <div className="signup-form">
          <h1 className="signup-heading">Sign Up</h1>
          <p className="signup-description">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              name: "",
              phone: "",
            }}
            validate={signUpValidator}
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
              <form className="signup-form-container" onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                </div>
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
                    type="phone"
                    placeholder="Contact Number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && (
                    <div className="input-feedback">{errors.phone}</div>
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
                <div className="input-container">
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </form>
            )}
          </Formik>
          <div className="signup-provider-container">
            <img src={AppleLogo} alt="Apple Login" />
            <img src={FacebookLogo} alt="Facebook Login" />
            <img src={GoogleLogo} alt="Google Login" />
          </div>
          <p className="login-content">
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
