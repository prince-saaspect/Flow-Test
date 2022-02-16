import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NotFoundSvg from "../../assets/images/NotFound.svg";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div>
    <Header />
    <div
      style={{
        minHeight: "60vh",
      }}
      className="not-found-container"
    >
      <div
        style={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={NotFoundSvg} alt="Not Found" style={{ height: "30vh" }} />
        <p style={{ fontSize: "18px" }}>
          Looks like you are lost! Let's take you back to{" "}
          <Link to="/" style={{ color: "#9c2222" }}>
            home.
          </Link>
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default NotFound;
