import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useCarContext } from "../context/CarControlsContext"

export const useControls = (vehicleApi, chassisApi) => {

  let [controls, setControls] = useState({});
  const [brakeForce, setBrakeForce] = useState(0);
  const [turboStartTime, setTurboStartTime] = useState(null);

  const { car, setCarValue } = useCarContext()

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

    if(turboStartTime && ((Date.now() - turboStartTime) / 1000) > 0.5){ //Quitar el turbo despues de 2 segundos
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

    if (controls.arrowdown) chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, +1]);
    if (controls.arrowup) chassisApi.applyLocalImpulse([0, -5, 0], [0, 0, -1]);
    if (controls.arrowleft) chassisApi.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0]);
    if (controls.arrowright) chassisApi.applyLocalImpulse([0, -5, 0], [+0.5, 0, 0]);

    // TODO Poner aqui los controles del frenado

  
    const speed = chassisApi.current?.velocity;
    console.log(speed)
    // const maxBrakeForce = 20; // Máxima fuerza de frenado
    // const minSpeedForBrake = 1; // Velocidad mínima para aplicar freno
    // const newBrakeForce = Math.min(maxBrakeForce, speed - minSpeedForBrake);
    // setBrakeForce(newBrakeForce);

    // Aplicar freno cuando se presiona la barra espaciadora
    if (controls[" "]) {
     
      vehicleApi.setBrake(10, 2);
      vehicleApi.setBrake(10, 3);
    } else {
      vehicleApi.setBrake(0, 0);
      vehicleApi.setBrake(0, 1);
      vehicleApi.setBrake(0, 2);
      vehicleApi.setBrake(0, 3);
    }

    // TODO Finalizar aqui los controles del frenado

    //TODO Configurar la position de acuerdo a la position inicial del vehiculo
    if (controls.r) {
      chassisApi.position.set(-1.5, 0.5, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      chassisApi.rotation.set(0, 0, 0);
    }
  }, [controls, vehicleApi, chassisApi]);

  return controls;
}
