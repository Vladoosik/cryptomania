// modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// constants
import { FIREBASE_CONFIG } from "../constants/FirebaseConfig";

const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.API_KEY,
  authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
  projectId: FIREBASE_CONFIG.PROJECT_ID,
  storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONFIG.MESSAGE_SEND_ID,
  appId: FIREBASE_CONFIG.APP_ID,
  measurementId: FIREBASE_CONFIG.MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const EmailAuthProvider = firebase.auth.EmailAuthProvider;
export const storage = getStorage();
export const db = getFirestore(app);
export const fb = firebase.firestore();
