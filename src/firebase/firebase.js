// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsEvIS2r4lNUbcaEZ6sgphZtIhk0KihIU",
  authDomain: "fir-app-4b550.firebaseapp.com",
  projectId: "fir-app-4b550",
  storageBucket: "fir-app-4b550.appspot.com",
  messagingSenderId: "216220712683",
  appId: "1:216220712683:web:4b9d3ac3f1c3b6f11f48ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);