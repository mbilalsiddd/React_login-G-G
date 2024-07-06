// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPQfxImVwsIYPSuqcMCSGSm1GVuFO7dN0",
  authDomain: "fir-gg-3cc79.firebaseapp.com",
  projectId: "fir-gg-3cc79",
  storageBucket: "fir-gg-3cc79.appspot.com",
  messagingSenderId: "84616463918",
  appId: "1:84616463918:web:5a18814306b878c96041bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
