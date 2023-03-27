// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRpNqLuRAPYY5AUYU_V2ziznG-F3oMq1o",
  authDomain: "thieves-110.firebaseapp.com",
  projectId: "thieves-110",
  storageBucket: "thieves-110.appspot.com",
  messagingSenderId: "617664810354",
  appId: "1:617664810354:web:4a200da9a6cf7d3d8d21eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);