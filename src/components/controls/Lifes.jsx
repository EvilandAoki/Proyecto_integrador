import React from 'react';
import lifeImage from "/public/corazon.png";
import noLifeImage from "/public/corazon_vacio.png";


const LivesDisplay = ({ lives }) => {
  // Array para almacenar las imágenes de vida y sin vida
  const lifeImages = [];

  // Llena el array con las imágenes de vida y sin vida según el número de vidas
  for (let i = 0; i < 3; i++) {
    if (i < lives) {
      lifeImages.push(<img key={i} src={lifeImage} alt="Life" />);
    } else {
      lifeImages.push(<img key={i} src={noLifeImage} alt="No Life" />);
    }
  }

  return (
    <div className='lifes'>
      {lifeImages}
    </div>
  );
};

export default LivesDisplay;
