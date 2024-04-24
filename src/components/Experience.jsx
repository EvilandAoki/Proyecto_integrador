import { FlyControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Supra from "../components/cars/Supra";
import { Porsche } from "../components/cars/Porsche";
import { WorldOne } from "../pages/levelOne/world/WorldOne";

export const Experience = () => {

    return (
        <>
            <directionalLight position={[50, 10, 5]} />
            <OrbitControls makeDefault />
            <FlyControls />
            <ambientLight intensity={0.5} />
            <Physics debug={true}>
                <Supra />
                <Porsche />
                <WorldOne />
            </Physics>
        </>
    );
};