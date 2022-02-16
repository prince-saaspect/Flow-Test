import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./styles.css";

const ReachUs = () => (
  <div className="reach-us-container">
    <Helmet>
      <title>Reach Us | CompanyName</title>
      <meta name="description" content="" />
      <meta name="robots" content="index, archive" />
      <meta name="canonical" content={window.location.location + "/reach-us"} />
    </Helmet>
    <Header />
    <div style={{ height: "40vh" }}>
      <h2> ReachUs Page</h2>
    </div>
    <Footer />
  </div>
);

export default ReachUs;
