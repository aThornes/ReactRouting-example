import React from 'react';

function Login(props) {
  return (
    <div>
    <h1>Login page</h1>
    <button onClick={() => props.loginUser()}>Log in!</button>
    </div>
  );
}

export default Login;
