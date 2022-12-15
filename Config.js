import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdkExxhtSdOopS1Zksu8sf-Celwfvk3j4",
  authDomain: "certamen2-189b0.firebaseapp.com",
  projectId: "certamen2-189b0",
  storageBucket: "certamen2-189b0.appspot.com",
  messagingSenderId: "327036033272",
  appId: "1:327036033272:web:b4e073d6dfe68fb833030d",
  measurementId: "G-X2SHCVFZ8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);