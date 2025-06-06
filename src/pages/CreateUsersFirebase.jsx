import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";

export default function CreateUsersFirebase() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role") || "");
  }, []);

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
      password: "estudiante",
      docId: "estudiante",
      data: {
        rol: "student",
        materias: ["web1", "web2"],
        usuario: "estudiante",
        email: "estudiante@notes.com",
        name: "Estudiante",
      },
    },
  ];

  const handleCreate = async () => {
    setLoading(true);
    setMsg("");
    let created = [];
    let skipped = [];
    try {
      for (const user of usersToCreate) {
        let authExists = false;
        try {
          const methods = await fetchSignInMethodsForEmail(auth, user.email);
          authExists = methods && methods.length > 0;
        } catch (e) {
          authExists = false;
        }
        const docRef = doc(db, "usuarios", user.docId);
        const docSnap = await getDoc(docRef);
        const firestoreExists = docSnap.exists();
        if (!authExists) {
          try {
            await createUserWithEmailAndPassword(
              auth,
              user.email,
              user.password
            );
          } catch (e) {
            if (e.code === "auth/email-already-in-use") {
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
      setMsg(
        `Usuarios creados o actualizados: ${created.join(", ")}.
Usuarios ya existentes: ${skipped.join(", ")}.`
      );
    } catch (e) {
      setMsg("Error: " + (e.message || e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      {role === "teacher" || role === "admin" ? (
        <button
          onClick={handleCreate}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Creando..." : "Crear usuarios en Firebase"}
        </button>
      ) : (
        <div className="text-red-600 font-bold text-center mb-2">
          Acceso solo para profesor o admin
        </div>
      )}
      {msg && (
        <div className="text-center text-blue-700 font-semibold mt-2">
          {msg}
        </div>
      )}
      <div className="text-xs text-gray-500 mt-4 max-w-xs text-center">
        Este componente es solo para desarrollo. Crea los usuarios <b>profe</b>{" "}
        y <b>estudiante</b> en Firebase Auth y Firestore.
        <br />
        Puedes eliminarlo después de ejecutar una vez.
      </div>
    </div>
  );
}
