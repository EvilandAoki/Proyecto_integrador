import React, { useEffect } from 'react'

// TODO poner esto en el store global
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

// TODO poner esto en el store global
const controls = {
    backward: false,
    boost: false,
    brake: false,
    forward: false,
    left: false,
    right: false,
}

export const isControl = (v) => Object.prototype.hasOwnProperty.call(controls, v);

export function KeyboardControls() {
    // TODO implementar traer estos controles dentro del store general
    // const [actionInputMap, actions] = useStore(({ actionInputMap, actions }) => [actionInputMap, actions, binding]);

    useEffect(() => {
        
        const keyMap = Object.keys(actionInputMap).reduce((out, actionName) => {
            const inputs = actionInputMap[actionName].reduce((inputs, input) => {
                inputs[input] = actionName;
                console.log(inputs,`${actionName} accion llamada`);
                return inputs;
            }, {});
            return { ...out, ...inputs };
        }, {});

        const downHandler = ({ key, target }) => {
            const actionName = keyMap[key.toLowerCase()];
            console.log(actionName,"actionName de la funcion:downHandler")
            if (!actionName || target.nodeName === 'INPUT' || !isControl(actionName)) return;
            // TODO: consultar que la funcion actions empiece a elaborar y ejecutar el modelado del vehiculo segun lo que este haciendo
            // actions[actionName](true);
        };

        const upHandler = ({ key, target }) => {
            const actionName = keyMap[key.toLowerCase()];
            console.log(actionName,"actionName de la funcion: upHandler")
            if (!actionName || target.nodeName === 'INPUT') return;
             // TODO: consultar que la funcion actions empiece a elaborar y ejecutar el modelado del vehiculo segun lo que este haciendo
            // actions[actionName](false);
        };

        window.addEventListener('keydown', downHandler, { passive: true });
        window.addEventListener('keyup', upHandler, { passive: true });
        
        console.log(controls, "cambian los controles?")

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
        
    }, [actionInputMap]);

    return null;
}

