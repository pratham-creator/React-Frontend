import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmxxqHqCn43jQ8Qbtoi9YOinGuokjpFwU",
    authDomain: "placement-f842e.firebaseapp.com",
    projectId: "placement-f842e",
    storageBucket: "placement-f842e.appspot.com",
    messagingSenderId: "939086482456",
    appId: "1:939086482456:web:1593874c1490b2e2e3c76d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);
  export const googleAuthProvider=new GoogleAuthProvider();
  