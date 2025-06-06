import CreateUsersFirebase from "./CreateUsersFirebase";
import CargaMateriasDemo from "./CargaMateriasDemo";
import CargaDocumentacionFrontDos from "./CargaDocumentacionWebDos";
import CargarTemasWeb1 from "./CargaDocumentacionWebUno";
import LimpiarDatosDemo from "./LimpiarDatosDemo";

export default function CargaInicial() {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-full min-h-[260px] flex flex-col items-center bg-yellow-100 border-4 border-yellow-200 rounded-xl shadow-xl p-4 relative postit-effect transition-transform duration-300 hover:scale-105 hover:-rotate-2">
          <span className="text-blue-700 font-extrabold text-2xl mb-2 mt-1">Cargar Usuarios</span>
          <span className="text-xs text-blue-800 mb-3 text-center">Crea los usuarios demo iniciales en Firebase Auth y Firestore para pruebas o arranque rápido del sistema.</span>
          <div className="flex-1 w-full flex flex-col justify-end">
            <CreateUsersFirebase />
          </div>
          <div className="absolute top-2 right-4 text-yellow-400 text-2xl opacity-60 select-none pointer-events-none">★</div>
        </div>
        <div className="h-full min-h-[260px] flex flex-col items-center bg-pink-100 border-4 border-pink-200 rounded-xl shadow-xl p-4 relative postit-effect transition-transform duration-300 hover:scale-105 hover:rotate-2">
          <span className="text-green-700 font-extrabold text-2xl mb-2 mt-1">Cargar Materias</span>
          <span className="text-xs text-green-800 mb-3 text-center">Agrega las materias demo predeterminadas a Firestore para que los estudiantes puedan verlas y usarlas.</span>
          <div className="flex-1 w-full flex flex-col justify-end">
            <CargaMateriasDemo />
          </div>
          <div className="absolute top-2 right-4 text-pink-400 text-2xl opacity-60 select-none pointer-events-none">★</div>
        </div>
        <div className="h-full min-h-[260px] flex flex-col items-center bg-indigo-100 border-4 border-indigo-200 rounded-xl shadow-xl p-4 relative postit-effect transition-transform duration-300 hover:scale-105 hover:rotate-2">
          <span className="text-indigo-700 font-extrabold text-2xl mb-2 mt-1">Cargar Temas Web2</span>
          <span className="text-xs text-indigo-800 mb-3 text-center">Carga los temas estructurados de Web2 en la colección <b>temas</b> de Firestore. Solo para uso de admin/profesor.</span>
          <div className="flex-1 w-full flex flex-col justify-end">
            <CargaDocumentacionFrontDos />
          </div>
          <div className="absolute top-2 right-4 text-indigo-400 text-2xl opacity-60 select-none pointer-events-none">★</div>
        </div>
        <div className="h-full min-h-[260px] flex flex-col items-center bg-purple-100 border-4 border-purple-200 rounded-xl shadow-xl p-4 relative postit-effect transition-transform duration-300 hover:scale-105 hover:rotate-2">
          <span className="text-purple-700 font-extrabold text-2xl mb-2 mt-1">Cargar Temas Web1</span>
          <span className="text-xs text-purple-800 mb-3 text-center">Carga los temas estructurados de Web1 en la colección <b>temas</b> de Firestore. Solo para uso de admin/profesor.</span>
          <div className="flex-1 w-full flex flex-col justify-end">
            <CargarTemasWeb1 />
          </div>
          <div className="absolute top-2 right-4 text-purple-400 text-2xl opacity-60 select-none pointer-events-none">★</div>
        </div>
      </div>
      <div className="mt-10">
        <LimpiarDatosDemo />
      </div>
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
    </div>
  );
}
