// src/components/Home.js
import React from "react";
import { Link } from 'react-router-dom';

function Paintings(props) {
  const { paintings } = props;
  return (<div className="gallery">
    {paintings.map((index)=> 
      <div className="paintings">
        <h2>{index.name}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV2Crqe7QWazMMCEr2vfWQ4qEQlp6l2lJgQvEq78fHTd_odorw4kUpvsDsgdOupVw2iA&usqp=CAU"/>
        <Link to = {`paintings/${index.id}`}> <button>More info</button></Link>
     </div>)}
  </div>)
}

export default Paintings;
