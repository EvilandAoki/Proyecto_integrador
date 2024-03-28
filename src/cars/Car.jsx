import { useGLTF } from "@react-three/drei"
import supra from '../assets/models/cars/porche.glb'

export const Car = () => {  
    const carmodel = useGLTF("/src/assets/models/cars/porche.glb")
    console.log(carmodel)
    return carmodel
}
