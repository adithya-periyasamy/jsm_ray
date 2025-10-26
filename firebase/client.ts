// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGdYfCCqIDtOe6NyiuvD5DRbZVO5Xnyes",
  authDomain: "prepwise-ray.firebaseapp.com",
  projectId: "prepwise-ray",
  storageBucket: "prepwise-ray.firebasestorage.app",
  messagingSenderId: "411365174563",
  appId: "1:411365174563:web:aa8c106b69fa8eabd6b096",
  measurementId: "G-FR0WR1PQGM",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
