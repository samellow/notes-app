
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCP63_pTo6UIpvKYmTUgQ-_MBRuADEuHUA",
  authDomain: "notes-app-5b02b.firebaseapp.com",
  projectId: "notes-app-5b02b",
  storageBucket: "notes-app-5b02b.appspot.com",
  messagingSenderId: "29701934511",
  appId: "1:29701934511:web:3cff79f8039183ae08735a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")