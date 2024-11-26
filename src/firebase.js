// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG3V8UJWL1SD31k8lxDO1cVzOquPhjDSg",
  authDomain: "the-phone-booth.firebaseapp.com",
  databaseURL: "https://the-phone-booth-default-rtdb.firebaseio.com",
  projectId: "the-phone-booth",
  storageBucket: "the-phone-booth.firebasestorage.app",
  messagingSenderId: "48174825489",
  appId: "1:48174825489:web:43a934c53ab5dc9442f1b0",
  measurementId: "G-WVJSMMDF7Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { firebaseApp, database}