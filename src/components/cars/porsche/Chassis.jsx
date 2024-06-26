import { useBox } from '@react-three/cannon'
import React, { forwardRef, useEffect, useRef } from 'react'
import { useCarContext } from '../../../context';
import { useGLTF } from '@react-three/drei';

export const Chassis = forwardRef(({ args = [2, 1.1, 4.7], mass = 500, children, ...props }, ref) => {
  const glass = useRef(null);
  const brake = useRef(null);
  const wheel = useRef(null);
  const needle = useRef(null);
  const chassis_1 = useRef(null);

  const { vehicleConfig, setChassisBodyCar } = useCarContext();
  const maxSpeed = vehicleConfig?.maxSpeed;

  const { nodes: n, materials: m } = useGLTF('public/assets/models/cars/chassis-draco.glb');

  const [chassis, chassisApi] = useBox(() => ({
    args: [2, 1.1, 4.7],
    mass: 500,
    allowSleep: false,
    ...vehicleConfig
  }))

  useEffect(() => {
    setChassisBodyCar(chassis)
  }, [chassis]);

  return (
    <>
      <group ref={chassis} dispose={null}>
        <group position={[0, -0.2, -0.2]}>
          <mesh ref={chassis_1} castShadow receiveShadow geometry={n.Chassis_1.geometry} material={m.BodyPaint} material-color="#f0c050" />
          <mesh castShadow geometry={n.Chassis_2.geometry} material={n.Chassis_2.material} material-color="#353535" />
          <mesh castShadow ref={glass} geometry={n.Glass.geometry} material={m.Glass} material-transparent />
          <mesh ref={brake} geometry={n.BrakeLights.geometry} material={m.BrakeLight} material-transparent />
          <mesh geometry={n.HeadLights.geometry} material={m.HeadLight} />
          <mesh geometry={n.Cabin_Grilles.geometry} material={m.Black} />
          <mesh geometry={n.Undercarriage.geometry} material={m.Undercarriage} />
          <mesh geometry={n.TurnSignals.geometry} material={m.TurnSignal} />
          <mesh geometry={n.Chrome.geometry} material={n.Chrome.material} />
          {/* <group ref={wheel} position={[0.37, 0.25, 0.46]}>
            <mesh geometry={n.Wheel_1.geometry} material={n.Wheel_1.material} />
            <mesh geometry={n.Wheel_2.geometry} material={n.Wheel_2.material} />
          </group> */}
          <group position={[0, 0, 0]}>
            <mesh geometry={n.License_1.geometry} material={m.License} />
            <mesh geometry={n.License_2.geometry} material={n.License_2.material} />
          </group>
          <group position={[0.2245, 0.3045, 0.6806]} scale={[0.0594, 0.0594, 0.0594]}>
            <mesh geometry={n.Cube013.geometry} material={n.Cube013.material} />
            <mesh geometry={n.Cube013_1.geometry} material={n.Cube013_1.material} />
            <mesh geometry={n.Cube013_2.geometry} material={n.Cube013_2.material} />
          </group>
          <mesh
            geometry={n['pointer-left'].geometry}
            material={n['pointer-left'].material}
            position={[0.5107, 0.3045, 0.6536]}
            rotation={[Math.PI / 2, -1.1954, 0]}
            scale={[0.0209, 0.0209, 0.0209]}
          />
          <mesh
            ref={needle}
            geometry={n['pointer-right'].geometry}
            material={n['pointer-right'].material}
            position={[0.2245, 0.3045, 0.6536]}
            rotation={[-Math.PI / 2, -0.9187, Math.PI]}
            scale={[0.0209, 0.0209, 0.0209]}
          />
        </group>
      </group>
    </>
  )
})
