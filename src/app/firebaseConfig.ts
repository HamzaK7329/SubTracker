// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClGqu_EfZIereqC0jyQiE5AhMp5no7-c0",
  authDomain: "subhawk-4c17d.firebaseapp.com",
  projectId: "subhawk-4c17d",
  storageBucket: "subhawk-4c17d.firebasestorage.app",
  messagingSenderId: "901899364997",
  appId: "1:901899364997:web:2d388189e4cfce28bc97ec",
  measurementId: "G-BKT4KE7T5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};