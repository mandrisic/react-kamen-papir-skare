import React from "react";
import { useNavigate } from "react-router-dom";
import './Match.css';
import Nav from './Nav';
import igracKamen from './slike/igrac/kamen.png';
import compKamen from './slike/comp/kamen.png';

const Match = (props) => {
  let pScore = 0;
  let cScore = 0;

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.playerHand');
    const computerHand = document.querySelector('.computerHand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });

    const computerOptions = ['kamen', 'papir', 'skare'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./slike/igrac/${this.textContent}.png`;
          computerHand.src = `./slike/comp/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');

    if (playerChoice === computerChoice) {
      winner.textContent = 'Neriješeno';
      return;
    }

    if (playerChoice === 'kamen') {
      if (computerChoice === 'skare') {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'papir') {
      if (computerChoice === 'skare') {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'skare') {
      if (computerChoice === 'kamen') {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();

  const navigate = useNavigate();
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
          <button className="kamen">kamen</button>
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