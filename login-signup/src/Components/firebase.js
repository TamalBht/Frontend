// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv5nslWAHg5mytxxLsZrzb64qBow1hZh8",
  authDomain: "login-signup-b1f56.firebaseapp.com",
  projectId: "login-signup-b1f56",
  storageBucket: "login-signup-b1f56.appspot.com",
  messagingSenderId: "176109019926",
  appId: "1:176109019926:web:89aa81d7585bc684672637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
