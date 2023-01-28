// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98DCP-5VIhu-iN11IoQTypqWLBalMiZo",
  authDomain: "coviddetectorcmu.firebaseapp.com",
  databaseURL: "https://coviddetectorcmu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coviddetectorcmu",
  storageBucket: "coviddetectorcmu.appspot.com",
  messagingSenderId: "157626340197",
  appId: "1:157626340197:web:ed74a2f6dd0e7dcba9478c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);