// src/components/App.js
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AddAPainting from "./AddAPainting";
import NavBar from "./NavBar";
import Paintings from "./Paintings";
import PaintingDetail from "./PaintingDetail";
import PaintingEdit from "./PaintingEdit";
import Artists from "./Artists";
import ArtistDetail from "./ArtistDetail";
import ClassComponent from './ClassComponent';
import '../App.css';

function App() {
    const [paintings, setPaintings] = useState([]);
    const [artists, setArtists] = useState([]);
    const [refresh,setRefresh] = useState(false)
    useEffect(() => {
      fetch("http://localhost:9292/paintings")
        .then((response) => response.json())
        .then((data) => {
          setPaintings(data);
        });
    }, [refresh]);
    useEffect(() => {
        fetch("http://localhost:9292/artists")
          .then((response) => response.json())
          .then((data) => {
            setArtists(data);
          });
      }, []);

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/paintings">
          <Paintings paintings={paintings}/>
        </Route>
        <Route exact path="/paintings/:id">
          <PaintingDetail paintings={paintings} setRefresh={setRefresh} refresh={refresh} />
        </Route>
        <Route exact path="/paintings/:id/edit">
          <PaintingEdit setRefresh={setRefresh} refresh={refresh} />
        </Route>
        <Route exact path="/artists">
          <Artists artists={artists}/>
        </Route>
        <Route exact path="/artists/:id">
          <ArtistDetail artists={artists}/>
        </Route>
        <Route exact path="/login">
          <AddAPainting setRefresh={setRefresh} refresh={refresh} />
        </Route>
        <Route exact path="/class-component">
          <ClassComponent title={"hi"} content={"hows it going!"}/>
        </Route>
        <Route exact path="/">
          <Home paintings={paintings}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
