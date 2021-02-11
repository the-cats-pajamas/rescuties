import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from '../firebase/firebase'

export const PrivateRoute =  ({ component: Component, ...rest }) => {
  console.log('inside PrivateRoute', Component)
  return ( <Route
    {...rest}
    render={(props) => {
      // TODO: grab current user from Firebase instead 
      const currentUser =  Auth.currentUser;
      console.log('currentUser status', currentUser);
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
  )
};

export default PrivateRoute;
