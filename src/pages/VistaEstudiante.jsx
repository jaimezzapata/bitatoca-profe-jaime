import React, { useEffect, useState } from "react";
import { FiBookOpen, FiFileText, FiBook } from "react-icons/fi";
import { auth, db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function VistaEstudiante() {
  const [materias, setMaterias] = useState([]);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
  const [notas, setNotas] = useState([]);
  const [docs, setDocs] = useState([]);
  const [loadingNotas, setLoadingNotas] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchMaterias(user);
      } else {
        setMaterias([]);
        setNombre("");
        setLoading(false);
        console.log("[VistaEstudiante] No hay usuario autenticado");
      }
    });
    return () => unsubscribe();
  }, []);

  async function fetchMaterias(user) {
    setLoading(true);
    try {
      let docId = "estudiante";
      if (user.email && user.email !== "estudiante@notes.com") {
        docId = user.email.split("@")[0];
      }
      console.log("[VistaEstudiante] docId usado:", docId);
      const docRef = doc(db, "usuarios", docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const materiaIds = data.materias || [];
        setNombre(data.name || "Estudiante");
        console.log("[VistaEstudiante] materias del usuario:", materiaIds);
        if (materiaIds.length > 0) {
          const materiasRef = collection(db, "materias");
          const materiasSnap = await getDocs(materiasRef);
          const allMateriasIds = materiasSnap.docs.map(doc => doc.id);
          console.log("[VistaEstudiante] IDs de todas las materias en la colección:", allMateriasIds);
          // Solo las materias que están en el array del usuario
          const materiasFiltradas = materiasSnap.docs
            .filter(doc => materiaIds.includes(doc.id))
            .map(doc => ({ id: doc.id, ...doc.data() }));
          setMaterias(materiasFiltradas);
        } else {
          setMaterias([]);
        }
      } else {
        console.log("[VistaEstudiante] No existe el documento de usuario para docId:", docId);
        setMaterias([]);
      }
    } catch (e) {
      console.error("[VistaEstudiante] Error en fetchMaterias:", e);
      setMaterias([]);
    }
    setLoading(false);
  }

  // Cargar notas y docs al seleccionar materia
  useEffect(() => {
    async function fetchNotasYDocs() {
      if (!materiaSeleccionada) return;
      setLoadingNotas(true);
      try {
        // Notas
        const notasQuery = query(
          collection(db, "notas"),
          where("materia", "==", materiaSeleccionada),
          where("usuario", "==", auth.currentUser?.email?.split("@")[0] || "estudiante")
        );
        const notasSnap = await getDocs(notasQuery);
        setNotas(notasSnap.docs.map(d => d.data()));
        // Documentación
        const docsQuery = query(
          collection(db, "documentacion"),
          where("materia", "==", materiaSeleccionada)
        );
        const docsSnap = await getDocs(docsQuery);
        setDocs(docsSnap.docs.map(d => d.data()));
      } catch (e) {
        setNotas([]);
        setDocs([]);
      }
      setLoadingNotas(false);
    }
    fetchNotasYDocs();
  }, [materiaSeleccionada]);

  // Colores e íconos demo para materias
  const colores = [
    "bg-green-100 border-green-200",
    "bg-yellow-100 border-yellow-200",
    "bg-pink-100 border-pink-200",
    "bg-blue-100 border-blue-200",
    "bg-purple-100 border-purple-200"
  ];
  const iconos = [FiBook, FiBookOpen, FiFileText];

  // Cierre de sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {}
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 p-0 md:p-8 relative">
      {/* Fondo decorativo de post-its */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 border-4 border-yellow-300 rounded-xl shadow-xl rotate-[-8deg] opacity-60" />
        <div className="absolute top-32 right-16 w-28 h-28 bg-pink-200 border-4 border-pink-300 rounded-xl shadow-xl rotate-[7deg] opacity-50" />
        <div className="absolute bottom-16 left-24 w-20 h-20 bg-blue-200 border-4 border-blue-300 rounded-xl shadow-xl rotate-[3deg] opacity-50" />
      </div>
      {/* Header */}
      <header className="w-full max-w-3xl flex flex-col items-center gap-2 mt-8 mb-8">
        <FiBookOpen className="text-blue-500" size={40} />
        <h1 className="text-3xl font-extrabold text-blue-700">¡Hola, {nombre || "estudiante"}!</h1>
        <span className="text-yellow-600 font-semibold text-lg">Bitácora: Profe Jaime</span>
        <p className="text-gray-600 text-base text-center mt-2">
          Aquí puedes consultar tus notas y documentación de clase.<br />
          <span className="text-blue-400">Solo lectura</span>
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-bold shadow hover:bg-red-700 transition-colors"
        >
          Cerrar sesión
        </button>
      </header>
      {/* Selección de materia */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center drop-shadow">Selecciona una materia</h2>
      {loading ? (
        <div className="text-blue-400 text-lg font-bold animate-pulse mb-8">Cargando materias...</div>
      ) : (
        <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
          {materias.length === 0 ? (
            <div className="text-red-500 font-semibold text-center w-full">No tienes materias asignadas. Contacta al profesor.</div>
          ) : (
            materias.map((mat, i) => {
              const Icon = iconos[i % iconos.length];
              return (
                <button
                  key={mat.id}
                  onClick={() => setMateriaSeleccionada(mat.id)}
                  className={`relative aspect-square w-[38vw] max-w-[180px] min-w-[110px] min-h-[110px] max-h-[180px] rounded-xl shadow-xl ${colores[i % colores.length]} border-4 font-bold text-lg md:text-xl text-blue-900 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-2 hover:z-20 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blue-300 ${materiaSeleccionada === mat.id ? "ring-4 ring-blue-400 scale-105 z-20" : ""}`}
                  style={{
                    transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`
                  }}
                  aria-label={`Seleccionar materia ${mat.nombre}`}
                >
                  <Icon className="text-2xl md:text-3xl mb-2 drop-shadow-sm" aria-hidden="true" />
                  <span className="drop-shadow-lg text-center w-full px-2 pointer-events-none select-none">{mat.nombre}</span>
                  <span className="absolute top-2 right-4 text-yellow-400 text-xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 select-none">★</span>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">Ver notas</span>
                </button>
              );
            })
          )}
        </div>
      )}
      <div className="mt-2 text-center text-blue-400 text-sm animate-fadein-slow mb-6">
        Haz clic en una materia para ver tus notas y documentación
      </div>
      {/* Notas y documentación de la materia seleccionada */}
      {materiaSeleccionada && (
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Notas */}
          <div className="bg-yellow-100 border-4 border-yellow-200 rounded-xl shadow-lg p-6 flex flex-col min-h-[180px]">
            <FiFileText className="text-yellow-400 mb-2" size={28} />
            <h2 className="font-bold text-lg text-yellow-800 mb-2">Notas de clase</h2>
            {loadingNotas ? (
              <div className="text-yellow-400 animate-pulse">Cargando notas...</div>
            ) : notas.length > 0 ? (
              <ul className="text-yellow-900 text-sm space-y-2">
                {notas.map((nota, idx) => (
                  <li key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 rounded px-3 py-2 shadow-sm">
                    {nota.texto || nota.titulo || "Nota sin título"}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-yellow-500">No hay notas para esta materia.</div>
            )}
          </div>
          {/* Documentación */}
          <div className="bg-pink-100 border-4 border-pink-200 rounded-xl shadow-lg p-6 flex flex-col min-h-[180px]">
            <FiBookOpen className="text-pink-400 mb-2" size={28} />
            <h2 className="font-bold text-lg text-pink-800 mb-2">Documentación</h2>
            {loadingNotas ? (
              <div className="text-pink-400 animate-pulse">Cargando documentación...</div>
            ) : docs.length > 0 ? (
              <div className="space-y-2">
                {docs.map((docu, idx) => (
                  <div key={idx} className="bg-pink-50 rounded px-3 py-2 shadow-sm font-semibold text-pink-700">
                    {docu.titulo || "Documento"}
                    {docu.texto && (
                      <div className="text-pink-900 font-normal text-xs mt-1 whitespace-pre-line">{docu.texto}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-pink-500">No hay documentación para esta materia.</div>
            )}
          </div>
        </div>
      )}
      <div className="text-xs text-gray-400 text-center mt-4">
        Vista solo lectura para estudiantes. <b>¡Sigue aprendiendo!</b>
      </div>
    </div>
  );
}
