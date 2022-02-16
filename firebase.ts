// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-z1uq8DNREKJRa4syC1zrjh-8H_vR1N0",
  authDomain: "nextjsproject-1314d.firebaseapp.com",
  databaseURL: "https://nextjsproject-1314d-default-rtdb.firebaseio.com",
  projectId: "nextjsproject-1314d",
  storageBucket: "nextjsproject-1314d.appspot.com",
  messagingSenderId: "819594833282",
  appId: "1:819594833282:web:c24d0b34e04f5958d5739b",
  measurementId: "G-QTV33RRMC1",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase);
