import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import { Vector3 } from "three";
import { useCarContext } from "../context/CarControlsContext"

const bulletCoolDown = 300;
const bulletSpeed = 30;
export const useControls = (vehicleApi, chassisApi , onFrame) => {

  const { camera } = useThree();
  let [controls, setControls] = useState({});
  //const [previousVelocity, setPreviousVelocity] = useState([0, 0, 0]);

  const [brakeForce, setBrakeForce] = useState(0);
  const [turboStartTime, setTurboStartTime] = useState(null);

  const { car, setCarValue, setBullets } = useCarContext()

  const state = useRef({
    timeToShoot: 0,
  })

  //console.log("vehicleApi", vehicleApi)
  //console.log("chassisApi", chassisApi)
  useEffect(() => {
    const keyDownPressHandler = (e) => {
      setControls((controls) => ({ ...controls, [e.key.toLowerCase()]: true }));
    }

    const keyUpPressHandler = (e) => {
      setControls((controls) => ({ ...controls, [e.key.toLowerCase()]: false }));
    }

    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    }
  }, []);


  useFrame((state) => {
    if (!vehicleApi || !chassisApi) return;

    if(turboStartTime && ((Date.now() - turboStartTime) / 1000) > 1.5){ //Quitar el turbo despues de 2 segundos
      setCarValue('turbo', false)
      setTurboStartTime(null)
    }

    let speedMulti = 1;
    if (controls.shift && car.turbo) {
      if(!turboStartTime){ //Tomar el momento que se uso el turbo
        setTurboStartTime(Date.now());
      }
      state.camera.fov = 100 
      speedMulti = 2 
    } else {
      state.camera.fov = 80 
      speedMulti =  1
    }
    
    if (controls.w) {
        vehicleApi.applyEngineForce(150 * speedMulti, 2);
        vehicleApi.applyEngineForce(150 * speedMulti, 3);
    } else if (controls.s) {
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (controls.a) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (controls.d) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    if (controls.arrowdown) chassisApi.applyLocalImpulse([0, -3, 0], [0, 0, +1]);
    if (controls.arrowup) chassisApi.applyLocalImpulse([0, -3, 0], [0, 0, -1]);
    if (controls.arrowleft) chassisApi.applyLocalImpulse([0, -3, 0], [-0.5, 0, 0]);
    if (controls.arrowright) chassisApi.applyLocalImpulse([0, -3, 0], [+0.5, 0, 0]);

    if (controls[" "]) {

      vehicleApi.setBrake(3, 2);
      vehicleApi.setBrake(3, 3);
    } else {
      vehicleApi.setBrake(0, 0);
      vehicleApi.setBrake(0, 1);
      vehicleApi.setBrake(0, 2);
      vehicleApi.setBrake(0, 3);
    }

    //TODO Configurar la position de acuerdo a la position inicial del vehiculo
    if (controls.r) {
      chassisApi.position.set(-1.5, 0.5, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
      console.log(chassisApi)
    }

    // Calcula la aceleración
    /*const currentVelocity = chassisApi.current?.velocity;
    console.log(currentVelocity, "velocidad")
    const previousVelocityVector = new Vector3(...previousVelocity);
    const currentVelocityVector = new Vector3(...currentVelocity);

    // Calcula la aceleración con las diferencias de velocidad
    const delta = 1; // Aquí puedes obtener el delta de tiempo entre frames si tienes acceso a él
    const acceleration = new Vector3()
        .subVectors(currentVelocityVector, previousVelocityVector)
        .divideScalar(delta);

    // Llama a `onFrame` para manejar la aceleración.
    if (onFrame) {
        onFrame(acceleration.length());
    }

    // Actualiza la velocidad anterior
    setPreviousVelocity(currentVelocity);*/

  }, [controls, vehicleApi, chassisApi]);

  useEffect(() => {
   
    let cameraDirection = new Vector3();
    let carPosition = new Vector3(...car.currentPosition);
    camera.getWorldDirection(cameraDirection);
    const bulletDirection = cameraDirection.clone().multiplyScalar(bulletSpeed);
    const bulletPosition = carPosition.clone().add(cameraDirection.multiplyScalar(0.2));
    const handleMouseDown = (e) => {
      if (e.button === 0) {
        const now = Date.now();
        if (now >= state.current.timeToShoot) {
          state.current.timeToShoot = now + bulletCoolDown;
          setBullets((bullets) => [
            ...bullets,
            {
              id: now,
              position: [bulletPosition.x, bulletPosition.y, bulletPosition.z],
              forward: [bulletDirection.x, bulletDirection.y, bulletDirection.z]
            }
          ]);
        }
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [car]);


  return controls;
}
