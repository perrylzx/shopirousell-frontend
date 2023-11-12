// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ekTaBRrCyhFeHv5obezkOx2MQ0VYreo",
  authDomain: "shopirousell.firebaseapp.com",
  projectId: "shopirousell",
  storageBucket: "shopirousell.appspot.com",
  messagingSenderId: "418312629383",
  appId: "1:418312629383:web:149ea18f274e12b8581c22",
  measurementId: "G-WG4V14RKSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export default { app, auth };
