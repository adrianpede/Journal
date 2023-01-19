// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {Firestore, getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZlxqYwMrOuiSMlG-F5x6zPqKGi1Ap06A",
  authDomain: "react-curso-ebba4.firebaseapp.com",
  projectId: "react-curso-ebba4",
  storageBucket: "react-curso-ebba4.appspot.com",
  messagingSenderId: "778048932455",
  appId: "1:778048932455:web:cff7fb0f4610f4c5db22c2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
