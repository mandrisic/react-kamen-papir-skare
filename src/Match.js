import React from "react";
import { useNavigate } from "react-router-dom";
import './Match.css';
import Nav from './Nav';
import igracKamen from './slike/igrac/kamen.png';
import compKamen from './slike/comp/kamen.png';
/*
import igracPapir from './slike/igrac/papir.png';
import compPapir from './slike/comp/papir.png';
import igracSkare from './slike/igrac/skare.png';
import compSkare from './slike/comp/skare.png';
*/

const Match = (props) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');

  }

  return (
    <div className="Nav">
    <Nav />
    <div className="Match">
      <h1 className="winner">Pametno izaberi</h1>

      <div className="hands">
      <img className="playerHand" src={igracKamen} alt="kamen"/>
      <img className="computerHand" src={compKamen} alt="kamen"/>
      </div>

      <div className="options">
          <button className="kamen" onClick={handleClick}>kamen</button>
          <button className="papir">papir</button>
          <button className="skare">skare</button>
        </div>
      <br />
       </div>
      <button className="povratak" onClick={() => navigate(-1)}>← Povratak</button>
   
    </div>
  );
};


export default Match;