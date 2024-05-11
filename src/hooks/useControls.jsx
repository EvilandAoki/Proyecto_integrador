import { useEffect, useState, useRef } from "react";
import { Vector3 } from "three";

export const useControls = (vehicleApi, chassisApi , onFrame) => {

  let [controls, setControls] = useState({});
  //const [previousVelocity, setPreviousVelocity] = useState([0, 0, 0]);



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


  useEffect(() => {
    //console.log(vehicleApi);
    //console.log(chassisApi.velocity.subscribe((v) => (velocity.current = v)));
    
    if (!vehicleApi || !chassisApi) return;

    if (controls.w) {
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
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

    //TODO Configurar la position de acuerdo a la position inicial del vehiculo
    if (controls.r) {
      chassisApi.position.set(-1.5, 0.5, 3);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);





      chassisApi.rotation.set(0, 0, 0);
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

  return controls;

}
