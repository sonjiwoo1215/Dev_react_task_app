// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCl6PBhL8_efy7O8GtYMK7Oc03y__icqk",
  authDomain: "react-task-app-17bb7.firebaseapp.com",
  projectId: "react-task-app-17bb7",
  storageBucket: "react-task-app-17bb7.firebasestorage.app",
  messagingSenderId: "152637504720",
  appId: "1:152637504720:web:57e1d2fbd12791feb932d5",
  measurementId: "G-QC4TG4XM3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);