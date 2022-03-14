// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOLsZnOtF5l6NT_07OOSoZ6fvU-Wdecgw",
  authDomain: "sql-demo-a6236.firebaseapp.com",
  projectId: "sql-demo-a6236",
  storageBucket: "sql-demo-a6236.appspot.com",
  messagingSenderId: "594171274809",
  appId: "1:594171274809:web:a2b7a8175256e07bfc8fe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, app };
