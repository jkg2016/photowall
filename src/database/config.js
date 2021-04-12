import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBZZXuAmCyc4V9pMDFZc2dkjxHqcYWIgRQ",
  authDomain: "photowall-fb3f8.firebaseapp.com",
  databaseURL: "https://photowall-fb3f8-default-rtdb.firebaseio.com",
  projectId: "photowall-fb3f8",
  storageBucket: "photowall-fb3f8.appspot.com",
  messagingSenderId: "699293903271",
  appId: "1:699293903271:web:fa2896c66e25e16745ae82",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
