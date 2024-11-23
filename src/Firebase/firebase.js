import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  updateDoc, 
  deleteDoc, 
  addDoc, 
  where, 
  onSnapshot 
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE9WgrsSO4LEN0mk6bbM3Tkq_NKDAM2TU",
  authDomain: "polisofia-app.firebaseapp.com",
  projectId: "polisofia-app",
  storageBucket: "polisofia-app.appspot.com", // Nota: "appspot.com" en lugar de "firebasestorage.app"
  messagingSenderId: "899648572610",
  appId: "1:899648572610:web:a6ed341f7678b9d13c7f5b",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Usar `app` como argumento
export const auth = getAuth(app);    // Usar `app` como argumento
export const storage = getStorage(app); // Usar `app` como argumento

// Configurar persistencia
setPersistence(auth, browserLocalPersistence);

// Exportar funciones de Firestore y Auth
export {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  updateDoc,
  deleteDoc,
  addDoc,
  where,
  onSnapshot,
} from "firebase/firestore";

export {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
