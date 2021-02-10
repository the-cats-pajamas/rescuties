import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthenticationService } from "../jwt/_services";
import { Auth } from '../firebase'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // TODO: grab current user from Firebase instead 
      const currentUser = Auth.signedInCurrentUser();
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{
              pathname: "/authentication/login",
              state: { from: props.location },
            }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
