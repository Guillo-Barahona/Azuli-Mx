import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMXFJ3_NEChBzpLo6dPtQZDtpP__EnHQU",
  authDomain: "azuli-mx.firebaseapp.com",
  projectId: "azuli-mx",
  storageBucket: "azuli-mx.appspot.com",
  messagingSenderId: "267203869854",
  appId: "1:267203869854:web:589eb199603328e5308f8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

