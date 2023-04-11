import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDUGFxKbG40c5kiBg44xAd5yxuE8-gJdPc",
  authDomain: "fir-auth-88d5c.firebaseapp.com",
  projectId: "fir-auth-88d5c",
  storageBucket: "fir-auth-88d5c.appspot.com",
  messagingSenderId: "590233100244",
  appId: "1:590233100244:web:ad02fb762d11bfd4f6c041",
  measurementId: "G-RMX5EETRB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };