import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKey,
  authDomain: "todos-auth-bf3d9.firebaseapp.com",
  projectId: "todos-auth-bf3d9",
  storageBucket: "todos-auth-bf3d9.appspot.com",
  messagingSenderId: "564755221452",
  appId: "1:564755221452:web:3aa0ada4a4196bbed2eb69",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
