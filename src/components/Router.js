import React from "react";

///****** Routing ******///
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';

///****** Components ******///
import Home from "./Home";
import Login from "./Login";
import Data from "./Data";
import NotFound from "./NotFound";

class AppRouter extends React.Component {
    constructor(props, context){
    super(props, context);
    this.state={
      loggedIn: null,
      loadedIn: false
    }
  }

  logInUser = () => {
    this.setState({
      loggedIn: true
    })
    /* push state to local history (of course a real login wouldn't be this simple)*/
    localStorage.setItem('loggedInState', true);
  }

  logoutUser = () => {
    this.setState({
      loggedIn: false
    })
    localStorage.setItem('loggedInState', false);
  }

componentDidMount(){
  let loggedState = (localStorage.getItem('loggedInState') === 'true');

  this.setState({
    loggedIn: loggedState,
    loadedIn: true
  });
}


  render(){

    /* Basic Routing example - All pages accessible via their path. If a path
         without a route available is found, the NotFound component will be
         rendered
    */
    // return(
    //     <Router>
    //       <Switch>
    //         <Route exact path ="/"> { <Redirect to={"/home"} />} </Route>
    //         <Route path="/home" component={Home} />
    //         <Route path="/login" component={Login} />
    //         <Route path="/data" component={Data} />
    //         <Route component={NotFound} />
    //       </Switch>
    //     </Router>
    // );
    const {loggedIn, loadedIn} = this.state;
    return(
        <Router>
          <Switch>
            <Route exact path ="/"> { <Redirect to={"/home"} />} </Route>
            {/* Protected route only allows access if you are NOT logged in!*/}
            <ProtectedRoute
            path="/login"
            loggedIn={loggedIn}
            loadedIn={loadedIn}
            render={ () => <Login loginUser={this.logInUser}/>}
            />
            {/* Private route only allows access if you are logged in!*/}
            <PrivateRoute
            path="/home"
            loggedIn={loggedIn}
            loadedIn={loadedIn}
            render={ () => <Home logoutUser={this.logoutUser}/>}
            />
            <PrivateRoute
            path="/data"
            loggedIn={loggedIn}
            loadedIn={loadedIn}
            render={ () => <Data />}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}

export default AppRouter
