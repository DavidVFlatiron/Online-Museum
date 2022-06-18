// src/components/Home.js
import React from "react";
import { Link } from 'react-router-dom';

function Home(props) {
  const { paintings } = props;
  return (<div>
    <h1>Welcome to the Museum!</h1>
    <Link to = {`paintings`}> <button>See paintings</button></Link>
  </div>)
}

export default Home;
