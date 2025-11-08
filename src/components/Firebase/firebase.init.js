// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGefl01AK5WNrvfhZ5KpHOutdynZP2z4",
  authDomain: "travel-ease-18d05.firebaseapp.com",
  projectId: "travel-ease-18d05",
  storageBucket: "travel-ease-18d05.firebasestorage.app",
  messagingSenderId: "234602615481",
  appId: "1:234602615481:web:e8eb331ef5696a9e894168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);