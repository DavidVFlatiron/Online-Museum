// src/components/App.js
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Painting from "./Painting";
import Artists from "./Artists";
import '../App.css';

function App() {
    const [paintings, setPaintings] = useState([]);
    const [artists, setArtists] = useState([]);
    useEffect(() => {
      fetch("http://localhost:9292/paintings")
        .then((response) => response.json())
        .then((data) => {
          setPaintings(data);
        });
    }, []);
    useEffect(() => {
        fetch("http://localhost:9292/artists")
          .then((response) => response.json())
          .then((data) => {
            setArtists(data);
          });
      }, []);
    console.log(paintings);

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/paintings">
          <Painting paintings={paintings}/>
        </Route>
        <Route exact path="/artists">
          <Artists artists={artists}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home paintings={paintings}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
