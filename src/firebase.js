// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK2307_RIt2eavQoRr2HynYukRKnv30KE",
  authDomain: "microproyecto-49b5b.firebaseapp.com",
  projectId: "microproyecto-49b5b",
  storageBucket: "microproyecto-49b5b.appspot.com",
  messagingSenderId: "537357844493",
  appId: "1:537357844493:web:a38a7bd8c3883190f9d544",
  measurementId: "G-TW40H4052F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);