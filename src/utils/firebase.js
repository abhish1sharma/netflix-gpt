// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSOCK6dxhNtq_C9PUjE3e_p99_LT9ChZc",
  authDomain: "netflix-gpt-5a513.firebaseapp.com",
  projectId: "netflix-gpt-5a513",
  storageBucket: "netflix-gpt-5a513.firebasestorage.app",
  messagingSenderId: "409981626177",
  appId: "1:409981626177:web:9a586a143d5529caf3e3c0",
  measurementId: "G-S0FYJ1KCXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();