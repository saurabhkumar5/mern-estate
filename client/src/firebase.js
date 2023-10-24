
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c7d9a.firebaseapp.com",
  projectId: "mern-estate-c7d9a",
  storageBucket: "mern-estate-c7d9a.appspot.com",
  messagingSenderId: "179752005597",
  appId: "1:179752005597:web:4692797691a7f2fd00d034"
};


export const app = initializeApp(firebaseConfig);