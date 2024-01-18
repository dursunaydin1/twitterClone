// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXn9JSvWygO34Ft7rhQ52gWfnA5tlnBQc",
  authDomain: "twitterclone-6dcfa.firebaseapp.com",
  projectId: "twitterclone-6dcfa",
  storageBucket: "twitterclone-6dcfa.appspot.com",
  messagingSenderId: "1065889869304",
  appId: "1:1065889869304:web:debbcf948299f1e5667a0d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export const db = getFirestore(app);
