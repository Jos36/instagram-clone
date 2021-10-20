// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwF8UfTj2Bd8_lekGfu6meKw_pZaytoyM",
  authDomain: "instagram-clone-84cfd.firebaseapp.com",
  projectId: "instagram-clone-84cfd",
  storageBucket: "instagram-clone-84cfd.appspot.com",
  messagingSenderId: "1075887223955",
  appId: "1:1075887223955:web:207d95d6a78af8c5e8c966",
  measurementId: "G-S7T04P4W6B",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
