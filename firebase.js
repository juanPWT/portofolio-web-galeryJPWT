import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqw_np0v_N3beQo8GzAYH5u0qju8H4_mw",
  authDomain: "commission-jpwt.firebaseapp.com",
  projectId: "commission-jpwt",
  storageBucket: "commission-jpwt.firebasestorage.app",
  messagingSenderId: "567188483315",
  appId: "1:567188483315:web:11138eb18a5ccac5e05b86",
  measurementId: "G-YWEEHEDS61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, doc, setDoc, getDoc}
