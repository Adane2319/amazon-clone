import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcN4MUmYl9HKKmHiQtLerzsiJyeN2rsNo",
  authDomain: "clone-b52bb.firebaseapp.com",
  projectId: "clone-b52bb",
  storageBucket: "clone-b52bb.appspot.com",
  messagingSenderId: "433813703246",
  appId: "1:433813703246:web:fe9bfb02a93a6eb80e911f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()