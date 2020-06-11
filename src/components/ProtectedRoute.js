import React from "react";
import { Route, Redirect } from "react-router-dom";

import Loading from "./Loading";

const ProtectedRoute = ({ loggedIn: isLoggedIn, loadedIn: isLoadedIn, render: RenderComponent, ...rest }) => {
  console.log("PROTECTED ROUTE. Logged in: ", isLoggedIn);
  return (
    /* Define the route*/
    <Route
      {...rest}
      /* Specify what to render*/
      render={
        props =>
        /* Confirm the page has been loaded, if not render loading screen*/
          !(isLoadedIn) ? (
            <Loading />
          ) : (
            /* Page is loaded, however check user is logged in*/
            (isLoggedIn) ? (
              /* User is logged in, therefore redirect to home screen*/
              <Redirect to={"/home"}/>
            ) : (
              /* User is NOT logged in, display passed component and pass through any props*/
              <RenderComponent {...props} />
            )
          )
      }
      />
  );
};

export default ProtectedRoute
