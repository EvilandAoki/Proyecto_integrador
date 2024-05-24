"use strict";

import { addDoc, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";



const gameDataRef = collection(db, "gameData");

const createGameData = async (data) => {
    try {
        const exist = await readGameData(data.email);
        if(!exist.success){
            console.log("not exist")
            await addDoc(gameDataRef, { 
                userKey: data.email,
                lastLevel: 0,
                levelComplete: false,
                points: 0,
                time: 0,
                TimeLevelOne: 0,
                TimeLevelTwo: 0,
                TimeLevelThree:0,
            });
            return await readGameData(data.email);
        }
        return exist
    } catch (error) {
        return error;
    }
};

const readGameData = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(query(gameDataRef, where("userKey", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userData = userSnapshot.docs.map((doc) => doc.data());
        return { success: true, userData: userData[0] };
    } catch (error) {
        return error;
    }
};

const updateGameData = async (userEmail, newData) => {
    try {
        
        const userSnapshot = await getDocs(query(gameDataRef, where("userKey", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }
        const userDoc = userSnapshot.docs[0];
        const userData = userSnapshot.docs.map((doc) => doc.data());

        await updateDoc(userDoc.ref, {
            ...userData[0],
            ...newData
        });
        const _newData = await readGameData(userEmail).userData;
        return { success: true, userData: _newData,message: "gameData updated successfully" };
    } catch (error) {
        console.log('ocurrio un error', error)
        return error;
    }
};

export { createGameData, readGameData, updateGameData };
