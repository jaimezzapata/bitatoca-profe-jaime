# 📘 Bitácora: El profe Jaime

Aplicación web personal desarrollada por y para el profesor Jaime Zapata, con el propósito de registrar, organizar y compartir notas y documentación académica de forma clara, rápida y estructurada. Diseñada para ser utilizada en el día a día docente, facilita la entrega de contenido significativo a los estudiantes sin crear cuentas individuales, respetando políticas institucionales de seguridad.

---

## 🎯 Objetivo General

Facilitar el trabajo docente mediante una bitácora digital que permita:
- Registrar notas rápidas por grupo y materia.
- Estructurar documentación por secciones pedagógicas.
- Marcar contenido clave para exámenes.
- Controlar el acceso por grupo.
- Gestionar estudiantes de forma interna.
- Exportar y respaldar información académica.

---

## 👥 Roles del Sistema

### 👨‍🏫 Profesor (tú)
- Accede con correo y contraseña.
- Registra y edita notas, documentación, materias, grupos y estudiantes.
- Marca notas clave (⭐).
- Define permisos de visualización por grupo.
- Exporta respaldo completo (.json).
- Accede a panel de estadísticas.

### 👨‍🎓 Estudiante
- Ingresa con usuario/contraseña genérico del grupo.
- Solo visualiza contenido autorizado.
- No puede editar ni eliminar nada.
- Ve notas ordenadas y documentación estructurada.

---

## 🧩 Funcionalidades Principales

### 🗒️ Notas por clase
- Crear notas tipo post-it con Enter.
- Orden automático por fecha y hora.
- Marcar como "clave para parcial" con ⭐.
- Filtros por grupo, materia, fecha o clave.

### 📄 Documentación estructurada (por materia/grupo)
Editable por secciones independientes:
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

### 🧑‍🏫 Gestión de estudiantes
- Crear, registrar, editar y eliminar estudiantes.
- Asociar estudiantes a grupos.
- Solo para uso interno del profe.

### 🗂️ Gestión de materias y grupos
- Crear materias con alias y descripción.
- Crear grupos con contraseña genérica.
- Asignar materias a grupos.
- Control de visibilidad por grupo (modal con checkboxes).

### 📊 Dashboard del profesor
- Total de notas registradas.
- Fecha y hora de la última nota.
- Número de materias activas.
- Número de grupos registrados.

### 💾 Respaldo y exportación
- Botón para exportar todo el contenido en formato `.json`.
- Ideal para respaldo manual o migración de datos.

---

## 📱 Experiencia de Usuario

- Diseño minimalista, limpio y mobile-first.
- Todo editable inline, sin botones visibles.
- Notas como tarjetas visuales estilo post-it.
- Secciones de documentación colapsables y ordenadas.
- Navegación clara y sin distracciones.
- Totalmente responsive: celular, tablet y escritorio.

---

## 🔐 Seguridad y acceso

- Solo el profesor tiene acceso completo (correo + contraseña).
- Los estudiantes usan contraseñas genéricas por grupo.
- No se crean cuentas personales para estudiantes.
- Control total sobre qué grupo ve qué contenido.

---

## 🔄 Flujo General

1. **Inicio de sesión**
   - Profe: acceso completo.
   - Estudiante: solo lectura.
2. **Panel del profesor**
   - Selecciona grupo/materia.
   - Registra notas con Enter.
   - Edita documentación por sección.
   - Marca notas clave.
   - Configura visibilidad por grupo.
   - Gestiona estudiantes.
   - Exporta respaldo.
3. **Vista del estudiante**
   - Ve materias y contenidos habilitados por el profe.
   - Solo lectura.
   - Notas clave visibles con ⭐.

---

## 🛠️ Tecnologías Sugeridas

- **Frontend:** React + Vite
- **Estilos:** Tailwind CSS
- **Routing:** React Router DOM
- **Autenticación:** Firebase Authentication
- **Base de datos:** Firestore o JSON-Server
- **Respaldo:** Exportación usando Blob API o funciones de Firestore

