import { useState, createContext, useContext } from "react";

export const CarContext = createContext();

export const useCarContext = () => {
    const context = useContext(CarContext);
    if(!context){
        console.error("Error creating avatar context")
        return;
    }
    return context;
}

export const CarProvider = ({ children }) => {

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


    return (
        <CarContext.Provider
            value={{
                car, setCar, setCarValue
            }}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;