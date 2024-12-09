
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCiwBWuS1JBZzrsLhcgBGC9zl6ZOscVb0",
  authDomain: "life-journal.netlify.app",
  projectId: "react-cursos-b245f",
  storageBucket: "react-cursos-b245f.appspot.com",
  messagingSenderId: "1061214523475",
  appId: "1:1061214523475:web:13593b0894566d541cb6a6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);