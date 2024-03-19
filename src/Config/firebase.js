import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5IzYpp58NgTvrNrLXdpUmbmZ_Rqizk4E",
  authDomain: "documentproject-96b4b.firebaseapp.com",
  projectId: "documentproject-96b4b",
  storageBucket: "documentproject-96b4b.appspot.com",
  messagingSenderId: "120990533800",
  appId: "1:120990533800:web:70b7c878581aba794cda9d",
  measurementId: "G-GQDYZP48GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
