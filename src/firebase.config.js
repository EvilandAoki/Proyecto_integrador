"use strict"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj4O8Piw2RXA09tTDh2triwS9YC0Asspg",
  authDomain: "proyecto-integrador-ce602.firebaseapp.com",
  projectId: "proyecto-integrador-ce602",
  storageBucket: "proyecto-integrador-ce602.appspot.com",
  messagingSenderId: "857802244818",
  appId: "1:857802244818:web:2a55b869aa47272ee5230b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)