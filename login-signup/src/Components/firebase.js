// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqO-o_r_0Z3MhpA5kZlCS7R-WW1nGBSKw",
  authDomain: "login-signup-32220.firebaseapp.com",
  projectId: "login-signup-32220",
  storageBucket: "login-signup-32220.appspot.com",
  messagingSenderId: "152083847966",
  appId: "1:152083847966:web:c2a6c5f9bee95698c2870f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

