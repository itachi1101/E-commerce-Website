import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxsUdnu7HtJpno4d00WvX7RY8a5n7hUA8",
  authDomain: "e-commerce-f8e69.firebaseapp.com",
  projectId: "e-commerce-f8e69",
  storageBucket: "e-commerce-f8e69.appspot.com",
  messagingSenderId: "1027863521535",
  appId: "1:1027863521535:web:bc17bcd97a94caee6784ca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
