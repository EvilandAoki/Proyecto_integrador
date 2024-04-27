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
        body: null,
    });
    

    return (
        <CarContext.Provider
            value={{
                car, setCar
            }}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;