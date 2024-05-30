import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCddKCm8bX6bLn3z8EVO4mqfDVN5l2HEuM",
  authDomain: "telemdicine-platform.firebaseapp.com",
  projectId: "telemdicine-platform",
  storageBucket: "telemdicine-platform.appspot.com",
  messagingSenderId: "1097953555716",
  appId: "1:1097953555716:web:aabe40d8ffa4870fb70c51",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
