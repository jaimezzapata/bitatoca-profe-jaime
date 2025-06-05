Actúa como un desarrollador de software con experiencia en educación y desarrollo frontend. Estás trabajando en una aplicación web personal llamada "Bitácora: El profe Jaime", diseñada exclusivamente para mejorar tu flujo de trabajo como docente en clases de desarrollo de software. Esta aplicación no es una plataforma LMS ni una solución institucional, sino una herramienta personalizada que te permite:

1. Registrar notas breves tipo post-it organizadas automáticamente por fecha, hora, grupo y materia.
2. Marcar algunas notas como "clave para parcial" usando un ícono visual como una estrellita (⭐).
3. Crear y estructurar documentación complementaria editable dividida por bloques pedagógicos, incluyendo:
   - Objetivo
   - Propósito
   - Temas tratados
   - Ejemplos
   - Tips
   - Mitos y realidades
   - Documentación externa
   - Situaciones donde se utiliza
   - Buenas prácticas
   - Usos recomendados
   - Errores comunes
   - Generalidades

4. Controlar la visibilidad del contenido para cada grupo mediante un modal con checkboxes.
5. Registrar y modificar estudiantes de manera interna (solo visibles para el profesor).
6. Acceder a un panel de control con estadísticas básicas:
   - Total de notas creadas
   - Última nota registrada
   - Materias activas
   - Grupos registrados
7. Exportar un respaldo completo de los datos (notas, documentación, estudiantes, materias y grupos) en formato `.json`.

La aplicación está pensada únicamente para ti como profesor, y los estudiantes no tienen cuentas individuales. Ellos ingresan con una contraseña genérica por grupo, y solo pueden visualizar el contenido que tú hayas habilitado. No tienen capacidad para editar, eliminar ni reaccionar.

Todo el sistema está construido pensando en un uso rápido, intuitivo y fluido durante clase. La edición es inline (al hacer clic), no hay botones visibles para editar o eliminar, y el diseño es completamente responsive para celulares, tablets y escritorio.

Con base en esta aplicación, genera contenido útil como:  
- Ideas de mejora técnica o pedagógica  
- Recomendaciones de arquitectura o estructura de carpetas en React  
- Wireframes o esquemas visuales de las vistas clave  
- Pruebas funcionales o escenarios de testeo  
- Documentación para onboarding de desarrolladores o testers  
- Estrategias para integraciones futuras con Firebase o almacenamiento externo  
- Scripts o funciones útiles para modularizar el frontend  
- Criterios de evaluación de experiencia de usuario en estudiantes  


bitacora-profe-jaime/
├── public/
│   └── index.html
├── src/
│   ├── assets/                # Imágenes, íconos y recursos estáticos
│   ├── components/            # Componentes reutilizables
│   │   ├── common/            # Navbar, Footer, AsideMenu, Banner, Modal
│   │   ├── notas/             # NotaCard, FiltroNotas, EstrellaNota
│   │   ├── documentacion/     # Cada bloque: Objetivo.jsx, Tips.jsx, etc.
│   │   └── estudiantes/       # EstudianteForm, EstudianteList, EstudianteRow
│   ├── context/               # Contextos globales si decides usar (ej. AuthContext)
│   ├── hooks/                 # Hooks personalizados (ej. useForm, useFirebase)
│   ├── layouts/               # Layouts principales: ProfeLayout, EstudianteLayout
│   ├── pages/                 # Vistas según la ruta
│   │   ├── Login.jsx
│   │   ├── DashboardProfe.jsx
│   │   ├── MateriaDetalle.jsx
│   │   ├── VistaGrupo.jsx
│   │   ├── Estudiantes.jsx
│   │   └── Error404.jsx
│   ├── routes/                # Archivo central de rutas (React Router)
│   │   └── AppRouter.jsx
│   ├── services/              # Abstracción de llamadas a Firestore o JSON-Server
│   │   ├── authService.js
│   │   ├── grupoService.js
│   │   ├── notaService.js
│   │   ├── materiaService.js
│   │   ├── documentacionService.js
│   │   └── estudianteService.js
│   ├── utils/                 # Funciones auxiliares (ej. ordenamiento, validación)
│   │   ├── ordenNotas.js
│   │   ├── exportarRespaldo.js
│   │   └── formatearFecha.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Configuración de Tailwind y estilos base
├── .env                      # Variables de entorno (Firebase, API base)
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

