import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyASphBmHdPDPgVWnwD2Y29kykYkG_gwZ-c",
    authDomain: "todo-93cdb.firebaseapp.com",
    projectId: "todo-93cdb",
    storageBucket: "todo-93cdb.appspot.com",
    messagingSenderId: "404329012309",
    appId: "1:404329012309:web:505ce37eb086a9e01ec8dc",
    measurementId: "G-KYP8YG8M23"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
