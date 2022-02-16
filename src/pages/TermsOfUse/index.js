import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const TermsOfUse = () => {
  return (
    <div>
      <Helmet>
        <title>Terms Of Use | Company Name</title>
        <meta name="description" content="" />
        <meta name="robots" content="index, archive" />
        <meta
          name="canonical"
          content={window.location.location + "/terms-of-use"}
        />
      </Helmet>
      <Header />
      <div style={{ height: "40vh" }}>
        <h2>Terms Of Use</h2>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
