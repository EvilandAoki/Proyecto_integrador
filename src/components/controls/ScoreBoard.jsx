import React, { useState } from 'react';
import Marcador from "/public/marcador.png";

const Scoreboard = ({scoreOne , scoreTwo}) => {


  return (
    <div className="container_scoreboard">
        <img src={Marcador} alt="Marcador" />
      <div className="scoreboard">
        <div className="team">
          <p className="score">{scoreOne}</p>
        </div>
        <div className="team">
          <p className="score">{scoreTwo}</p>
        </div>
      </div>
    </div>
  );
};


export default Scoreboard;
