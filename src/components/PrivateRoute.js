import React from "react";
import { Route, Redirect } from "react-router-dom";

import Loading from "./Loading";

const PrivateRoute = ({ loggedIn: isLoggedIn, loadedIn: isLoadedIn, render: RenderComponent, ...rest }) => {

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
            !(isLoggedIn) ? (
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
