import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBghX8Pn0yLflNKt-HxIJSqUetAA4Cd35M",
  authDomain: "homeplex-3b1ff.firebaseapp.com",
  projectId: "homeplex-3b1ff",
  storageBucket: "homeplex-3b1ff.appspot.com",
  messagingSenderId: "773626279609",
  appId: "1:773626279609:web:6f8f67086cccf2fdbfcd68",
  measurementId: "G-P7R0HXD9Y7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

