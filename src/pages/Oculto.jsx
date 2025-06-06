import React, { useEffect } from "react";
import CargaInicial from "../components/common/CargaInicial";

/**
 * Componente Oculto: aquí se agrupan acciones delicadas o de administración.
 * Solo debe ser accesible por el administrador.
 */
const Oculto = () => {
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin" && role !== "teacher") {
      window.location.href = "/";
    }
  }, []);

  const role = localStorage.getItem("role");
  if (role !== "admin" && role !== "teacher") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-6">
        Zona de Acciones Delicadas
      </h2>
      <div className="w-full max-w-2xl">
        <CargaInicial />
      </div>
    </div>
  );
};

export default Oculto;
