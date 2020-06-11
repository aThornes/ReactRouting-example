import React from "react";
import { Route, Redirect } from "react-router-dom";

import Loading from "./Loading";

const PrivateRoute = ({ loggedIn: isLoggedIn, loadedIn: isLoadedIn, render: RenderComponent, ...rest }) => {
  let loggedState = isLoggedIn;
  console.log("PRIVATE ROUTE. Logged in: ", loggedState);

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
            !(loggedState) ? (
              /* User is not logged in, therefore redirect to login screen*/
              <Redirect to={"/login"}/>
            ) : (
              /* User is logged in, display passed component and pass through any props*/
              <RenderComponent {...props} />
            )
          )
      }
      />
  );
};

export default PrivateRoute
