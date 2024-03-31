import { createContext, useState } from "react";

const GameContext = createContext();

const actionInputMap = {
    backward: ['arrowdown', 's'],
    boost: ['shift'],
    brake: [' '],
    camera: ['c'],
    editor: ['.'],
    forward: ['arrowup', 'w', 'z'],
    help: ['i'],
    honk: ['h'],
    leaderboard: ['l'],
    left: ['arrowleft', 'a', 'q'],
    map: ['m'],
    pickcolor: ['p'],
    reset: ['r'],
    right: ['arrowright', 'd', 'e'],
    sound: ['u'],
}

const controlsGame = {
    backward: false,
    boost: false,
    brake: false,
    forward: false,
    left: false,
    right: false,
}


//contexto de toda la aplicacion
export const GameProvider = ({ children }) => {
    const [controls, setControls] = useState(controlsGame);

    const actions = (actionName, value) => {
        if (controls[actionName] != undefined) {
            setControls({ ...controls, [actionName]: value })
            console.log(({ ...controls, [actionName]: value }))
        } else {
            return
        }
    }

    return (
        <GameContext.Provider
            value={{
                controls,
                actionInputMap,
                actions
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export default GameContext;

