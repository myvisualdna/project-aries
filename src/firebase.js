import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZOuBLajRuC4Kf2IZcp3676e-p-431Olw",
  authDomain: "aries-project-firebase.firebaseapp.com",
  databaseURL: "https://aries-project-firebase.firebaseio.com",
  projectId: "aries-project-firebase",
  storageBucket: "aries-project-firebase.appspot.com",
  messagingSenderId: "14576149994",
  appId: "1:14576149994:web:c23e291b5852e9117bbe93",
  measurementId: "G-3GV56VD8V3",
};

//Seeting up firebase's Firestore

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
