// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC464cOHLQoAjke1lXpal91tYjRfh_aKwk",
  authDomain: "noble-airport-393901.firebaseapp.com",
  projectId: "noble-airport-393901",
  storageBucket: "noble-airport-393901.appspot.com",
  messagingSenderId: "572198833453",
  appId: "1:572198833453:web:787f5dc31338c4ddc6d7a4",
  measurementId: "G-3BSJDXZM39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };