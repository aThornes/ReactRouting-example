import React from 'react';

function Home(props) {
  return (
    <div>
      <h1>Home page!</h1>
      <button onClick={() => props.logoutUser()}>Log out!</button>
    </div>
  );
}

export default Home;
