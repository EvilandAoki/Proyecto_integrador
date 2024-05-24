import { useState, createContext, useContext, createRef, useRef } from "react";
import { Group } from "three";

export const CarContext = createContext();

export const useCarContext = () => {
    const context = useContext(CarContext);
    if (!context) {
        console.error("Error creating avatar context")
        return;
    }
    return context;
}




export const CarProvider = ({ children }) => {

    const [chassisBodyCar, setChassisBodyCar] = useState(null);

    const [startToEnd, setStartToEnd] = useState(false);

    const [timeLevel, setTimeLevel] = useState(0);

    const [car, setCar] = useState({
        ref: null,
        currentPosition: [0, 0, 0],
        turbo: false,
    });

    const setCarValue = (key, value) => {
        setCar({
            ...car,
            [key]: value
        })
    }

    const wheelInfo = {
        axleLocal: [-1, 0, 0],
        customSlidingRotationalSpeed: -0.01,
        directionLocal: [0, -1, 0],
        frictionSlip: 1.5,
        radius: 0.38,
        rollInfluence: 0,
        sideAcceleration: 3,
        suspensionRestLength: 0.35,
        suspensionStiffness: 30,
        useCustomSlidingRotationalSpeed: true,
    };

    const vehicleConfig = {
        width: 1.7,
        height: -0.3,
        front: 1.35,
        back: -1.3,
        steer: 0.3,
        force: 1800,
        maxBrake: 65,
        maxSpeed: 88,
    };

    const angularVelocity = [0, 0.5, 0];



    return (
        <CarContext.Provider
            value={{
                car,
                setCar,
                setCarValue,
                wheelInfo,
                vehicleConfig,
                angularVelocity,
                wheels: [useRef().current, createRef(), createRef(), createRef()],
                chassisBodyCar,
                setChassisBodyCar,
                startToEnd,
                setStartToEnd,
                api: null,
                timeLevel,
                setTimeLevel
            }}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;