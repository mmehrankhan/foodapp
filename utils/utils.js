import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {
  getFirestore,
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvOIfQxccjzeLmCjJrrBniVBgot6UdJRE",
  authDomain: "first-project-1758d.firebaseapp.com",
  projectId: "first-project-1758d",
  storageBucket: "first-project-1758d.appspot.com",
  messagingSenderId: "800204461052",
  appId: "1:800204461052:web:790790660b2a4bef1bd879",
  measurementId: "G-8DFZVQ4ESC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  ref,
  uploadBytes,
  getDownloadURL,
};