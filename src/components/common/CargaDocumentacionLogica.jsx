import React, { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function CargaDocumentacionLogica() {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handleCargar = async (e) => {
    e.preventDefault();
    setOk(false);
    setError("");
    try {
      await addDoc(collection(db, "documentacion"), {
        materia: "Logica",
        titulo,
        texto,
        fecha: new Date().toISOString(),
      });
      setOk(true);
      setTitulo("");
      setTexto("");
    } catch (e) {
      setError("Error al cargar: " + e.message);
    }
  };

  return (
    <form onSubmit={handleCargar} className="w-full flex flex-col items-center gap-2">
      <span className="text-pink-700 font-semibold text-base mb-1">Cargar Documentación para Lógica</span>
      <input
        className="w-full px-3 py-2 border rounded text-sm"
        placeholder="Título del documento"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <textarea
        className="w-full px-3 py-2 border rounded text-sm"
        placeholder="Texto o contenido"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        rows={4}
        required
      />
      <button
        type="submit"
        className="w-full px-3 py-2 bg-pink-600 text-white rounded font-semibold shadow-sm hover:bg-pink-700 transition-colors text-sm"
      >
        Cargar documentación
      </button>
      {ok && <div className="text-green-600 mt-1 text-xs">¡Documentación cargada!</div>}
      {error && <div className="text-red-500 mt-1 text-xs">{error}</div>}
    </form>
  );
}
