import { useParams, Link, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function PaintingDetail(props){
    let { id } = useParams();
    const [painting, setPainting] = useState([]);
    const {refresh,setRefresh,paintings } = props;
    const history = useHistory();
    const [painter,setPainter] = useState('unknown')
    useEffect(() => {
      paintings.map((painting)=>painting.id==id ? setPainting(painting) : null) 
    }, []);
   
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/paintings/${id}`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => console.log("deleted!"));
        setRefresh(!refresh);
        history.push("/");
    }

    return (
    <div>
        <h2>{painting.name}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV2Crqe7QWazMMCEr2vfWQ4qEQlp6l2lJgQvEq78fHTd_odorw4kUpvsDsgdOupVw2iA&usqp=CAU"/>
        <p>Artist: {painter}</p>
        <p>location: {painting.location}</p>
        <p>medium: {painting.medium}</p>
        <p>Year created: {painting.year_created}</p>
        <Link to={`${painting.id}/edit`}><button>Edit</button></Link>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>)
}
export default PaintingDetail;