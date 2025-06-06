import {
  FiUsers,
  FiBook,
  FiLayers,
  FiTrash2,
  FiLogOut,
  FiX,
  FiUser,
  FiFileText,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";

const menu = [
  { label: "Usuarios", icon: <FiUsers />, path: "/panel/usuarios" },
  {
    label: "Registrar usuario",
    icon: <FiUser />,
    path: "/panel/registrar-usuario",
  },
  { label: "Materias", icon: <FiBook />, path: "/panel/materias" },
  { label: "Temas", icon: <FiLayers />, path: "/panel/temas" },
  { label: "Limpieza", icon: <FiTrash2 />, path: "/panel/limpieza" },
];

const studentViewLink = {
  label: "Vista estudiante",
  icon: <FiFileText />,
  path: "/vista-estudiante",
};
const panelLink = { label: "Panel", icon: <FiLayers />, path: "/panel" };

export default function Sidebar({ open, setOpen, onOpenRegistrarUsuarioModal }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const role = localStorage.getItem("role");

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {}
    localStorage.clear();
    setShowLogoutModal(true);
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };
  const handleGoLogin = () => {
    window.location.href = "/login";
  };

  return (
    <>
      {/* Overlay para móvil */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-50 via-white to-yellow-50 shadow-xl transform transition-transform duration-200 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:z-0`}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col h-full w-full">
          {/* Logo y avatar */}
          <div className="flex items-center justify-between py-4 border-b bg-white/80 w-full">
            <span className="font-extrabold text-blue-700 text-lg tracking-tight pl-4">
              Bitácora: Profe Jaime
            </span>
            <button className="md:hidden pr-4" onClick={() => setOpen(false)}>
              <FiX size={24} />
            </button>
          </div>
          {/* Avatar usuario */}
          <div className="flex items-center gap-3 py-3 border-b bg-white/60 w-full pl-4">
            <div className="bg-blue-200 rounded-full p-2">
              <FiUser className="text-blue-600" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-blue-800">
                Admin/Profe
              </span>
              <span className="text-xs text-gray-500">jaime@bitacora.com</span>
            </div>
          </div>
          {/* Menú navegación */}
          <nav className="flex-1 mt-2 w-full">
            {/* Botón Panel siempre visible */}
            <a
              href="/panel"
              className="flex items-center gap-3 pl-6 pr-2 py-3 rounded-lg text-gray-700 font-bold bg-blue-100 hover:bg-blue-200 hover:scale-[1.03] transition-all duration-150 mb-1 group w-full text-base"
              style={{ width: "100%" }}
            >
              <span className="text-xl group-hover:text-blue-700 transition-colors">
                <FiLayers />
              </span>
              <span className="flex-1">Panel</span>
            </a>
            {/* Enlace a vista estudiante solo para admin/teacher */}
            {(role === "admin" || role === "teacher") && (
              <a
                href={studentViewLink.path}
                className="flex items-center gap-3 pl-6 pr-2 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-100 hover:scale-[1.03] transition-all duration-150 mb-1 group w-full text-base"
                style={{ width: "100%" }}
              >
                <span className="text-xl group-hover:text-green-600 transition-colors">
                  {studentViewLink.icon}
                </span>
                <span className="flex-1">{studentViewLink.label}</span>
              </a>
            )}
            {/* Menú normal */}
            {menu.map((item) =>
              item.label === "Registrar usuario" ? (
                <button
                  key={item.label}
                  onClick={() => {
                    if (onOpenRegistrarUsuarioModal) onOpenRegistrarUsuarioModal();
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 pl-6 pr-2 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:scale-[1.03] transition-all duration-150 mb-1 group w-full text-base text-left w-full"
                  style={{ width: "100%", background: "none", border: "none" }}
                >
                  <span className="text-xl group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.path}
                  className="flex items-center gap-3 pl-6 pr-2 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-100 hover:scale-[1.03] transition-all duration-150 mb-1 group w-full text-base"
                  style={{ width: "100%" }}
                >
                  <span className="text-xl group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                </a>
              )
            )}
          </nav>
          <div className="border-t bg-white/80 w-full">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold w-full justify-center py-4 rounded-lg hover:bg-red-50 transition-colors text-base"
            >
              <FiLogOut />
              Cerrar sesión
            </button>
          </div>
        </div>
      </aside>
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-xs w-full text-center flex flex-col items-center gap-5 border border-blue-100 shadow-2xl relative">
            <div className="flex flex-col items-center mb-2">
              <div className="bg-blue-100 rounded-full p-3 mb-2 shadow">
                <FiLogOut className="text-blue-600" size={32} />
              </div>
              <h2 className="text-xl font-bold text-blue-700 mb-1">
                Sesión cerrada
              </h2>
              <p className="text-gray-600 text-sm">
                ¿A dónde quieres ir ahora?
              </p>
            </div>
            <div className="flex gap-3 w-full mt-2">
              <button
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleGoHome}
              >
                Ir al Home
              </button>
              <button
                className="flex-1 px-4 py-2 bg-gray-100 text-blue-700 rounded-lg font-semibold shadow hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={handleGoLogin}
              >
                Ir al Login
              </button>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-500 transition-colors"
              onClick={() => setShowLogoutModal(false)}
              aria-label="Cerrar modal"
            >
              <FiX size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
