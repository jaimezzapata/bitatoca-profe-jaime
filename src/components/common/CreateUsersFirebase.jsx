import React, { useState } from "react";
import { auth, db } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

// Usuarios demo
const usersToCreate = [
  {
    email: "zapataval2304@gmail.com",
    password: "Developer2304",
    docId: "admin",
    data: {
      rol: "teacher",
      email: "zapataval2304@gmail.com",
      usuario: "admin",
      name: "Jaime Zapata",
    },
  },
  {
    email: "estudiante@notes.com",
    password: "estudiante1",
    docId: "estudiante",
    data: {
      rol: "student",
      materias: ["web1", "web2"],
      usuario: "estudiante",
      email: "estudiante@notes.com",
      name: "Estudiante",
    },
  },
  // Puedes agregar más usuarios demo aquí si lo deseas
];

export default function CreateUsersFirebase() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleCargar = async () => {
    setLoading(true);
    setOk(false);
    setError("");
    setMsg("");
    let created = [];
    let skipped = [];
    try {
      for (const user of usersToCreate) {
        let authExists = false;
        try {
          // Verifica si el usuario ya existe en Auth
          const { fetchSignInMethodsForEmail } = await import("firebase/auth");
          const methods = await fetchSignInMethodsForEmail(auth, user.email);
          authExists = methods && methods.length > 0;
        } catch (e) {
          authExists = false;
        }
        // Verifica si el usuario ya existe en Firestore
        const docRef = doc(db, "usuarios", user.docId);
        const docSnap = await getDoc(docRef);
        const firestoreExists = docSnap.exists();
        if (!authExists) {
          try {
            await createUserWithEmailAndPassword(auth, user.email, user.password);
          } catch (e) {
            if (e.code === "auth/email-already-in-use") {
              // Ya existe
            } else {
              throw e;
            }
          }
        }
        if (!firestoreExists) {
          await setDoc(docRef, user.data);
        }
        if (!authExists || !firestoreExists) {
          created.push(user.data.usuario);
        } else {
          skipped.push(user.data.usuario);
        }
      }
      setOk(true);
      setMsg(
        `Usuarios creados o actualizados: ${created.join(", ")}\nUsuarios ya existentes: ${skipped.join(", ")}.`
      );
    } catch (e) {
      setError("Error: " + (e.message || e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={handleCargar}
        disabled={loading}
        className="w-full px-3 py-2 bg-blue-600 text-white rounded font-semibold shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-60 text-sm"
      >
      </button>
      {ok && <div className="text-green-600 mt-2 text-xs">¡Usuarios cargados correctamente!</div>}
      {error && <div className="text-red-500 mt-2 text-xs">{error}</div>}
      {msg && <div className="text-blue-700 mt-2 text-xs whitespace-pre-line">{msg}</div>}
    </div>
  );
}
