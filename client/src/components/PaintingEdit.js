import { useState, useEffect } from 'react';
import { useParams, useHistory }from 'react-router-dom';

function PaintingEdit(props){
    let { id } = useParams();
    const [painting, setPainting] = useState([]);
    const { refresh, setRefresh } = props;
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [medium, setMedium] = useState("");
    const [yearCreated, setYearCreated] = useState("");
    const [artistId, setArtistId] = useState("");
    let history = useHistory();

    useEffect(() => {
      fetch(`http://localhost:9292/paintings/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPainting(data);
          setName(data.name);
          setLocation(data.location);
          setMedium(data.medium);
          setYearCreated(data.year_created);
          setArtistId(data.artist_id);
        });
    }, []);
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

      function handleUpdate(e,index) {

        const itemData = {
            name: name,
            location: location,
            medium: medium,
            year_created: yearCreated,
            artist_id: artistId
          };

        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "PATCH",
            headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
        .then((updatedItem) => console.log(updatedItem));
        setRefresh(!refresh);
        history.push(`/paintings/${painting.id}`)
      }
    


    return (<div className="painting-edit">
        <h2>Edit painting</h2>
        <form onSubmit = {handleUpdate}>
        <input type="text" placeholder = "name" value={name} onChange={handleNameChange} />
        <input type="text" placeholder = "location" value={location}  onChange={handleLocationChange} />
        <input type="text" placeholder = "medium" value={medium} onChange={handleMediumChange} />
        <input type="text" placeholder = "year created" value={yearCreated}  onChange={handleYearCreatedChange} />
        <input type="text" placeholder = "artist id" value={artistId}  onChange={handleArtistIdChange} />
        <button>Update</button>
      </form>
      </div>)
}
export default PaintingEdit;
