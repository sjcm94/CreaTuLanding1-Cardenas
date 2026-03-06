import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-coderhouse-94.firebaseapp.com",
  projectId: "react-coderhouse-94",
  storageBucket: "react-coderhouse-94.firebasestorage.app",
  messagingSenderId: "43166964937",
  appId: "1:43166964937:web:008956efb891ccee580118"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)