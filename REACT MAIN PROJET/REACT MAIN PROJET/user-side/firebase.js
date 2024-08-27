// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxOJJxDOJOxMIsRn4GIrJ9G1XP2mS06qA",
  authDomain: "meesho-project-82107.firebaseapp.com",
  projectId: "meesho-project-82107",
  storageBucket: "meesho-project-82107.appspot.com",
  messagingSenderId: "230019220707",
  appId: "1:230019220707:web:a0587c60848f2e766e31d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

