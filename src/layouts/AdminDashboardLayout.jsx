import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import HamburgerMenu from "../components/common/HamburgerMenu";
import RegistrarUsuario from "../components/common/RegistrarUsuario";
import { FiUser, FiX } from "react-icons/fi";

export default function AdminDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showRegistrarUsuarioModal, setShowRegistrarUsuarioModal] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} onOpenRegistrarUsuarioModal={() => setShowRegistrarUsuarioModal(true)} />
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile */}
        <div className="md:hidden flex items-center p-2 bg-white shadow">
          <HamburgerMenu onClick={() => setSidebarOpen(true)} />
          <span className="ml-4 font-bold text-lg text-blue-700">Panel Admin</span>
        </div>
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
      {/* Modal para registrar usuario */}
      {showRegistrarUsuarioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-pink-50 border-4 border-blue-200 rounded-2xl shadow-2xl max-w-lg w-full p-0 overflow-hidden animate-fade-in-up">
            {/* Header UX */}
            <div className="flex items-center justify-between px-6 py-4 bg-blue-100 border-b-2 border-blue-200 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <span className="bg-blue-200 rounded-full p-2"><FiUser className="text-blue-600" size={24} /></span>
                <span className="text-lg font-bold text-blue-800 tracking-tight">Registrar nuevo usuario</span>
              </div>
              <button
                className="text-gray-400 hover:text-blue-500 transition-colors text-2xl font-bold focus:outline-none"
                onClick={() => setShowRegistrarUsuarioModal(false)}
                aria-label="Cerrar modal"
              >
                <FiX />
              </button>
            </div>
            {/* Formulario UX */}
            <div className="px-8 py-6 flex flex-col gap-4 bg-white/90">
              <RegistrarUsuario onClose={() => setShowRegistrarUsuarioModal(false)} />
            </div>
            {/* Footer UX */}
            <div className="px-8 py-3 bg-blue-50 border-t-2 border-blue-100 rounded-b-2xl flex items-center justify-between">
              <span className="text-xs text-gray-400">Solo admin/profe puede registrar usuarios</span>
              <span className="text-xs text-blue-400 font-semibold">Bitácora: Profe Jaime</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
