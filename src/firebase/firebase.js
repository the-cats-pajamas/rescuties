// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBs2p_-Ws5IN6xNjz_Qy8wR5luworSoMUY",
    authDomain: "rescuties-401d39.firebaseapp.com",
    databaseURL: "https://rescuties-401d39-default-rtdb.firebaseio.com",
    projectId: "rescuties-401d39",
    storageBucket: "rescuties-401d39.appspot.com",
    messagingSenderId: "183954036195",
    appId: "1:183954036195:web:125280c02a4ca9dc25fcd6",
    measurementId: "G-T1M71JYWCX"
  };

  
firebase.initializeApp(firebaseConfig);

  const Auth = firebase.auth();
  const database = firebase.database();

  export { Auth, database };