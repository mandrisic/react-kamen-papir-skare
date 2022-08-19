import React from 'react';
import './Nav.css';


function Nav(){
    return (
        <div className="Nav">
        <div className="score">
          <div className="player-score">
            <h2>Igrač</h2>
            <p>0</p>
          </div>
          <div className="computer-score">
            <h2>Računalo</h2>
            <p>0</p>
          </div>
          </div>
      </div>
    );
}

export default Nav;