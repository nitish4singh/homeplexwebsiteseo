import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId:"homeplexweb-c13be",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: "262149753416",
  appId: process.env.APP_ID,
  measurementId: "G-BXYCYQWMMD"
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);