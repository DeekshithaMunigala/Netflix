// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgDIlJlAbtEeGAxRWLfvJlfB5Z3g-8OtY",
  authDomain: "netflix-8d7a3.firebaseapp.com",
  projectId: "netflix-8d7a3",
  storageBucket: "netflix-8d7a3.appspot.com",
  messagingSenderId: "713465758480",
  appId: "1:713465758480:web:90e695975ceb6005f59b95",
  measurementId: "G-SY9E7JE3Y2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
