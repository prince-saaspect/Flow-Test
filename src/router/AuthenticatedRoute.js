import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({
  routeComponent: RouteComponent,
  isLoggedIn,
  location,
  redirectPath = "/login",
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default AuthenticatedRoute;
