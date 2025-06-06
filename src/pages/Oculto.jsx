import React from 'react';
import CargaInicialPage from './CargaInicialPage';

/**
 * Componente Oculto: aquí se agrupan acciones delicadas o de administración.
 * Solo debe ser accesible por el administrador.
 */
const Oculto = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Zona de Acciones Delicadas</h2>
      <div className="w-full max-w-2xl">
        <CargaInicialPage />
      </div>
    </div>
  );
};

export default Oculto;
