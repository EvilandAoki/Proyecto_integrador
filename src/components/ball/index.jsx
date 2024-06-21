import { useEffect, useState, useRef, useCallback } from "react";
import { useSphere } from "@react-three/cannon";
import { socket } from '../../socket/socket-manager';
import * as THREE from 'three';

const collideCoolDown = 1000;
export const Ball = (props) => {
  const [isSharing, setIsSharing] = useState(true);
  const [sphereRef, ballApi] = useSphere(() => ({
    mass: 20,
    args: [0.3],
    type: 'dynamic',
    onCollide: handleCollide,
    ...props
  }));

  const state = useRef({
    timeToCollibe: 0,
  })

  const handleCollide = useCallback((e) => {
    const collidedWith = e.body.parent.name
    const now = Date.now();
    console.log(e.body)
    if((collidedWith == 'WALL1' || collidedWith == 'WALL2') && now >= state.current.timeToCollibe){
      console.log('punshhhhhhhh')
        state.current.timeToCollibe = now + collideCoolDown;
        const { position } = ballApi
        position.set(...props.position)
    }        
  }, []);

  const syncBall = (transform) => {
    const { position, rotation } = ballApi;
    const newPosition = new THREE.Vector3(...transform.position);
    const newRotation = new THREE.Euler(...transform.rotation);

    // Interpolación para suavizar los movimientos
    position.subscribe(currentPosition => {
      const lerpedPosition = new THREE.Vector3().lerpVectors(
        new THREE.Vector3(...currentPosition),
        newPosition,
        0.1 // Ajusta este valor para cambiar la suavidad
      );
      position.set(lerpedPosition.x, lerpedPosition.y, lerpedPosition.z);
    });

    rotation.subscribe(currentRotation => {
      const lerpedRotation = new THREE.Euler(
        THREE.MathUtils.lerp(currentRotation[0], newRotation.x, 0.1),
        THREE.MathUtils.lerp(currentRotation[1], newRotation.y, 0.1),
        THREE.MathUtils.lerp(currentRotation[2], newRotation.z, 0.1)
      );
      rotation.set(lerpedRotation.x, lerpedRotation.y, lerpedRotation.z);
    });
  };

  useEffect(() => {
    socket.on("ball-moving", syncBall);
    return () => {
      socket.off("ball-moving", syncBall);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isSharing) {
      const { position, rotation } = ballApi;
      let dataToShare = {
        position: sphereRef.current.position.toArray(),
        rotation: sphereRef.current.rotation.toArray()
      };

      position.subscribe(value => {
        dataToShare.position = value;
      });

      rotation.subscribe(value => {
        dataToShare.rotation = value;
      });

      timer = setInterval(() => {
        socket.emit("ball-moving", dataToShare);
      }, 100);

      setIsSharing(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSharing]);

  return (
    <group name="BALL">
      <mesh ref={sphereRef} castShadow >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshLambertMaterial color="green" />
      </mesh>
    </group>
    
  );
};

export default Ball