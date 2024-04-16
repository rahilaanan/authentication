// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVkU-MKLrN6-_HhE1D3nSKlYMV-O98Ec",
  authDomain: "auht-new-project.firebaseapp.com",
  projectId: "auht-new-project",
  storageBucket: "auht-new-project.appspot.com",
  messagingSenderId: "999627733130",
  appId: "1:999627733130:web:a2b57d3db94212b0ecd573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;