---

## 🚀 Próximos pasos sugeridos

1. Crear proyecto base con Vite y Tailwind.
2. Implementar login y roles (profesor / estudiante).
3. Estructurar navegación y rutas.
4. Desarrollar sistema de notas.
5. Implementar edición modular de documentación.
6. Crear módulo de gestión de estudiantes.
7. Construir panel de estadísticas y backup.
8. Probar experiencia completa en celular y escritorio.

---

## 💬 Autor

**Jaime Zapata**  
Desarrollador Frontend y Docente de Desarrollo de Software  
_"Una herramienta hecha a mi medida, para acompañar el aprendizaje día a día, con claridad, orden y propósito."_

---

<!-- https://www.mermaidchart.com/app/projects/a7f1f79b-15e2-44c7-a494-fa8e7f3e59d0/diagrams/be1b430f-7887-4c2f-a629-f59c5175b38d/share/invite/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudElEIjoiYmUxYjQzMGYtNzg4Ny00YzJmLWE2MjktZjU5YzUxNzViMzhkIiwiYWNjZXNzIjoiVmlldyIsImlhdCI6MTc0OTE2NDU5MH0.UDKIdpj93XekU-dgdRA75HSRpURN7TN151N__FmhHM4 -->


```json
{
  "usuarios": [
    {
      "id": 1,
      "rol": "profe",
      "correo": "jaime@bitacora.com",
      "password": "1234"
    }
  ],
  "materias": [
    {
      "id": 1,
      "nombre": "Web 1",
      "alias": "Front 1"
    }
  ],
  "grupos": [
    {
      "id": 1,
      "nombre": "Empresariales 2024-1",
      "contrasena": "web2024",
      "materias": [1],
      "permisos": {
        "1": {
          "notas": true,
          "documentacion": true
        }
      }
    }
  ],
  "notas": [
    {
      "id": 1,
      "grupoId": 1,
      "materiaId": 1,
      "fecha": "2025-06-05T10:32:00",
      "contenido": "Hoy repasamos estructuras HTML.",
      "isClave": true
    }
  ],
  "documentacion": [
    {
      "id": 1,
      "grupoId": 1,
      "materiaId": 1,
      "objetivo": "Comprender las etiquetas semánticas de HTML.",
      "proposito": "Fomentar el uso correcto de estructuras HTML para mejorar la accesibilidad y semántica.",
      "temas": [
        "Etiquetas semánticas básicas",
        "Estructura general de un documento HTML",
        "Comparación entre <div> y <section>"
      ],
      "ejemplos": [
        "Ejemplo de estructura semántica completa",
        "Ejemplo con mal uso de etiquetas"
      ],
      "tips": [
        "Evita usar demasiados <div> anidados",
        "Utiliza <main> y <article> para contenido principal"
      ],
      "mitosYRealidades": [
        {
          "mito": "Las etiquetas semánticas no afectan nada",
          "realidad": "Sí afectan accesibilidad y posicionamiento web"
        }
      ],
      "documentacionExterna": [
        {
          "nombre": "MDN Web Docs - HTML Semántico",
          "url": "https://developer.mozilla.org/es/docs/Web/HTML/Element"
        }
      ],
      "situaciones": [
        "Diseño de portales educativos",
        "Maquetación de landing pages"
      ],
      "buenasPracticas": [
        "Usar etiquetas que describan el contenido",
        "Evitar estructuras genéricas innecesarias"
      ],
      "usosRecomendados": [
        "Estructuración de contenido en blogs",
        "Desarrollo accesible para lectores de pantalla"
      ],
      "erroresComunes": [
        "Usar <div> para todo sin semántica",
        "Omitir <header> o <footer> cuando son necesarios"
      ],
      "generalidades": "Las etiquetas semánticas permiten que los navegadores y lectores de pantalla interpreten mejor el contenido."
    }
  ]
}
```
