// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65NtL-4oiDavyl5xVV-5sn0MM_jG2x2o",
  authDomain: "chat-room-app-js-a2cf9.firebaseapp.com",
  projectId: "chat-room-app-js-a2cf9",
  storageBucket: "chat-room-app-js-a2cf9.appspot.com",
  messagingSenderId: "456820063100",
  appId: "1:456820063100:web:4b7bdd404a408e89e3c2f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
