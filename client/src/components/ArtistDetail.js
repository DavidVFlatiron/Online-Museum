import { useParams, Link, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function ArtistDetail(props){
    const { artists} = props;
    let { id } = useParams();
    const [artist,setArtist] = useState("");
    const [response, setResponse] = useState("Hi!")

    useEffect(() => {
      artists.map((artist)=>artist.id==id ? setArtist(artist) : null) 
    }, []);

      useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}/say_hi`)
          .then((response) => response.json())
          .then((data) => {
            setResponse(data.message);
          });

      }, []);
      function sayHi(){
        alert(response);
      }
    return (
    <div className="artist-detail">
        <h2>{artist.name}</h2>
        <img src="https://thumbs.dreamstime.com/b/cartoon-artist-boy-vector-illustration-36211596.jpg"/>
        <p>art movement: {artist.art_movement}</p>
        <p>birth place: {artist.birth_place}</p>
        <p>Birth date: {artist.birth_date}</p>
        <button onClick={sayHi}>Say Hi</button>
    </div>)
}
export default ArtistDetail;