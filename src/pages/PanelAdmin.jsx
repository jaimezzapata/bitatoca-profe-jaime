// PanelAdmin.jsx
import React from "react";

export default function PanelAdmin() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Dashboard del Profesor</h1>
      <p className="text-gray-600 text-lg">¡Bienvenido al panel de control! Aquí podrás gestionar usuarios, materias, temas y más.</p>
      {/* Aquí irán los widgets, estadísticas y componentes del dashboard */}
    </div>
  );
}
