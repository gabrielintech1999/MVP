// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZjfikdjh9LixVfAopLQ3Zy8A140e3TEQ",
  authDomain: "store-69bd4.firebaseapp.com",
  projectId: "store-69bd4",
  storageBucket: "store-69bd4.firebasestorage.app",
  messagingSenderId: "917669397663",
  appId: "1:917669397663:web:3e86f9c7fda8ae3fb8ceaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);