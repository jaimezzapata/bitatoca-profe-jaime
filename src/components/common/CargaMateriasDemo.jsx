import React, { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

// Materias demo
const materiasDemo = [
  { id: "web1", nombre: "Web 1", descripcion: "Fundamentos de desarrollo web" },
  { id: "web2", nombre: "Web 2", descripcion: "Desarrollo web avanzado" },
  { id: "introduccion", nombre: "Introducción", descripcion: "Introducción a la informática" },
  { id: "logica", nombre: "Lógica", descripcion: "Lógica de programación" },
  { id: "metodologias", nombre: "Metodologías", descripcion: "Metodologías de desarrollo" },
  { id: "basesdedatos", nombre: "Bases de datos", descripcion: "Modelado y gestión de bases de datos" }
];

export default function CargaMateriasDemo() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handleCargar = async () => {
    setLoading(true);
    setOk(false);
    setError("");
    try {
      for (const mat of materiasDemo) {
        await setDoc(
          doc(db, "materias", mat.id),
          { nombre: mat.nombre, descripcion: mat.descripcion },
          { merge: true }
        );
      }
      setOk(true);
    } catch (e) {
      setError("Error al cargar: " + e.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={handleCargar}
        disabled={loading}
        className="w-full px-3 py-2 bg-blue-600 text-white rounded font-semibold shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-60 text-sm"
      >

      </button>
      {ok && <div className="text-green-600 mt-2 text-xs">¡Materias cargadas correctamente!</div>}
      {error && <div className="text-red-500 mt-2 text-xs">{error}</div>}
    </div>
  );
}
