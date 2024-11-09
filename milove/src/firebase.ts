// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDAkJW4c8GqpCGWBxG2vfKbXSZk34K6K8s",
  authDomain: "milove-e3236.firebaseapp.com",
  projectId: "milove-e3236",
  storageBucket: "milove-e3236.firebasestorage.app",
  messagingSenderId: "562524842390",
  appId: "1:562524842390:web:d885583bcaedc6d571d5b7",
  measurementId: "G-BR6PTVJE35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();