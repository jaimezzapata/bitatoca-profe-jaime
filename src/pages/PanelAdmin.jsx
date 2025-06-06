// PanelAdmin.jsx
import React from "react";
import { FiUsers, FiBook, FiLayers, FiFileText } from "react-icons/fi";

export default function PanelAdmin() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 p-0 md:p-8 relative">
      {/* Fondo decorativo de post-its */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 border-4 border-yellow-300 rounded-xl shadow-xl rotate-[-8deg] opacity-70" />
        <div className="absolute top-40 right-24 w-40 h-40 bg-pink-200 border-4 border-pink-300 rounded-xl shadow-xl rotate-[7deg] opacity-60" />
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-blue-200 border-4 border-blue-300 rounded-xl shadow-xl rotate-[3deg] opacity-60" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200 border-4 border-green-300 rounded-xl shadow-xl rotate-[-4deg] opacity-70" />
      </div>
      {/* Header visual */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-6 mt-8 mb-8">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2 drop-shadow-xl leading-tight">
            Dashboard <span className="text-yellow-400">Bitácora</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-medium mb-2">
            Administra tus{" "}
            <span className="bg-yellow-100 px-2 py-1 rounded">notas</span> y{" "}
            <span className="bg-pink-100 px-2 py-1 rounded">documentación</span>{" "}
            de clase como si fueran post-its.
          </p>
          <span className="text-blue-500 font-semibold text-base">
            ¡Organiza, edita y visualiza todo en un solo lugar!
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute left-8 top-8 w-32 h-32 bg-yellow-200 border-4 border-yellow-300 rounded-xl shadow-xl rotate-[-8deg] z-10" />
            <div className="absolute left-0 top-16 w-32 h-32 bg-pink-200 border-4 border-pink-300 rounded-xl shadow-xl rotate-[7deg] z-0" />
            <div className="absolute left-12 top-20 w-32 h-32 bg-blue-200 border-4 border-blue-300 rounded-xl shadow-xl rotate-[3deg] z-20" />
            <div className="absolute left-6 top-32 w-24 h-24 bg-green-200 border-4 border-green-300 rounded-xl shadow-xl rotate-[-4deg] z-30" />
            <div className="absolute left-20 top-10 w-20 h-20 bg-purple-200 border-4 border-purple-300 rounded-xl shadow-xl rotate-[12deg] z-40" />
          </div>
        </div>
      </div>
      {/* Tarjetas tipo post-it para widgets */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {/* Widget Notas */}
        <div className="bg-yellow-100 border-4 border-yellow-200 rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[160px] relative hover:scale-105 transition-transform">
          <FiFileText className="text-yellow-400 mb-2" size={32} />
          <h2 className="font-bold text-lg text-yellow-800 mb-1">
            Notas rápidas
          </h2>
          <p className="text-yellow-900 text-sm mb-2">
            Crea, edita y organiza tus notas tipo post-it por grupo y materia.
          </p>
          <span className="text-xs text-yellow-700 font-semibold">
            Ver notas &rarr;
          </span>
        </div>
        {/* Widget Documentación */}
        <div className="bg-pink-100 border-4 border-pink-200 rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[160px] relative hover:scale-105 transition-transform">
          <FiBook className="text-pink-400 mb-2" size={32} />
          <h2 className="font-bold text-lg text-pink-800 mb-1">
            Documentación
          </h2>
          <p className="text-pink-900 text-sm mb-2">
            Estructura y edita bloques pedagógicos para cada materia y grupo.
          </p>
          <span className="text-xs text-pink-700 font-semibold">
            Ver documentación &rarr;
          </span>
        </div>
        {/* Widget Usuarios */}
        <div className="bg-blue-100 border-4 border-blue-200 rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[160px] relative hover:scale-105 transition-transform">
          <FiUsers className="text-blue-400 mb-2" size={32} />
          <h2 className="font-bold text-lg text-blue-800 mb-1">
            Gestión de usuarios
          </h2>
          <p className="text-blue-900 text-sm mb-2">
            Administra estudiantes y controla el acceso a la bitácora.
          </p>
          <span className="text-xs text-blue-700 font-semibold">
            Ver usuarios &rarr;
          </span>
        </div>
        {/* Widget Materias */}
        <div className="bg-green-100 border-4 border-green-200 rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[160px] relative hover:scale-105 transition-transform">
          <FiBook className="text-green-400 mb-2" size={32} />
          <h2 className="font-bold text-lg text-green-800 mb-1">Materias</h2>
          <p className="text-green-900 text-sm mb-2">
            Crea y organiza las materias que impartes.
          </p>
          <span className="text-xs text-green-700 font-semibold">
            Ver materias &rarr;
          </span>
        </div>
        {/* Widget Temas */}
        <div className="bg-purple-100 border-4 border-purple-200 rounded-xl shadow-lg p-6 flex flex-col items-start min-h-[160px] relative hover:scale-105 transition-transform">
          <FiLayers className="text-purple-400 mb-2" size={32} />
          <h2 className="font-bold text-lg text-purple-800 mb-1">Temas</h2>
          <p className="text-purple-900 text-sm mb-2">
            Gestiona los temas tratados en cada materia.
          </p>
          <span className="text-xs text-purple-700 font-semibold">
            Ver temas &rarr;
          </span>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center mt-4 flex flex-col items-center gap-2">
        Panel de administración visual tipo post-it.{" "}
        <b>¡Organiza tu clase como nunca antes!</b>
      </div>
    </div>
  );
}
