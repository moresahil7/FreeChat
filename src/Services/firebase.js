import react from "react";
// import * as firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyAOhTCU5lhARSI7tNu1c4acTqYSjdH-bHA",
  authDomain: "chatapp-23256.firebaseapp.com",
  projectId: "chatapp-23256",
  storageBucket: "chatapp-23256.appspot.com",
  messagingSenderId: "349348667028",
  appId: "1:349348667028:web:47c5c68eabe87399759e81",
  measurementId: "G-PJLJYCD4CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};


