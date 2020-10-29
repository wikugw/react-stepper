import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC7aLqw0GAfcVh-NKZe-CD4c2JhYeYNpYM",
  authDomain: "stepper-b627e.firebaseapp.com",
  databaseURL: "https://stepper-b627e.firebaseio.com",
  projectId: "stepper-b627e",
  storageBucket: "stepper-b627e.appspot.com",
  messagingSenderId: "197970479438",
  appId: "1:197970479438:web:9a965e7775467f1269761f",
  measurementId: "G-5RFX6X9D17"
});

const db = firebaseConfig.firestore();

export default db;