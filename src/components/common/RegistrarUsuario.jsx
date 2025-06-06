import React, { useState, useEffect } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { FiUser, FiEdit, FiPlus, FiCheck, FiXCircle, FiBook, FiBookOpen } from "react-icons/fi";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegistrarUsuario({ onClose }) {
  const [usuarioId, setUsuarioId] = useState("");
  const [nombre, setNombre] = useState("");
  const [materias, setMaterias] = useState([]);
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);
  const [status, setStatus] = useState("");
  const [loadingMaterias, setLoadingMaterias] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    async function fetchMaterias() {
      setLoadingMaterias(true);
      try {
        const snap = await getDocs(collection(db, "materias"));
        setMaterias(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        setMaterias([]);
      }
      setLoadingMaterias(false);
    }
    fetchMaterias();
  }, []);

  // Cargar usuarios existentes
  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const snap = await getDocs(collection(db, "usuarios"));
        setUsuarios(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        setUsuarios([]);
      }
    }
    fetchUsuarios();
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usuarioId || !nombre || materiasSeleccionadas.length === 0) {
      setStatus("Completa todos los campos y selecciona al menos una materia.");
      return;
    }
    setStatus("Guardando usuario...");
    const auth = getAuth();
    let email = usuarioId;
    let usuarioPuro = usuarioId;
    if (!email.includes("@")) {
      email = usuarioId + "@bitacora.com";
    } else {
      // Si el usuarioId ya tiene @, el usuario puro es igual
      usuarioPuro = usuarioId.split("@")[0];
    }
    const password = usuarioId;
    let creadoEnAuth = false;
    if (!editando) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        creadoEnAuth = true;
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          // Ya existe en Auth, continuar
        } else {
          setStatus("Error al crear usuario en Auth: " + err.message);
          return;
        }
      }
    }
    try {
      await setDoc(doc(db, "usuarios", usuarioPuro), {
        name: nombre,
        materias: materiasSeleccionadas,
        rol: "estudiante",
        email: email,
        usuario: usuarioPuro
      });
      setStatus(editando ? "Usuario actualizado correctamente." : (creadoEnAuth ? `Usuario registrado y habilitado para acceder. Contraseña: ${usuarioId}` : "Usuario registrado. Ya podía acceder."));
      handleNuevo();
    } catch (e) {
      setStatus("Error: " + e.message);
    }
  };

  const handleMateriaChange = (id) => {
    setMateriasSeleccionadas(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleEditar = (usuario) => {
    setEditando(usuario.id);
    setUsuarioId(usuario.id);
    setNombre(usuario.name || "");
    setMateriasSeleccionadas(usuario.materias || []);
    setStatus("");
  };

  const handleNuevo = () => {
    setEditando(null);
    setUsuarioId("");
    setNombre("");
    setMateriasSeleccionadas([]);
    setStatus("");
  };

  // Detectar usuario logueado (por id/email guardado en localStorage)
  const usuarioActualId = localStorage.getItem("usuario") || localStorage.getItem("user") || localStorage.getItem("email") || "";
  const esEdicionPropia = editando && (editando === usuarioActualId || usuarioId === usuarioActualId);

  // Paleta de colores tipo post-it para materias
  const coloresPostit = [
    "bg-yellow-100 border-yellow-300 text-yellow-900",
    "bg-pink-100 border-pink-300 text-pink-900",
    "bg-green-100 border-green-300 text-green-900",
    "bg-blue-100 border-blue-300 text-blue-900",
    "bg-purple-100 border-purple-300 text-purple-900",
    "bg-orange-100 border-orange-300 text-orange-900"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-60 backdrop-blur-sm" onClick={e => {
      if (e.target === e.currentTarget && typeof onClose === 'function') onClose();
    }}>
      <div className="max-w-lg w-full mt-10 p-7 bg-white rounded-2xl shadow-lg border border-gray-200 relative flex flex-col items-center gap-4" style={{ minWidth: 340 }}>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none transition-transform hover:scale-110"
          onClick={e => { if (typeof onClose === 'function') onClose(); }}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h1 className="text-xl font-bold text-gray-800 mb-2 text-center flex items-center gap-2">
          <span className="inline-block bg-gray-100 text-gray-500 rounded-full px-2 py-1 text-base"><FiUser /></span>
          Gestión de usuarios
        </h1>
        <p className="text-gray-500 mb-4 text-sm text-center">Selecciona un usuario para editar o crea uno nuevo.</p>
        {/* Selector de usuario para editar o crear nuevo */}
        <div className="mb-3 w-full">
          <label className="block text-gray-700 font-medium mb-1">Usuarios</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-blue-300 focus:border-blue-400 bg-white text-gray-800 text-sm shadow-sm"
            value={editando || ""}
            onChange={e => {
              if (e.target.value === "") {
                handleNuevo();
              } else {
                const u = usuarios.find(u => u.id === e.target.value);
                if (u) handleEditar(u);
              }
            }}
          >
            <option value="">➕ Nuevo usuario</option>
            {usuarios.filter(u => !u.rol || u.rol === "estudiante").map(u => (
              <option key={u.id} value={u.id}>{u.name || u.id} ({u.rol || "estudiante"})</option>
            ))}
          </select>
        </div>
        {/* Formulario de alta/edición */}
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          {/* Nota UX para el admin */}
          <div className="mb-2 text-xs text-blue-500 bg-blue-50 border border-blue-100 rounded p-2">
            El usuario podrá iniciar sesión usando su <b>usuario</b> (<span className="font-mono">{usuarioId || 'usuario'}</span>) y la contraseña por defecto <b>{usuarioId || 'usuario'}</b>.
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">ID de usuario</label>
            <input
              type="text"
              value={usuarioId}
              onChange={e => setUsuarioId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300 text-gray-800 bg-white placeholder:text-gray-300 text-sm shadow-sm"
              placeholder="Ej: zapataval2304"
              required
              disabled={!!editando}
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300 text-gray-800 bg-white placeholder:text-gray-300 text-sm shadow-sm"
              placeholder="Nombre completo"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Materias a asignar</label>
            {loadingMaterias ? (
              <div className="text-gray-400">Cargando materias...</div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {materias.map((mat, i) => (
                  <button
                    key={mat.id}
                    type="button"
                    className={`w-[140px] h-[44px] px-3 py-2 rounded-lg font-medium border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-200 shadow-sm flex items-center gap-2 justify-center
                      ${coloresPostit[i % coloresPostit.length]}
                      ${materiasSeleccionadas.includes(mat.id) ? "ring-2 ring-yellow-400" : "hover:bg-yellow-50"}`}
                    style={{ boxShadow: materiasSeleccionadas.includes(mat.id) ? '0 2px 8px #f7e07d' : undefined }}
                    onClick={() => handleMateriaChange(mat.id)}
                  >
                    {i % 2 === 0 ? <FiBook className="text-base" /> : <FiBookOpen className="text-base" />}
                    {materiasSeleccionadas.includes(mat.id) ? "✓ " : ""}{mat.nombre}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-2 text-xs text-gray-400">Haz clic en una materia para asignar o quitar acceso.</div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-md shadow-sm transition-colors text-base mt-2 flex items-center justify-center gap-2"
          >
            <FiCheck /> {editando ? "Guardar cambios" : "Registrar usuario"}
          </button>
          {status && (
            <div className={`mt-2 text-center font-medium ${status.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>{status}</div>
          )}
        </form>
      </div>
    </div>
  );
}
