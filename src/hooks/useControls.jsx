import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import { Vector3 } from "three";
import { useCarContext } from "../context/CarControlsContext"

const bulletCoolDown = 300;
const bulletSpeed = 30;

const vel = 0.1;
const speedLimit = 100;
export const useControls = (vehicleApi, chassisApi , onFrame) => {

  const { camera } = useThree();
  let [controls, setControls] = useState({});
  //const [previousVelocity, setPreviousVelocity] = useState([0, 0, 0]);

  const [brakeForce, setBrakeForce] = useState(0);
  const [turboStartTime, setTurboStartTime] = useState(null);

  const { car, setCarValue, setBullets, setVelocity } = useCarContext()

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
      let swaySpeed = 60
      let swayValue = (50 / 100 + 0.25) * 30
      state.camera.rotation.z += (Math.sin(state.clock.elapsedTime * swaySpeed * 0.9) / 1000) * swayValue
      state.camera.rotation.x += (Math.sin(state.clock.elapsedTime * swaySpeed) / 1000) * swayValue
      speedMulti = 2 
    } else {
      state.camera.fov = 80 
      speedMulti =  1
    }
    if (controls.w) {
        setVelocity((v) => v < speedLimit * speedMulti  ? v + (vel * speedMulti) : speedLimit * speedMulti)
        vehicleApi.applyEngineForce(150 * speedMulti, 2);
        vehicleApi.applyEngineForce(150 * speedMulti, 3);
    } else if (controls.s) {
      setVelocity((v) => v > 0 ? v - vel : 0)
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
    } else {
      setVelocity((v) => v > 0 ? v - vel : 0)
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
      setVelocity((v) => v >  0 ? v - (4 * vel): 0   );
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

    if(controls.e){
      shoot()
    }

    // Calcula la aceleración

  }, [controls, vehicleApi, chassisApi]);

  const shoot = () => {
    let cameraDirection = new Vector3();
    let carPosition = new Vector3(...car.currentPosition);
    camera.getWorldDirection(cameraDirection);
    const bulletDirection = cameraDirection.clone().multiplyScalar(bulletSpeed);
    const bulletPosition = carPosition.clone().add(cameraDirection.multiplyScalar(0.5));
    const now = Date.now();
    if (now >= state.current.timeToShoot) {
      state.current.timeToShoot = now + bulletCoolDown;
      setBullets((bullets) => {
        return [...bullets,
          {
            id: now,
            position: [bulletPosition.x, -0.8, bulletPosition.z],
            forward: [bulletDirection.x, 0, bulletDirection.z]
          }]
      });
    }
  }

  return controls;
}
