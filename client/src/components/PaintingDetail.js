import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function PaintingDetail(props){
    let { id } = useParams();
    const [painting, setPainting] = useState([]);
    const [painter,setPainter] = useState('unknown')
    useEffect(() => {
      fetch(`http://localhost:9292/paintings/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPainting(data);
          if (data.artist){
            setPainter(data.artist.name)
          }
        });
    }, []);
   

    return (
    <div>
        <h2>{painting.name}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV2Crqe7QWazMMCEr2vfWQ4qEQlp6l2lJgQvEq78fHTd_odorw4kUpvsDsgdOupVw2iA&usqp=CAU"/>
        <p>Artist: {painter}</p>
        <p>location: {painting.location}</p>
        <p>medium: {painting.medium}</p>
        <p>Year created: {painting.year_created}</p>
    </div>)
}
export default PaintingDetail;