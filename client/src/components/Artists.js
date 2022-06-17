// src/components/Home.js
import React from "react";

function Artists(props) {
  const { artists } = props;
  return (<div className="gallery">
    {artists.map((index)=> 
      <div className="paintings">
        <h2>{index.name}</h2>
        <img src="https://thumbs.dreamstime.com/b/cartoon-artist-boy-vector-illustration-36211596.jpg"/>
        <p>art movement: {index.art_movement}</p>
        <p>birth place: {index.birth_place}</p>
        <p>Birth date: {index.birth_date}</p>
        <button>More info</button>
     </div>)}
  </div>)
}

export default Artists;
