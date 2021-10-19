import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
