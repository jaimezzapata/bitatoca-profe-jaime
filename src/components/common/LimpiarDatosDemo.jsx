import React, { useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const colecciones = ["materias", "temas", "notas"];

export default function LimpiarDatosDemo() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLimpiar = async () => {
    if (!window.confirm("¿Estás seguro de que quieres borrar TODAS las materias, temas y notas? Esta acción no se puede deshacer.")) return;
    setLoading(true);
    setMsg("");
    let totalBorrados = 0;
    try {
      for (const col of colecciones) {
        const snapshot = await getDocs(collection(db, col));
        const promesas = snapshot.docs.map((d) => deleteDoc(doc(db, col, d.id)));
        await Promise.all(promesas);
        totalBorrados += promesas.length;
      }
      setMsg(`¡Listo! Se borraron ${totalBorrados} documentos de materias, temas y notas.`);
    } catch (e) {
      setMsg("Error al borrar: " + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{border: '2px solid red', padding: 16, margin: 16, borderRadius: 8, background: '#fff0f0'}}>
      <h3 style={{color: 'red'}}>Limpiar Materias, Temas y Notas</h3>
      <button onClick={handleLimpiar} disabled={loading} style={{background: 'red', color: 'white', padding: '8px 16px', borderRadius: 4}}>
        {loading ? "Borrando..." : "BORRAR TODO"}
      </button>
      {msg && <p>{msg}</p>}
      <p style={{fontSize: 12, color: '#a00'}}>Esta acción es irreversible. Úsalo solo en entorno de pruebas/demo.</p>
    </div>
  );
}
