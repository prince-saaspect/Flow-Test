import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import { connect, useDispatch } from "react-redux";
import { get } from "lodash";
import { logoutRequest } from "../../store/actions/auth";

const Home = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  return (
    <div className="home-container">
      <Header />
      <div style={{ height: "40vh" }}>
        <h2>Home Page</h2>
        {isLoggedIn && (
          <button
            onClick={() => {
              dispatch(logoutRequest());
            }}
          >
            Logout
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: get(state, "auth.isLoggedIn", false),
  };
};

export default connect(mapStateToProps)(Home);
