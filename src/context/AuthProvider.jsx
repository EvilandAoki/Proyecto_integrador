import { useState, useEffect, createContext, useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config"
import { createGameData, updateGameData } from "../db/gameData-collection";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.error('Error al usar el contexto');
        return;
    }
    return context;
}

//contexto de toda la aplicacion
export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [gameInfo, setGameInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openModalTutorial, setopenModalTutorial] = useState(false);
      const [scoreBoard, setScoreBoard] = useState([0,0])

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            saveUserData(currentUser)
            loadInfo()
        })

        return () => suscribed()
    }, [])

    const saveGameInfo = (data) => {
        //validaciones y otros
        setGameInfo(data);
        localStorage.setItem('gameInfo', JSON.stringify(data))
    }

    const saveUserData = (data) => {
        if (data) {
            setUserData(data);
            localStorage.setItem('userData', JSON.stringify(data))
        }
    }

    const levelComplete = async (levelData) => {
        console.log(userData, "que hay en el userData?")
        const res = await updateGameData(userData.email, {
            ...levelData
        })
        saveGameInfo(res.userData)
        // console.log(levelData, "levelData")
        // console.log(res.userData, "userData LocalStorage")
    }

    const loadInfo = async () => {
        const _gameInfo = localStorage.getItem('gameInfo');
        const _userData = localStorage.getItem('userData');

        saveGameInfo(JSON.parse(_gameInfo));
        setUserData(JSON.parse(_userData));
    }

    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            const dbData = await createGameData(res.user);
            setLoading(false);
            saveUserData(res.user);
            saveGameInfo(dbData.userData);
            return { success: true, user: res.user }
        } catch (error) {
            setLoading(false);
            return { success: false, error }
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.clear()
            setGameInfo(null)
            setUserData(null)
            return { success: true }
        } catch (error) {
            return { success: false, error }
        }
    }

    const showModalTutorial = () => {
        setopenModalTutorial(true);
    };

    const cancelModalTutorial = () => {
        setopenModalTutorial(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loginWithGoogle,
                logout,
                userData,
                gameInfo,
                saveGameInfo,
                loading,
                loadInfo,
                levelComplete,
                openModalTutorial,
                showModalTutorial,
                cancelModalTutorial,
                scoreBoard, setScoreBoard
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext;
