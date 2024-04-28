// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJojvutRtdu9A-CdDRFygi9EWlbdHYBa8",
  authDomain: "coffee-shop-75d51.firebaseapp.com",
  projectId: "coffee-shop-75d51",
  storageBucket: "coffee-shop-75d51.appspot.com",
  messagingSenderId: "914737837207",
  appId: "1:914737837207:web:68de0b516885f5840de5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app