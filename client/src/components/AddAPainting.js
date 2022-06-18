// src/components/Login.js
import React, { useState} from 'react';
import { useHistory } from "react-router-dom";


function AddAPainting(props) {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [medium, setMedium] = useState("");
  const [yearCreated, setYearCreated] = useState("");
  const [artistId, setArtistId] = useState("");
  let history = useHistory();
  const {setRefresh, refresh} = props;

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
  function handleMediumChange(event) {
    setMedium(event.target.value);
  }
  function handleYearCreatedChange(event) {
    setYearCreated(event.target.value);
  }
  function handleArtistIdChange(event) {
    setArtistId(event.target.value);
  }

  function handleSubmit(e) {
    // e.preventDefault();
    const itemData = {
      name: name,
      location: location,
      medium: medium,
      year_created: yearCreated,
      artist_id: artistId
    };

    fetch("http://localhost:9292/paintings", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          },
      body: JSON.stringify(itemData),
    })
    .then((r) => r.json())
   .then((newItem) => console.log(newItem));

      // changing refresh triggers another api call in components/app.js
      setRefresh(!refresh);

      // Can't use Link on a submit button 
      history.push("/");
  }


  return (
    <div className="add-a-painting">
      <h1>Add a Painting</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder = "name" value={name} onChange={handleNameChange} />
        <input type="text" placeholder = "location" value={location}  onChange={handleLocationChange} />
        <input type="text" placeholder = "medium" value={medium} onChange={handleMediumChange} />
        <input type="text" placeholder = "year created" value={yearCreated}  onChange={handleYearCreatedChange} />
        <input type="text" placeholder = "artist id" value={artistId}  onChange={handleArtistIdChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddAPainting;
