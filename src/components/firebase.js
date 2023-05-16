import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIvwtC3dJn1BmoSm7ije4xZctGbQJbjmI",
  authDomain: "investique-100b7.firebaseapp.com",
  projectId: "investique-100b7",
  storageBucket: "investique-100b7.appspot.com",
  messagingSenderId: "1018000221745",
  appId: "1:1018000221745:web:7e9e1172b30967a4c8d710"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
