// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c7d9a.firebaseapp.com",
  projectId: "mern-estate-c7d9a",
  storageBucket: "mern-estate-c7d9a.appspot.com",
  messagingSenderId: "179752005597",
  appId: "1:179752005597:web:4692797691a7f2fd00d034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);