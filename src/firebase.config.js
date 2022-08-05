import { getFirestore } from 'firebase/app/firestore';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQmnYUe4l_UYFb-tt7Ge30s0liQM0mlew",
    authDomain: "mbuji3-market.firebaseapp.com",
    projectId: "mbuji3-market",
    storageBucket: "mbuji3-market.appspot.com",
    messagingSenderId: "158673866130",
    appId: "1:158673866130:web:210d0513b823f05258054b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
export const db = getFirestore()