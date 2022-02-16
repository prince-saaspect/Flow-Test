import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import ReachUs from "../pages/ReachUs";
import TermsOfUse from "../pages/TermsOfUse";
import { get } from "lodash";
import { connect } from "react-redux";
import AuthenticatedRoute from "./AuthenticatedRoute";
import NotFound from "../pages/NotFound";

const Router = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/reach-us" component={ReachUs} />
      <Route path="/terms-of-use" component={TermsOfUse} />

      <AuthenticatedRoute
        path="/login"
        isLoggedIn={!isLoggedIn}
        routeComponent={Login}
        exact={true}
        redirectPath="/"
      />

      <AuthenticatedRoute
        path="/signup"
        isLoggedIn={!isLoggedIn}
        routeComponent={Signup}
        exact={true}
        redirectPath="/"
      />
      {/* Sample to create AuthenticatedRoute */}
      {/* <AuthenticatedRoute
        path="/profile"
        isLoggedIn={isLoggedIn}
        routeComponent={Profile}
        exact={true}
      /> */}

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: get(state, "auth.isLoggedIn", false),
  };
};

export default connect(mapStateToProps)(Router);
