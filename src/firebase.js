import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE1ip6NQycu9oTUS56OhW1c4w8lOa2uuo",
  authDomain: "tourney-dev-44ed6.firebaseapp.com",
  projectId: "tourney-dev-44ed6",
  storageBucket: "tourney-dev-44ed6.appspot.com",
  messagingSenderId: "129450638668",
  appId: "1:129450638668:web:7579d759bc821937e3a3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;