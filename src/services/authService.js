import { auth, db } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Servicio de autenticación

// Login para el profesor (email y password)
export const loginProfe = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Login para estudiante: verifica si la contraseña genérica existe para el grupo
export const loginEstudiante = async (grupo, password) => {
  const gruposRef = collection(db, 'grupos');
  const q = query(gruposRef, where('nombre', '==', grupo), where('password', '==', password));
  const snapshot = await getDocs(q);
  return !snapshot.empty; // true si existe el grupo con esa contraseña
};
