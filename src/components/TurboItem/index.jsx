import {useRef, useState, useEffect} from 'react'
import { useFrame } from '@react-three/fiber';
import { useCarContext } from '../../context/CarControlsContext';

const sf  = 0.2;
function TurboItem({x,z}) {
  const meshRef = useRef();
  const { car, setCarValue } = useCarContext()
  const [show, setShow] = useState(true)

  useFrame(() => {
    if(show){
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        const [cx,cy,cz] = car.currentPosition;

        if((cx <= x + sf) && (cz >= z - sf) && (cx >= x - sf) && (cz <= z + sf)){
            setCarValue('turbo', true)
            setShow(false)
        }
    }
  });

  useEffect(() => {
    let timer;
    if(!show){
        timer = setTimeout(() => {
            setShow(true)
        }, 4000);
    }

    return () => {
        clearTimeout(timer)
    }
}, [show])
  

  return (
    <>
        {show? <mesh ref={meshRef} position={[x, -0.49, z]}>
          <boxGeometry attach="geometry" args={[sf, sf, sf]} wa/>
          <meshBasicMaterial attach="material" color="red" transparent opacity={0.5} />
        </mesh> : <></>}
    </>
  );
}

export default TurboItem;
