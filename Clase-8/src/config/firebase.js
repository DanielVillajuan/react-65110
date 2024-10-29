// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoApDHbpcxp1bEh7CaAgwklTR95t30tH0",
  authDomain: "coder-react-1-b066b.firebaseapp.com",
  projectId: "coder-react-1-b066b",
  storageBucket: "coder-react-1-b066b.appspot.com",
  messagingSenderId: "89366331256",
  appId: "1:89366331256:web:49e34a4a9e7a3de56c928d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default { db, storage }
