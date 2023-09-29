import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDdIr_sR4h2uCY85IYjYoqAw8G1xTRqQSc",
  authDomain: "chata-61406.firebaseapp.com",
  projectId: "chata-61406",
  storageBucket: "chata-61406.appspot.com",
  messagingSenderId: "322157274429",
  appId: "1:322157274429:web:ca8c961da1d6a6f8fd5154"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()