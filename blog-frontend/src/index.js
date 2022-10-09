import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rqmEOmfCXSlvMkZWLrjTmWH9GQ0yrJg",
  authDomain: "my-react-blog-1.firebaseapp.com",
  projectId: "my-react-blog-1",
  storageBucket: "my-react-blog-1.appspot.com",
  messagingSenderId: "222411171413",
  appId: "1:222411171413:web:bab86d25deadaaefa3d6dc",
  measurementId: "G-1J3DV1DXD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
