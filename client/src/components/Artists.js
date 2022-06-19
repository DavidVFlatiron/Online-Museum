// src/components/Home.js
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Artists(props) {
  const { artists } = props;
  const [response,setResponse] = useState("no response")

  return (<div className="gallery">
    {artists.map((index)=> 
      <div className="paintings">
        <h2>{index.name}</h2>
        <img src="https://thumbs.dreamstime.com/b/cartoon-artist-boy-vector-illustration-36211596.jpg"/>
        <Link to={`artists/${index.id}`}><button>More Info</button></Link>
     </div>)}
  </div>)
}

export default Artists;
