import React from "react";
import Nav from './Nav';
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Nav">
    <Nav />

    <div className="Intro">
    <h1 className="naslov">Kamen, papir...</h1>
      <p>
        <button onClick={() => navigate("/match")}>Zaigrajmo</button>
      </p>

    </div>
    </div>
  );
};

export default Home;