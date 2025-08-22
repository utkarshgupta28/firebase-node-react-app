// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (copy values from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyDK8mFkHT1gnZ6GhT1t25AhkvNHcpXOMPI",
  authDomain: "m3-assessment-proj.firebaseapp.com",
  projectId: "m3-assessment-proj",
  storageBucket: "m3-assessment-proj.firebasestorage.app",
  messagingSenderId: "335302678647",
  appId: "1:335302678647:web:ea82d4dbe03fdbae3bce72",
  measurementId: "G-0KRZRTPXYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services we need
export const auth = getAuth(app);
export const db = getFirestore(app);
