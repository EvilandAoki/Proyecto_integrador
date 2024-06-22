import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React, { Suspense, useState } from 'react'
import { WorldOne } from './world/WorldOne'
import { LightsOne } from './lights/LightsOne'
import { Debug, Physics } from '@react-three/cannon'
import { CubeCar } from '../../components/cars/CubeCar'
import Stopwatch from "./../../components/controls/Stopwatch"
import Tire from '../../components/Tire'
import TurboItem from '../../components/TurboItem'
import { useCarContext } from '../../context'
import { SiTurbo } from "react-icons/si";
import WelcomeText from "./../../components/views/ModalViews";

const URLENVIRONMENT = '/assets/textures/envmap.hdr'
const URLENVIRONMENT2 = '/assets/textures/dikhololo_night_1k.hdr'

export const LevelOne = () => {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-20, 3.9, 6.21]);

    const { car } = useCarContext()

    return (

        <>
            <Canvas
                shadows={true}
            >
                <Environment files={URLENVIRONMENT} background={"both"} />
                <color attach="background" args={["#ececec"]} />
                <LightsOne />
                <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
                {!thirdPerson && (
                    <OrbitControls target={[10.64, -10.71, 0.03]} />
                )}
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                    // frictionGravity={[0, 1, 0]}
                    // defaultContactMaterial={{ restitution: 0.3 }}
                >
                    {/* <Debug color="green"> */}
                        <Suspense>
                            <WorldOne />
                            <CubeCar thirdPerson={thirdPerson} />
                            <Tire  key={'tire1'}  x={-9} z={-12} />
                            <Tire  key={'tire2'}  x={-12} z={-26} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov />
                            <Tire  key={'tire3'}  x={-19} z={-1.8} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov />
                            <Tire  key={'tire4'}  x={16} z={-2} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov />
                            <Tire  key={'tire5'}  x={25} z={-11} rot={[Math.PI / 2,Math.PI / 2, 0]} axisXmov />
                            <TurboItem key={'turbo1'} x={4} z={-10.5} />
                            <TurboItem key={'turbo2'} x={20} z={-13} />
                            <TurboItem key={'turbo3'} x={18} z={-26} />
                            <TurboItem key={'turbo4'} x={8} z={-13} />
                            <TurboItem key={'turbo5'} x={16} z={-7} />
                            <TurboItem key={'turbo6'} x={28} z={-24} />
                            <TurboItem key={'turbo7'} x={-2} z={-13} />
                            <TurboItem key={'turbo8'} x={-17} z={-13} />
                        </Suspense>
                    {/* </Debug> */}
                </Physics>
                {/* <Perf /> */}
            </Canvas>
            <Stopwatch />
            <WelcomeText Level={1} />
            <div style={{position: "absolute", top: 1, rigth: 2}} className="boder pt-4 ps-4">
                {car.turbo && 
                    <div className="border border-info rounded shadow-lg p-2"> 
                        <SiTurbo size={50} className="text-info" />
                    </div>}
            </div>
        </>

    )
}
