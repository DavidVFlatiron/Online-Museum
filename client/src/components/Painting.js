// src/components/Home.js
import React from "react";

function Painting(props) {
  const { paintings } = props;
  return (<div className="gallery">
    {paintings.map((index)=> 
      <div className="paintings">
        <h2>{index.name}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV2Crqe7QWazMMCEr2vfWQ4qEQlp6l2lJgQvEq78fHTd_odorw4kUpvsDsgdOupVw2iA&usqp=CAU"/>
        <p>Artist: {index.artist_id}</p>
        <p>location: {index.location}</p>
        <p>medium: {index.medium}</p>
        <p>Year created: {index.year_created}</p>
        <button>More info</button>
     </div>)}
  </div>)
}

export default Painting;
