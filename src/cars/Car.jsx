import { useGLTF } from "@react-three/drei"
import supra from '../assets/models/cars/porche.glb'

export const Car = () => {  
    const carmodel = useGLTF("/assets/models/cars/tractor.glb")
    console.log(carmodel)
    return (
        null
    )
}
