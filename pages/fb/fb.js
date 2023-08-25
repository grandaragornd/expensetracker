// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdf6CXujXEe7q5ZwafXmIwvGtAfx1Ufk",
  authDomain: "expense-tracker-dcb46.firebaseapp.com",
  projectId: "expense-tracker-dcb46",
  storageBucket: "expense-tracker-dcb46.appspot.com",
  messagingSenderId: "511525992866",
  appId: "1:511525992866:web:8a752671db28c5413b1afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);