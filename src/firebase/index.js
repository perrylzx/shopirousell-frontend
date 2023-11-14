import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut as signOutFromFirebase,
} from "firebase/auth";

// todo: put this in an env :P
const firebaseConfig = {
  apiKey: "AIzaSyB5ekTaBRrCyhFeHv5obezkOx2MQ0VYreo",
  authDomain: "shopirousell.firebaseapp.com",
  projectId: "shopirousell",
  storageBucket: "shopirousell.appspot.com",
  messagingSenderId: "418312629383",
  appId: "1:418312629383:web:149ea18f274e12b8581c22",
  measurementId: "G-WG4V14RKSD",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage();

const provider = new GoogleAuthProvider();
const signIn = () => signInWithPopup(auth, provider).then((result) => result);

const uploadProductImage = (file) => {
  const storageRef = ref(storage, `/images/${file.name}`);
  return uploadBytes(storageRef, file)
    .then((snapshot) => getDownloadURL(snapshot.ref))
    .then((url) => url);
};

const signOut = () => signOutFromFirebase(auth);

export default { app, auth, signIn, signOut, uploadProductImage };
