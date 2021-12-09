import firebase from "firebase";
// authentication

import "firebase/auth";
// firestore database
import "firebase/firestore";
import "firebase/database";
// real time data base
import "firebase/storage";
// storage
import "firebase/functions";
// function
// hosting


const firebaseConfig = {
  apiKey: "AIzaSyB4H6Ktj6VdalwxQrvBldlGqK0uLJcI9z4",
  authDomain: "spotify-clone-4b92b.firebaseapp.com",
  projectId: "spotify-clone-4b92b",
  storageBucket: "spotify-clone-4b92b.appspot.com",
  messagingSenderId: "636513831260",
  appId: "1:636513831260:web:847354ef462e7fc9701999",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
