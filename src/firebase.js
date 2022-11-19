import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBLWhu4gXY4gPW74iggZkZGPEVwrxSJHtk",
    authDomain: "chat-9bb1b.firebaseapp.com",
    projectId: "chat-9bb1b",
    storageBucket: "chat-9bb1b.appspot.com",
    messagingSenderId: "835783766792",
    appId: "1:835783766792:web:40dd0f17fa4868b35af2bd",
    measurementId: "G-ND4PTFGGJE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);