import { KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react'

const controlsKeyboard = {
    forward: 'forward',
    back: 'back',
    left: 'left',
    right: 'right',
    jump: 'jump',
};


export const ReferenceKeyboardControls = ({ children }) => {
   
    
    const map2 = useMemo(() => [
        { name: controlsKeyboard.forward, keys: ["ArrowUp", "w", "W"] },
        { name: controlsKeyboard.back, keys: ["ArrowDown", "s", "S"] },
        { name: controlsKeyboard.left, keys: ['ArrowLeft', 'a', "A"] },
        { name: controlsKeyboard.right, keys: ["ArrowRight", "d", "D"] },
        { name: controlsKeyboard.jump, keys: ['Space'] },
    ], []);

    return (
        <KeyboardControls map={map2}>
            {children}
        </KeyboardControls>
    );
}



