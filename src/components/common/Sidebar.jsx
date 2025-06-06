import { FiUsers, FiBook, FiLayers, FiTrash2, FiLogOut, FiX } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { useState } from "react";

const menu = [
  { label: "Usuarios", icon: <FiUsers />, path: "/panel/usuarios" },
  { label: "Materias", icon: <FiBook />, path: "/panel/materias" },
  { label: "Temas", icon: <FiLayers />, path: "/panel/temas" },
  { label: "Limpieza", icon: <FiTrash2 />, path: "/panel/limpieza" },
];

export default function Sidebar({ open, setOpen }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white shadow-lg transform md:translate-x-0 transition-transform duration-200 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-blue-700 text-xl">Bitácora: Profe Jaime</span>
            <button className="md:hidden" onClick={() => setOpen(false)}>
              <FiX size={24} />
            </button>
          </div>
          <nav className="flex-1 p-2">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 transition mb-1"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="p-4 border-t">
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold">
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
              <h2 className="text-xl font-bold text-blue-700 mb-1">Sesión cerrada</h2>
              <p className="text-gray-600 text-sm">¿A dónde quieres ir ahora?</p>
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
