// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public
// danger - do not share public



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBhYyAfSRapy0Myuvc0PnNiN2PTNCinko",
  authDomain: "auction-gallery-c02c6.firebaseapp.com",
  projectId: "auction-gallery-c02c6",
  storageBucket: "auction-gallery-c02c6.firebasestorage.app",
  messagingSenderId: "607497420631",
  appId: "1:607497420631:web:3a08af7ef5c2a4af020812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);