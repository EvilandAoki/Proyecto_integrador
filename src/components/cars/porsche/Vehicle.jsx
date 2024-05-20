import React, { useEffect, useRef, useState } from 'react'
import { useCarContext } from '../../../context';
import { Chassis } from './Chassis';
import { Wheel } from './Wheel';
import { useRaycastVehicle } from '@react-three/cannon';
import { useWheels } from '../../../hooks/useWheels';

export const Vehicle = () => {

  const { vehicleConfig, wheelInfo, wheels,  chassisBodyCar } = useCarContext();

  const { back, force, front, height, maxBrake, steer, maxSpeed, width, } = vehicleConfig;

  const wheelInfos = wheels.map((_, index) => {
    const length = index < 2 ? front : back;
    const sideMulti = index % 2 ? 0.5 : -0.5;
    return {
      ...wheelInfo,
      chassisConnectionPointLocal: [width * sideMulti, height, length],
      isFrontWheel: Boolean(index % 2),
    };
  })

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBodyCar,
      wheels,
      wheelInfos,
    }), null, [wheelInfo]
  )

  

  return (
    <group>
      <Chassis ref={chassisBodyCar}>

      </Chassis>
      <>
        {
          wheels.map((wheel, index) => {
            return (
              <Wheel leftSide={!(index % 2)} ref={wheel} key={index} />
            )
          })
        }
      </>
    </group>
  )
}
