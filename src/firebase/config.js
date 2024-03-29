// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {Firestore, getFirestore} from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

//console.log(process.env);
//console.log(import.meta.env);
// Your web app's Firebase configuration
// deb/prod
/*const firebaseConfig = {
  apiKey: "AIzaSyCZlxqYwMrOuiSMlG-F5x6zPqKGi1Ap06A",
  authDomain: "react-curso-ebba4.firebaseapp.com",
  projectId: "react-curso-ebba4",
  storageBucket: "react-curso-ebba4.appspot.com",
  messagingSenderId: "778048932455",
  appId: "1:778048932455:web:cff7fb0f4610f4c5db22c2"
};*/

/* testing
const firebaseConfig = {
  apiKey: "AIzaSyDtTmeLU_0_E1hNCHkIk3EuAisvCDHn1rg",
  authDomain: "react-firebase-testing-f5483.firebaseapp.com",
  projectId: "react-firebase-testing-f5483",
  storageBucket: "react-firebase-testing-f5483.appspot.com",
  messagingSenderId: "1027891679133",
  appId: "1:1027891679133:web:d9d79e930a8f1076312974"
};
*/

const firebaseConfig = {
  apiKey: VITE_APIKEY, 
  authDomain: VITE_AUTHDOMAIN, 
  projectId:  VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID, 
};
console.log(firebaseConfig);
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
