import Speedometer from 'react-d3-speedometer';

const AceleracionVelocimetro = ({ aceleracion  }) => {
  // Prop aceleracion es la velocidad actual del carro.
  // Asegúrate de manejar las unidades según las necesidades de tu proyecto.
  return (
    <div className='velocimetro'>
      <Speedometer
        value={Math.floor(aceleracion)} // Valor de la aceleración que se mostrará
        minValue={0} // Valor mínimo (puedes ajustarlo según tu necesidad)
        maxValue={100} // Valor máximo (ajústalo según tu necesidad)
        needleTransitionDuration={1000} // Duración de la transición de la aguja (en milisegundos)
        needleTransition="easeElastic" // Tipo de transición de la aguja
        needleColor="red" // Color de la aguja
        startColor="green" // Color de inicio (verde)
        endColor="red" // Color final (rojo)
      />
    </div>
  );
};

export default AceleracionVelocimetro;
