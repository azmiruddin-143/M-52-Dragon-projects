// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmKuaR14Qs0urMf8JIGqAKJURra4ppXeg",
  authDomain: "dragon-news-projects-2081b.firebaseapp.com",
  projectId: "dragon-news-projects-2081b",
  storageBucket: "dragon-news-projects-2081b.firebasestorage.app",
  messagingSenderId: "750294624843",
  appId: "1:750294624843:web:b3e40a74144dae45227bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)