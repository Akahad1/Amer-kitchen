// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrhV7mhRYP8y9bsQHoRfKck9kPiB6RINQ",
  authDomain: "amer-kitchen.firebaseapp.com",
  projectId: "amer-kitchen",
  storageBucket: "amer-kitchen.appspot.com",
  messagingSenderId: "41983579459",
  appId: "1:41983579459:web:1d8d0634e80d183f53cbf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;