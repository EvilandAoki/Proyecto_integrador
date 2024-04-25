import { useState, useEffect, createContext, useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config"

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
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

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            saveUserData(currentUser)
        })

        return () => suscribed()
      }, [])

    const saveGameInfo= (data) => {
        //validaciones y otros
        setGameInfo(data);
        localStorage.setItem('gameInfo', JSON.stringify(data))
    }

    const saveUserData = (data) => {
        if(data){
            setUserData(data);
            localStorage.setItem('userData', JSON.stringify(data))
        }
    }

    const loadInfo = async () => {
        const _gameInfo = localStorage.getItem('userData');
        const _userData = localStorage.getItem('gameInfo');

        saveGameInfo(JSON.parse(_gameInfo));
        setUserData(JSON.parse(_userData));
    }

    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider)
            setLoading(false);
            saveUserData(res.user);
            return { success:  true, user: res.user }
        } catch (error) {
            setLoading(false);
            return { success: false,  error}
        }
    }
    
    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.clear()
            setGameInfo(null)
            setUserData(null)
            return { success:  true }
        } catch (error) {
            return { success: false,  error}
        }
    }

    return (
        <AuthContext.Provider
            value={{
                loginWithGoogle,
                logout,
                userData,
                gameInfo,
                saveGameInfo,
                loading,
                loadInfo
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext;
