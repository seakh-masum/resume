import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA10_Hne0PlOMyjpl3AMXVZWPczLyBJHaE",
  authDomain: "masum-cv.firebaseapp.com",
  databaseURL: "https://masum-cv.firebaseio.com",
  projectId: "masum-cv",
  storageBucket: "masum-cv.appspot.com",
  messagingSenderId: "733514146710",
  appId: "1:733514146710:web:556a863030a39819b673b7",
  measurementId: "G-1WQGXG27F3",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
