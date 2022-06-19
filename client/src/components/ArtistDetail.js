import { useParams, Link, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function ArtistDetail(){
    let { id } = useParams();
    const [artist,setArtist] = useState("");
    const [response, setResponse] = useState("Hi!")
    useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setArtist(data);
          });
      }, []);

      useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}/say_hi`)
          .then((response) => response.json())
          .then((data) => {
            console.log( data);
          });

      }, []);
    return (
    <div className="artist-detail">
        <h2>{artist.name}</h2>
        <img src="https://thumbs.dreamstime.com/b/cartoon-artist-boy-vector-illustration-36211596.jpg"/>
        <p>art movement: {artist.art_movement}</p>
        <p>birth place: {artist.birth_place}</p>
        <p>Birth date: {artist.birth_date}</p>
    </div>)
}
export default ArtistDetail;