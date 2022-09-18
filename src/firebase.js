import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// config firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxhTJ8-qTzIWDqZLMmRVEmWcZ2FU5S4XQ",
  authDomain: "calendar-task-tracker.firebaseapp.com",
  projectId: "calendar-task-tracker",
  storageBucket: "calendar-task-tracker.appspot.com",
  messagingSenderId: "707170500113",
  appId: "1:707170500113:web:d06b3bde14005112f0bbb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const app = null;
// const db = null;
// async function initFirebase() {
//   app = initializeApp(firebaseConfig);
//   db = getFirestore(app);
// }
// initFirebase();