import React, { useState } from 'react';
import Marcador from "/public/marcador.png";

const Scoreboard = () => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const incrementTeam1Score = () => {
    setTeam1Score(team1Score + 1);
  };

  const incrementTeam2Score = () => {
    setTeam2Score(team2Score + 1);
  };

  return (
    <div className="container_scoreboard">
        <img src={Marcador} alt="Marcador" />
      <div className="scoreboard">
        <div className="team">
          <p className="score">{team1Score}</p>
        </div>
        <div className="team">
          <p className="score">{team2Score}</p>
        </div>
      </div>
    </div>
  );
};


export default Scoreboard;
