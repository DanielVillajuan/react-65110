// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8D6C1kDoMBKEQ2JUEKbtA2rfUO3Vbt8o",
    authDomain: "coderhouseproyect-react-peyra.firebaseapp.com",
    projectId: "coderhouseproyect-react-peyra",
    storageBucket: "coderhouseproyect-react-peyra.appspot.com",
    messagingSenderId: "947146217435",
    appId: "1:947146217435:web:4a057d8fdc790a422079fe",
    measurementId: "G-B7ZRSPRXVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);