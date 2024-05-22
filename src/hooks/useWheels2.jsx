import { useGLTF } from '@react-three/drei';
import React from 'react'

export const useWheels2 = () => {
    const { nodes, materials } = useGLTF('public/assets/models/cars/wheel-draco.glb')
    const { vehicleConfig, wheelInfo, wheels, chassisBodyCar } = useCarContext();

  



}
