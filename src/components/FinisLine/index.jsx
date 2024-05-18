import {useRef, useState, useEffect} from 'react'
import { useFrame } from '@react-three/fiber';
import { useCarContext } from '../../context/CarControlsContext';
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from "react-router-dom";

const sf  = 0.2;
const sx = sf *35;
function FinishLine({currentLevel, x ,z}) {
  
  const navigate = useNavigate();
  const {car} = useCarContext()
  const {levelComplete, gameInfo} = useAuth();

  const meshRef = useRef();
  const [complete, setComplete] = useState(false)

  useFrame(() => {
        const [cx,cy,cz] = car.currentPosition;

        //Si cruza a la meta
        if(!complete) {
          if((cx <= x + sf) && (cz >= z - sx) && (cx >= x - sf) && (cz <= z + sx)) {
            console.log('level complete!------------>')
            setComplete(true)
            //mostrar mensaje de felictaciones
            //Guardar
            if(gameInfo.lastLevel <= currentLevel){
              levelComplete({
                lastLevel: currentLevel + 1,
              }).then(() => setComplete(false));
            }
            //ir al menu
            navigate('/')
          }
        }
  });

  return (
    <>
      <group ref={meshRef} position={[x, 0, z]}>
        <mesh>
          <boxGeometry attach="geometry" args={[sf, sf* 10, sx]} />
          <meshBasicMaterial attach="material" color="red" transparent opacity={0.5} />
        </mesh>
      </group>
    </>
  );
}

export default FinishLine;
