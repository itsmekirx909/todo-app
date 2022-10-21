// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSeLNTAth5W4rF4_jGL-qEnyTeOeLAewk",
  authDomain: "todoapporiginal.firebaseapp.com",
  projectId: "todoapporiginal",
  storageBucket: "todoapporiginal.appspot.com",
  messagingSenderId: "1015826060881",
  appId: "1:1015826060881:web:219739ffd759fe28ff0a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app