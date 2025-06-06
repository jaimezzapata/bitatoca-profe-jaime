import React, { useEffect, useState } from "react";
import CreateUsersFirebase from "./CreateUsersFirebase";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebaseConfig";

const CargaInicialPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");

  // Estado para mensajes y loading del botón de recarga
  const [reloadMsg, setReloadMsg] = useState("");
  const [reloadLoading, setReloadLoading] = useState(false);

  // Lógica de usuarios a crear (idéntica a CreateUsersFirebase)
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
    {
      email: "regular@notes.com",
      password: "estudiante1",
      docId: "estudianteRegular",
      data: {
        rol: "student",
        materias: [],
        usuario: "regular",
        email: "regular@notes.com",
        name: "Estudiante Regular",
        loginType: "usuario",
      },
    },
    {
      email: "empresarial@notes.com",
      password: "estudiante1",
      docId: "empresarial",
      data: {
        rol: "student",
        materias: [],
        usuario: "empresarial",
        email: "empresarial@notes.com",
        name: "Estudiante Empresarial",
        loginType: "usuario",
      },
    },
    {
      email: "front@notes.com",
      password: "estudiante1",
      docId: "estudianteFront",
      data: {
        rol: "student",
        materias: [],
        usuario: "front",
        email: "front@notes.com",
        name: "Estudiante Front",
        loginType: "usuario",
      },
    },
    {
      email: "back@notes.com",
      password: "estudiante1",
      docId: "estudianteBack",
      data: {
        rol: "student",
        materias: [],
        usuario: "back",
        email: "back@notes.com",
        name: "Estudiante Back",
        loginType: "usuario",
      },
    },
    {
      email: "full@notes.com",
      password: "estudiante1",
      docId: "estudianteFull",
      data: {
        rol: "student",
        materias: [],
        usuario: "full",
        email: "full@notes.com",
        name: "Estudiante Full",
        loginType: "usuario",
      },
    },
  ];

  useEffect(() => {
    async function checkUsuarios() {
      try {
        const { getDocs, collection } = await import("firebase/firestore");
        const usuariosSnap = await getDocs(collection(db, "usuarios"));
        if (usuariosSnap.empty) {
          setRole("admin");
          setShowModal(false);
          return;
        }
      } catch (e) {
        setRole("admin");
        setShowModal(false);
        return;
      }
      const r = localStorage.getItem("role");
      setRole(r);
      if (r === "student") {
        window.location.href = "/vista-estudiante";
        return;
      }
      if (r !== "teacher" && r !== "admin") {
        setShowModal(true);
      }
    }
    checkUsuarios();
  }, []);

  // Función para crear usuarios desde el botón de recarga
  const handleReloadCreate = async () => {
    setReloadLoading(true);
    setReloadMsg("");
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
            await createUserWithEmailAndPassword(auth, user.email, user.password);
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
      setReloadMsg(
        `Usuarios creados o actualizados: ${created.join(", ")}.
Usuarios ya existentes: ${skipped.join(", ")}.`
      );
    } catch (e) {
      setReloadMsg("Error: " + (e.message || e.code));
    } finally {
      setReloadLoading(false);
    }
  };

  if (showModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="bg-white rounded-xl p-6 max-w-xs w-full text-center flex flex-col items-center gap-4 border border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            Acceso restringido
          </h1>
          <div className="text-gray-500 text-sm mb-2 leading-relaxed">
            Debes iniciar sesión como <b>admin</b> o <b>teacher</b> para
            acceder.
            <br />
            Si no tienes permisos, contacta al administrador.
          </div>
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-medium hover:bg-gray-200 transition-colors text-sm"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("role");
              localStorage.removeItem("materias");
              window.location.href = "/login";
            }}
          >
            Iniciar sesión
          </button>
          <div className="mt-2 text-xs text-gray-300">Panel seguro</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col items-center py-4 px-1">
      {/* Botón flotante fijo para ir al panel del admin */}
      <button
        className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-gray-900 text-white rounded-full font-bold shadow-2xl hover:bg-blue-700 transition-colors text-base flex items-center gap-2 animate-fade-in"
        style={{ boxShadow: '0 4px 24px 0 rgba(31,38,135,0.18)' }}
        onClick={() => window.location.href = '/panel'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6l-8 8" />
        </svg>
        Ir al Panel del Admin
      </button>
      <div className="w-[80vw] max-w-7xl bg-white/90 rounded-xl shadow-lg p-6 flex flex-col gap-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 text-center tracking-tight mb-2">
          Panel de administración
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {/* Usuarios */}
          <div className="flex flex-col items-center gap-2 w-full bg-blue-50 rounded-lg p-4 border border-blue-100 shadow-sm md:min-h-[100px] min-h-[120px] justify-center">
            <CreateUsersFirebase />
            <button
              className="w-full px-3 py-2 bg-blue-600 text-white rounded font-semibold shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-60 text-sm mt-2"
              onClick={handleReloadCreate}
              disabled={reloadLoading}
            >
              {reloadLoading ? "Cargando..." : "Recargar usuarios"}
            </button>
            {reloadMsg && (
              <div className="w-full text-center text-blue-700 font-medium text-xs mt-1 bg-blue-100 rounded p-1 border border-blue-200 animate-fade-in">
                {reloadMsg}
              </div>
            )}
          </div>
          {/* Materias */}
          <div className="flex flex-col items-center gap-2 w-full bg-green-50 rounded-lg p-4 border border-green-100 shadow-sm md:min-h-[100px] min-h-[120px] justify-center">
            {/* <CargarMaterias /> */}
            <span className="text-green-700 font-semibold text-base">Cargar Materias</span>
            <button className="px-3 py-2 bg-green-600 text-white rounded font-semibold shadow-sm hover:bg-green-700 transition-colors text-sm mt-2 opacity-60 cursor-not-allowed" disabled>
              Próximamente
            </button>
          </div>
          {/* Temas */}
          <div className="flex flex-col items-center gap-2 w-full bg-yellow-50 rounded-lg p-4 border border-yellow-100 shadow-sm md:min-h-[100px] min-h-[120px] justify-center">
            {/* <CargarTemas /> */}
            <span className="text-yellow-700 font-semibold text-base">Cargar Temas</span>
            <button className="px-3 py-2 bg-yellow-500 text-white rounded font-semibold shadow-sm hover:bg-yellow-600 transition-colors text-sm mt-2 opacity-60 cursor-not-allowed" disabled>
              Próximamente
            </button>
          </div>
          {/* Limpiar colecciones y notas */}
          <div className="flex flex-col items-center gap-2 w-full bg-red-50 rounded-lg p-4 border border-red-100 shadow-sm min-h-[120px] justify-center md:col-span-3 xl:col-span-1">
            {/* <LimpiarFirebase /> */}
            <span className="text-red-700 font-semibold text-base">Limpiar Colecciones y Notas</span>
            <button className="px-3 py-2 bg-red-600 text-white rounded font-semibold shadow-sm hover:bg-red-700 transition-colors text-sm mt-2 opacity-60 cursor-not-allowed" disabled>
              Próximamente
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-4 flex flex-col items-center gap-2">
          {/* El botón flotante ya está fuera, solo deja el texto aquí */}
          Panel solo para administración. Ruta: <b>/oculto</b>.
        </div>
      </div>
    </div>
  );
};

export default CargaInicialPage;
