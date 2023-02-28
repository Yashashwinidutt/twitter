 // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import{getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ,
  authDomain: "twitter-13fcf.firebaseapp.com",
  projectId: "twitter-13fcf",
  storageBucket: "twitter-13fcf.appspot.com",
  messagingSenderId: "731629346413",
  appId: "1:731629346413:web:ee7d8ee410f7103a1ae964"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();
export{app, db, storage};