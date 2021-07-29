import firebase from "firebase";
import "firebase/storage"

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCRaO7tSk-7o7LZ_qMkXw48KRZvp1Qu29I",
    authDomain: "crud-teste-1a17c.firebaseapp.com",
    projectId: "crud-teste-1a17c",
    storageBucket: "crud-teste-1a17c.appspot.com",
    messagingSenderId: "837186180816",
    appId: "1:837186180816:web:483709944ce13a830330d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();
  
  export default database;