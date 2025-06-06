import { auth, db } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Servicio de autenticación

// Login para el profesor (email y password)
export const loginProfe = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Login para estudiante: ahora usa Firebase Auth igual que el admin
export const loginEstudiante = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
