// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2k5YJX9p-8cAE-plf40J8MloU-AKrYA",
  authDomain: "react-coderhouse-94.firebaseapp.com",
  projectId: "react-coderhouse-94",
  storageBucket: "react-coderhouse-94.firebasestorage.app",
  messagingSenderId: "43166964937",
  appId: "1:43166964937:web:008956efb891ccee580118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)