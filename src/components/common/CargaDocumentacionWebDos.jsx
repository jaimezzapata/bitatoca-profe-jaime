import { useState, useEffect } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

// Temas Web2 para cargar en Firebase
const temasWeb2 = [
  {
    id: "web2-componentes",
    materia: "Web2",
    temaCentral: "Componentes",
    subtemas: [
      "funcionales",
      "de clase",
      "presentacionales",
      "contenedores",
      "anidados",
      "reutilizables",
      "estado",
    ],
    objetivos: [
      "Comprender la estructura y función de los componentes en React.",
      "Diferenciar entre componentes funcionales y de clase.",
      "Crear componentes reutilizables y anidados.",
      "Gestionar el estado local dentro de un componente.",
      "Aplicar buenas prácticas en la organización de componentes.",
      "Identificar cuándo dividir la UI en nuevos componentes.",
      "Reconocer la importancia de la composición en React.",
    ],
    definiciones: [
      {
        concepto: "Componente",
        definicion:
          "Unidad reutilizable de UI en React que puede tener lógica, estado y presentación.",
      },
      {
        concepto: "Componente funcional",
        definicion:
          "Componente basado en una función de JavaScript que retorna JSX.",
      },
      {
        concepto: "Componente de clase",
        definicion:
          "Componente basado en una clase ES6, con métodos de ciclo de vida y estado propio.",
      },
      {
        concepto: "Presentacional",
        definicion:
          "Componente enfocado en la presentación visual, sin lógica de negocio.",
      },
      {
        concepto: "Contenedor",
        definicion:
          "Componente que maneja lógica y pasa datos a componentes hijos presentacionales.",
      },
      {
        concepto: "Estado local",
        definicion:
          "Datos internos de un componente que afectan su renderizado.",
      },
    ],
    buenasPracticas: [
      "Nombrar componentes con mayúscula inicial.",
      "Dividir la UI en componentes pequeños y específicos.",
      "Evitar componentes demasiado grandes o con muchas responsabilidades.",
      "Reutilizar componentes en diferentes partes de la app.",
      "Documentar la función de cada componente.",
      "Usar propTypes o TypeScript para validar props.",
      "Separar componentes presentacionales de contenedores.",
    ],
    erroresComunes: [
      "No reutilizar componentes y repetir código.",
      "Confundir componentes funcionales con de clase.",
      "No pasar props correctamente a los hijos.",
      "Olvidar el return en componentes funcionales.",
      "No inicializar el estado correctamente.",
      "Modificar el estado directamente en vez de usar setState/useState.",
      "No usar keys únicas al renderizar listas de componentes.",
    ],
    consejos: [
      "Empieza siempre con componentes funcionales, usa clases solo si es necesario.",
      "Extrae componentes cuando una parte de la UI se repite o es compleja.",
      "Aprovecha la composición para crear UIs flexibles.",
      "Lee la documentación oficial de React sobre componentes.",
      "Utiliza herramientas como Storybook para documentar y probar componentes.",
      "Prefiere la inmutabilidad en el manejo del estado local.",
      "Evita side-effects en el renderizado de componentes.",
    ],
    tipos: [
      "funcional",
      "clase",
      "presentacional",
      "contenedor",
      "anidado",
      "reutilizable",
    ],
    ejemplo: {
      contexto: "Componente funcional simple y reutilizable.",
      codigo:
        'function Boton(props) {\n  return <button>{props.texto}</button>;\n}\n// Uso: <Boton texto="Guardar" />',
    },
    ejercicios: [
      {
        enunciado:
          "Crea un componente funcional que muestre un mensaje de bienvenida.",
      },
      {
        enunciado:
          "Desarrolla un componente de clase que tenga un contador en su estado.",
      },
      {
        enunciado:
          "Implementa un componente presentacional que reciba datos por props y los muestre en una tabla.",
      },
      {
        enunciado:
          "Crea un componente contenedor que maneje la lógica de filtrado y pase los datos filtrados a un hijo presentacional.",
      },
      {
        enunciado:
          "Refactoriza una UI dividiendo una sección compleja en varios componentes anidados.",
      },
    ],
    recursos: [
      {
        nombre: "Documentación oficial de React - Componentes",
        tipo: "Documentación",
        enlace: "https://es.react.dev/learn/your-first-component",
      },
      {
        nombre: "Componentes en React (MDN)",
        tipo: "Artículo",
        enlace:
          "https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components",
      },
      {
        nombre: "Componentes presentacionales y contenedores",
        tipo: "Artículo",
        enlace:
          "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",
      },
      {
        nombre: "Storybook para React",
        tipo: "Herramienta",
        enlace: "https://storybook.js.org/docs/react/get-started/introduction",
      },
      {
        nombre: "React Patterns - Composición",
        tipo: "Referencia",
        enlace: "https://reactpatterns.com/#composition",
      },
    ],
    faq: [
      {
        pregunta:
          "¿Cuál es la diferencia entre un componente funcional y uno de clase?",
        respuesta:
          "El funcional es una función que retorna JSX, el de clase es una clase ES6 con métodos de ciclo de vida y estado propio.",
      },
      {
        pregunta: "¿Cuándo debo crear un nuevo componente?",
        respuesta:
          "Cuando una parte de la UI se repite, es compleja o tiene lógica propia.",
      },
      {
        pregunta: "¿Puedo anidar componentes dentro de otros?",
        respuesta: "Sí, la composición es una de las bases de React.",
      },
      {
        pregunta: "¿Qué es un componente presentacional?",
        respuesta:
          "Es un componente enfocado en mostrar datos, sin lógica de negocio.",
      },
      {
        pregunta: "¿Cómo paso datos entre componentes?",
        respuesta: "Usando props para pasar datos de padres a hijos.",
      },
      {
        pregunta: "¿Qué es el estado local de un componente?",
        respuesta:
          "Son datos internos que afectan el renderizado y solo existen dentro del componente.",
      },
      {
        pregunta: "¿Por qué es importante la reutilización de componentes?",
        respuesta:
          "Permite mantener el código DRY y facilita el mantenimiento y escalabilidad.",
      },
    ],
    mitoYRealidad: {
      mito: "Solo los componentes de clase pueden tener estado.",
      realidad:
        "Desde React 16.8, los componentes funcionales pueden tener estado usando hooks como useState.",
    },
  },
  {
    id: "web2-props",
    materia: "Web2",
    temaCentral: "Props",
    subtemas: [
      "paso de props",
      "props por defecto",
      "validación de props",
      "props children",
      "props spread",
      "props inmutables",
      "props dinámicos",
    ],
    objetivos: [
      "Comprender el concepto de props en React y su función para la comunicación entre componentes.",
      "Aprender a pasar datos y funciones de un componente padre a uno hijo usando props.",
      "Distinguir entre props y estado local.",
      "Validar y documentar correctamente las props de un componente.",
      "Utilizar props por defecto y el patrón children.",
      "Evitar la mutación de props dentro de los componentes hijos.",
      "Aplicar el spread operator para pasar props dinámicamente.",
    ],
    definiciones: [
      {
        concepto: "Props",
        definicion:
          "Propiedades que se pasan de un componente padre a uno hijo en React, permitiendo la comunicación y personalización.",
      },
      {
        concepto: "Props por defecto",
        definicion:
          "Valores predeterminados que recibe una prop si no se especifica al usar el componente.",
      },
      {
        concepto: "Validación de props",
        definicion:
          "Proceso de asegurar que las props recibidas cumplen con el tipo y formato esperado.",
      },
      {
        concepto: "Props children",
        definicion:
          "Prop especial que representa los elementos hijos incluidos entre las etiquetas de apertura y cierre de un componente.",
      },
      {
        concepto: "Inmutabilidad de props",
        definicion:
          "Regla que indica que las props no deben ser modificadas por el componente que las recibe.",
      },
      {
        concepto: "Spread de props",
        definicion:
          "Uso del operador ... para pasar todas las props de un objeto a un componente de forma dinámica.",
      },
    ],
    buenasPracticas: [
      "Nombrar las props de forma clara y descriptiva.",
      "Usar propTypes o TypeScript para validar las props.",
      "Definir valores por defecto para props opcionales.",
      "Evitar modificar las props dentro del componente hijo.",
      "Documentar el propósito de cada prop en los comentarios o documentación del componente.",
      "Utilizar el patrón children para mayor flexibilidad.",
      "Limitar la cantidad de props para mantener componentes simples.",
    ],
    erroresComunes: [
      "Intentar modificar una prop dentro del componente hijo.",
      "No validar el tipo de las props recibidas.",
      "Olvidar definir valores por defecto para props opcionales.",
      "Confundir props con estado local.",
      "Pasar demasiadas props, haciendo el componente difícil de mantener.",
      "No documentar las props esperadas.",
      "No usar el patrón children cuando es necesario.",
    ],
    consejos: [
      "Piensa en las props como argumentos de una función: deben ser inmutables y claras.",
      "Utiliza destructuring para acceder a las props dentro del componente.",
      "Aprovecha el patrón children para componer UIs más flexibles.",
      "Lee la documentación oficial de React sobre props y validación.",
      "Prefiere pasar funciones por props para manejar eventos o actualizar el estado del padre.",
      "Evita el prop drilling excesivo, considera contextos si es necesario.",
      "Utiliza el spread operator para pasar props dinámicamente solo cuando sea necesario.",
    ],
    tipos: [
      "string",
      "number",
      "boolean",
      "array",
      "object",
      "function",
      "children",
    ],
    ejemplo: {
      contexto: "Uso de props y children en un componente.",
      codigo:
        "function Card({ titulo, children }) {\n  return (\n    <div className='card'>\n      <h2>{titulo}</h2>\n      <div>{children}</div>\n    </div>\n  );\n}\n// Uso:\n<Card titulo=\"Ejemplo\">\n  <p>Contenido de la tarjeta</p>\n</Card>",
    },
    ejercicios: [
      {
        enunciado:
          "Crea un componente que reciba un texto por props y lo muestre en pantalla.",
      },
      {
        enunciado:
          "Implementa un componente que reciba una función por props y la ejecute al hacer clic en un botón.",
      },
      {
        enunciado:
          "Desarrolla un componente que use children para mostrar contenido personalizado.",
      },
      {
        enunciado:
          "Agrega validación de props usando propTypes o TypeScript en un componente.",
      },
      {
        enunciado:
          "Utiliza el spread operator para pasar todas las props de un objeto a un componente hijo.",
      },
    ],
    recursos: [
      {
        nombre: "Documentación oficial de React - Props",
        tipo: "Documentación",
        enlace: "https://es.react.dev/learn/passing-props-to-a-component",
      },
      {
        nombre: "Validación de props en React (MDN)",
        tipo: "Artículo",
        enlace:
          "https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components#validaci%C3%B3n_de_props",
      },
      {
        nombre: "React PropTypes",
        tipo: "Referencia",
        enlace: "https://es.react.dev/reference/react/Component#prop-types",
      },
      {
        nombre: "Children en React",
        tipo: "Artículo",
        enlace:
          "https://es.react.dev/learn/passing-props-to-a-component#passing-jsx-as-children-to-a-component",
      },
      {
        nombre: "Destructuring de props",
        tipo: "Tutorial",
        enlace:
          "https://www.freecodecamp.org/news/destructuring-props-in-react/",
      },
    ],
    faq: [
      {
        pregunta: "¿Qué diferencia hay entre props y estado?",
        respuesta:
          "Las props se pasan de padres a hijos y son inmutables, el estado es interno y mutable por el componente.",
      },
      {
        pregunta: "¿Puedo modificar una prop dentro del componente?",
        respuesta: "No, las props deben ser inmutables.",
      },
      {
        pregunta: "¿Qué es el patrón children?",
        respuesta:
          "Permite pasar elementos hijos entre las etiquetas de apertura y cierre de un componente.",
      },
      {
        pregunta: "¿Cómo valido el tipo de una prop?",
        respuesta: "Usando propTypes o TypeScript.",
      },
      {
        pregunta: "¿Qué pasa si no paso una prop requerida?",
        respuesta:
          "El componente puede fallar o mostrar un valor por defecto si está definido.",
      },
      {
        pregunta: "¿Puedo pasar funciones como props?",
        respuesta:
          "Sí, es común pasar funciones para manejar eventos o actualizar el estado del padre.",
      },
      {
        pregunta: "¿Qué es el spread operator en props?",
        respuesta:
          "Permite pasar todas las propiedades de un objeto como props a un componente de forma dinámica.",
      },
    ],
    mitoYRealidad: {
      mito: "Las props pueden ser modificadas por el componente hijo.",
      realidad:
        "Las props son inmutables y solo pueden ser modificadas por el componente padre.",
    },
  },
  {
    id: "web2-estilos",
    materia: "Web2",
    temaCentral: "Estilos en React",
    subtemas: [
      "CSS en JS",
      "CSS Modules",
      "Styled Components",
      "clases dinámicas",
      "inline styles",
      "Sass",
      "Tailwind",
    ],
    objetivos: [
      "Aplicar diferentes formas de estilizar componentes en React.",
      "Diferenciar entre estilos globales, locales y en línea.",
      "Utilizar CSS Modules y librerías como Styled Components.",
      "Implementar clases dinámicas y condicionales.",
      "Integrar preprocesadores como Sass y frameworks como Tailwind.",
      "Evitar conflictos de estilos y mantener la escalabilidad.",
      "Comprender las ventajas y desventajas de cada enfoque.",
    ],
    definiciones: [
      {
        concepto: "CSS en JS",
        definicion:
          "Técnica para escribir estilos CSS directamente en archivos JavaScript usando objetos o literales de plantilla.",
      },
      {
        concepto: "CSS Modules",
        definicion:
          "Archivos CSS que generan clases únicas para evitar colisiones de nombres y se importan como objetos en los componentes.",
      },
      {
        concepto: "Styled Components",
        definicion:
          "Librería que permite escribir estilos CSS dentro de componentes usando template literals.",
      },
      {
        concepto: "Clases dinámicas",
        definicion:
          "Asignación de clases CSS en función del estado o props del componente.",
      },
      {
        concepto: "Inline styles",
        definicion:
          "Estilos definidos directamente en el atributo style de un elemento JSX como objeto JS.",
      },
      {
        concepto: "Sass",
        definicion:
          "Preprocesador CSS que añade variables, anidamiento y otras características avanzadas.",
      },
      {
        concepto: "Tailwind",
        definicion:
          "Framework de utilidades CSS para construir interfaces rápidamente usando clases predefinidas.",
      },
    ],
    buenasPracticas: [
      "Usar CSS Modules o Styled Components para evitar conflictos de nombres.",
      "Mantener los estilos cerca del componente que los usa.",
      "Evitar el uso excesivo de estilos en línea.",
      "Nombrar las clases de forma descriptiva y consistente.",
      "Utilizar variables y mixins en preprocesadores como Sass.",
      "Documentar estilos complejos o personalizados.",
      "Aprovechar las utilidades de frameworks como Tailwind para prototipado rápido.",
    ],
    erroresComunes: [
      "Sobrescribir estilos globales accidentalmente.",
      "No usar clases únicas, generando conflictos de estilos.",
      "Abusar de los estilos en línea, dificultando el mantenimiento.",
      "No aprovechar la composición de estilos en librerías como Styled Components.",
      "Olvidar importar el archivo de estilos correspondiente.",
      "No usar condicionales para clases dinámicas.",
      "No documentar estilos personalizados.",
    ],
    consejos: [
      "Elige la estrategia de estilos según la escala del proyecto.",
      "Usa CSS Modules para proyectos medianos y grandes.",
      "Styled Components es ideal para componentes altamente reutilizables.",
      "Tailwind acelera el desarrollo de prototipos y UIs modernas.",
      "Evita el uso excesivo de !important.",
      "Lee la documentación de cada herramienta antes de integrarla.",
      "Combina varias técnicas si el proyecto lo requiere.",
    ],
    tipos: [
      "global",
      "local",
      "inline",
      "dinámico",
      "preprocesador",
      "framework",
    ],
    ejemplo: {
      contexto: "Uso de CSS Modules y clases dinámicas.",
      codigo:
        "import styles from './Boton.module.css';\nfunction Boton({ activo }) {\n  return (\n    <button className={activo ? styles.activo : styles.inactivo}>Click</button>\n  );\n}",
    },
    ejercicios: [
      {
        enunciado:
          "Crea un componente con estilos en línea que cambien según el estado.",
      },
      {
        enunciado:
          "Implementa un componente usando CSS Modules y cambia la clase según una prop.",
      },
      {
        enunciado:
          "Utiliza Styled Components para crear un botón personalizado.",
      },
      {
        enunciado:
          "Integra Tailwind en un componente y usa clases utilitarias para el diseño.",
      },
      {
        enunciado:
          "Configura Sass en un proyecto React y usa variables y mixins en los estilos.",
      },
    ],
    recursos: [
      {
        nombre: "Documentación oficial de React - Estilos",
        tipo: "Documentación",
        enlace: "https://es.react.dev/learn/adding-styles",
      },
      {
        nombre: "CSS Modules en React",
        tipo: "Tutorial",
        enlace:
          "https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/",
      },
      {
        nombre: "Styled Components",
        tipo: "Referencia",
        enlace: "https://styled-components.com/docs/basics#getting-started",
      },
      {
        nombre: "Tailwind CSS",
        tipo: "Framework",
        enlace: "https://tailwindcss.com/docs/installation",
      },
      {
        nombre: "Sass en React",
        tipo: "Tutorial",
        enlace: "https://create-react-app.dev/docs/adding-a-sass-stylesheet/",
      },
    ],
    faq: [
      {
        pregunta: "¿Cuál es la diferencia entre estilos globales y locales?",
        respuesta:
          "Los globales afectan toda la app, los locales solo al componente donde se definen.",
      },
      {
        pregunta: "¿Qué ventajas tiene CSS Modules?",
        respuesta:
          "Evita conflictos de nombres y permite estilos locales por componente.",
      },
      {
        pregunta:
          "¿Puedo usar más de una técnica de estilos en el mismo proyecto?",
        respuesta: "Sí, puedes combinar varias según la necesidad.",
      },
      {
        pregunta: "¿Qué es Styled Components?",
        respuesta:
          "Una librería para escribir CSS en JS y crear componentes estilizados reutilizables.",
      },
      {
        pregunta: "¿Cómo agrego clases dinámicas en React?",
        respuesta: "Usando expresiones JS en el atributo className.",
      },
      {
        pregunta: "¿Qué es Tailwind y para qué sirve?",
        respuesta:
          "Un framework de utilidades CSS para construir UIs rápidas y modernas.",
      },
      {
        pregunta: "¿Es recomendable usar estilos en línea?",
        respuesta:
          "Solo para casos simples o dinámicos, no para estilos complejos o reutilizables.",
      },
    ],
    mitoYRealidad: {
      mito: "Solo se puede usar CSS tradicional en React.",
      realidad:
        "React permite múltiples estrategias de estilos, desde CSS tradicional hasta CSS-in-JS y frameworks modernos.",
    },
  },
  {
    id: "web2-dependencias",
    materia: "Web2",
    temaCentral: "Dependencias",
    subtemas: [
      "npm",
      "yarn",
      "package.json",
      "instalación",
      "actualización",
      "remoción",
      "dependencias de desarrollo",
    ],
    objetivos: [
      "Comprender el manejo de dependencias en proyectos React.",
      "Instalar, actualizar y eliminar paquetes usando npm o yarn.",
      "Diferenciar entre dependencias normales y de desarrollo.",
      "Leer y modificar el archivo package.json.",
      "Evitar conflictos y problemas de versiones.",
      "Mantener el proyecto actualizado y seguro.",
      "Identificar dependencias innecesarias o desactualizadas.",
    ],
    definiciones: [
      {
        concepto: "Dependencia",
        definicion:
          "Paquete externo que un proyecto necesita para funcionar correctamente.",
      },
      {
        concepto: "npm",
        definicion:
          "Node Package Manager, gestor de paquetes por defecto para proyectos Node.js y React.",
      },
      {
        concepto: "yarn",
        definicion: "Gestor de paquetes alternativo a npm, rápido y seguro.",
      },
      {
        concepto: "package.json",
        definicion:
          "Archivo que define las dependencias, scripts y metadatos de un proyecto JS.",
      },
      {
        concepto: "Dependencia de desarrollo",
        definicion:
          "Paquete necesario solo durante el desarrollo, no en producción.",
      },
      {
        concepto: "Versión semántica",
        definicion:
          "Sistema de numeración de versiones (mayor.menor.parche) para indicar compatibilidad.",
      },
      {
        concepto: "Actualización de dependencias",
        definicion:
          "Proceso de instalar versiones más recientes de los paquetes usados.",
      },
    ],
    buenasPracticas: [
      "Instalar solo las dependencias necesarias.",
      "Actualizar regularmente las dependencias para evitar vulnerabilidades.",
      "Usar versiones específicas y evitar el uso de latest sin control.",
      "Eliminar dependencias no utilizadas del package.json.",
      "Revisar los cambios de versión antes de actualizar.",
      "Separar dependencias normales de las de desarrollo.",
      "Documentar las dependencias clave en el README.",
    ],
    erroresComunes: [
      "Instalar paquetes innecesarios o duplicados.",
      "No actualizar dependencias y quedar expuesto a bugs o vulnerabilidades.",
      "Modificar package.json manualmente sin conocer el formato.",
      "No usar --save-dev para dependencias de desarrollo.",
      "Ignorar advertencias de seguridad al instalar paquetes.",
      "No eliminar dependencias obsoletas.",
      "No revisar el changelog de los paquetes al actualizar.",
    ],
    consejos: [
      "Lee la documentación de cada paquete antes de instalarlo.",
      "Usa npx para probar paquetes sin instalarlos globalmente.",
      "Automatiza la actualización de dependencias con herramientas como Dependabot o npm-check-updates.",
      "Haz pruebas después de actualizar dependencias críticas.",
      "Mantén el package.json limpio y bien documentado.",
      "Prefiere paquetes populares y bien mantenidos.",
      "Revisa las licencias de los paquetes antes de usarlos en producción.",
    ],
    tipos: ["normal", "desarrollo", "global", "local", "peer", "opcional"],
    ejemplo: {
      contexto: "Instalación y actualización de dependencias con npm.",
      codigo:
        "npm install axios\nnpm install --save-dev eslint\nnpm update react",
    },
    ejercicios: [
      {
        enunciado:
          "Instala una dependencia nueva en un proyecto React y úsala en un componente.",
      },
      {
        enunciado:
          "Elimina una dependencia que ya no se usa y limpia el package.json.",
      },
      {
        enunciado:
          "Actualiza todas las dependencias de desarrollo usando npm o yarn.",
      },
      {
        enunciado:
          "Diferencia entre dependencias normales y de desarrollo en el package.json.",
      },
      {
        enunciado:
          "Automatiza la revisión de actualizaciones con una herramienta externa.",
      },
    ],
    recursos: [
      {
        nombre: "npm - Documentación oficial",
        tipo: "Documentación",
        enlace: "https://docs.npmjs.com/",
      },
      {
        nombre: "Yarn - Documentación oficial",
        tipo: "Documentación",
        enlace: "https://classic.yarnpkg.com/lang/en/docs/",
      },
      {
        nombre: "package.json - Guía",
        tipo: "Tutorial",
        enlace: "https://nodejs.dev/en/learn/the-package-json-guide/",
      },
      {
        nombre: "Dependabot",
        tipo: "Herramienta",
        enlace:
          "https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates",
      },
      {
        nombre: "npm-check-updates",
        tipo: "Herramienta",
        enlace: "https://www.npmjs.com/package/npm-check-updates",
      },
    ],
    faq: [
      {
        pregunta:
          "¿Cuál es la diferencia entre dependencia normal y de desarrollo?",
        respuesta:
          "La normal es necesaria en producción, la de desarrollo solo durante el desarrollo y pruebas.",
      },
      {
        pregunta: "¿Qué pasa si elimino una dependencia del package.json?",
        respuesta:
          "Debes correr npm install para que se elimine de node_modules.",
      },
      {
        pregunta: "¿Puedo usar npm y yarn en el mismo proyecto?",
        respuesta: "No es recomendable, elige uno para evitar conflictos.",
      },
      {
        pregunta: "¿Cómo actualizo todas las dependencias a la vez?",
        respuesta:
          "Con npm update o usando herramientas como npm-check-updates.",
      },
      {
        pregunta: "¿Qué es una dependencia global?",
        respuesta:
          "Paquete instalado en todo el sistema, no solo en el proyecto actual.",
      },
      {
        pregunta: "¿Cómo identifico dependencias obsoletas?",
        respuesta: "Con npm outdated o herramientas externas.",
      },
      {
        pregunta:
          "¿Por qué es importante revisar las licencias de los paquetes?",
        respuesta:
          "Para asegurar el cumplimiento legal y evitar problemas en producción.",
      },
    ],
    mitoYRealidad: {
      mito: "Todas las dependencias deben instalarse como normales.",
      realidad:
        "Las dependencias de desarrollo solo deben instalarse con --save-dev para evitar inflar el bundle de producción.",
    },
  },
  {
    id: "web2-encarpetado",
    materia: "Web2",
    temaCentral: "Encarpetado y organización de archivos",
    subtemas: [
      "estructura básica",
      "carpetas por feature",
      "carpetas por tipo",
      "index.js",
      "modularidad",
      "naming conventions",
      "separación de lógica y UI",
    ],
    objetivos: [
      "Organizar los archivos y carpetas de un proyecto React de forma escalable.",
      "Diferenciar entre organización por tipo y por feature.",
      "Utilizar archivos index.js para simplificar importaciones.",
      "Separar la lógica de negocio de la UI.",
      "Aplicar convenciones de nombres consistentes.",
      "Facilitar el mantenimiento y escalabilidad del proyecto.",
      "Evitar la duplicación de código y dependencias circulares.",
    ],
    definiciones: [
      {
        concepto: "Encarpetado",
        definicion:
          "Estructura de carpetas y archivos que organiza el código fuente de un proyecto.",
      },
      {
        concepto: "Feature folder",
        definicion:
          "Carpeta que agrupa todos los archivos relacionados a una funcionalidad específica.",
      },
      {
        concepto: "Carpeta por tipo",
        definicion:
          "Organización donde los archivos se agrupan por su tipo (componentes, servicios, estilos, etc.).",
      },
      {
        concepto: "index.js",
        definicion:
          "Archivo que reexporta módulos para simplificar las importaciones.",
      },
      {
        concepto: "Modularidad",
        definicion:
          "Principio de dividir el código en partes independientes y reutilizables.",
      },
      {
        concepto: "Naming convention",
        definicion:
          "Reglas para nombrar archivos, carpetas y componentes de forma consistente.",
      },
      {
        concepto: "Separación de lógica y UI",
        definicion:
          "Dividir el código de presentación y la lógica de negocio en archivos o capas distintas.",
      },
    ],
    buenasPracticas: [
      "Usar una estructura de carpetas clara y documentada.",
      "Agrupar componentes y archivos por feature en proyectos grandes.",
      "Utilizar archivos index.js para exportar módulos de cada carpeta.",
      "Nombrar carpetas y archivos en minúsculas y con guiones.",
      "Separar la lógica de negocio en hooks o servicios.",
      "Evitar carpetas vacías o con un solo archivo.",
      "Actualizar la estructura según crece el proyecto.",
    ],
    erroresComunes: [
      "Mezclar lógica y UI en el mismo archivo.",
      "No usar archivos index.js para simplificar importaciones.",
      "Duplicar componentes o servicios en diferentes carpetas.",
      "No seguir una convención de nombres.",
      "Crear carpetas innecesarias o demasiado profundas.",
      "No documentar la estructura de carpetas.",
      "No actualizar la estructura al agregar nuevas features.",
    ],
    consejos: [
      "Elige la estructura según el tamaño y necesidades del proyecto.",
      "Prefiere feature folders en proyectos grandes y por tipo en proyectos pequeños.",
      "Documenta la estructura en el README del proyecto.",
      "Revisa ejemplos de proyectos open source para inspirarte.",
      "Refactoriza la estructura cuando sea necesario, no temas mover archivos.",
      "Usa herramientas de scaffolding para crear carpetas y archivos automáticamente.",
      "Mantén la estructura lo más plana posible sin perder claridad.",
    ],
    tipos: [
      "por tipo",
      "por feature",
      "modular",
      "index.js",
      "naming convention",
      "separación lógica/UI",
    ],
    ejemplo: {
      contexto:
        "Estructura de carpetas por feature e index.js para exportar módulos.",
      codigo:
        "src/\n  features/\n    usuarios/\n      UsuarioList.jsx\n      UsuarioForm.jsx\n      index.js // exporta ambos componentes\n  components/\n  services/\n  App.jsx",
    },
    ejercicios: [
      {
        enunciado:
          "Organiza un proyecto React usando carpetas por feature y archivos index.js.",
      },
      {
        enunciado:
          "Refactoriza la estructura de un proyecto para separar lógica y UI.",
      },
      {
        enunciado:
          "Implementa una convención de nombres para archivos y carpetas.",
      },
      {
        enunciado:
          "Crea un archivo index.js que reexporte todos los componentes de una carpeta.",
      },
      {
        enunciado:
          "Documenta la estructura de carpetas en el README del proyecto.",
      },
    ],
    recursos: [
      {
        nombre: "Estructura recomendada por React",
        tipo: "Documentación",
        enlace: "https://es.react.dev/learn/project-structure",
      },
      {
        nombre: "Feature folders en React",
        tipo: "Artículo",
        enlace:
          "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",
      },
      {
        nombre: "Naming conventions en proyectos JS",
        tipo: "Referencia",
        enlace: "https://github.com/kettanaito/naming-cheatsheet",
      },
      {
        nombre: "Separación de lógica y UI",
        tipo: "Tutorial",
        enlace: "https://kentcdodds.com/blog/separate-ui-and-business-logic",
      },
      {
        nombre: "Ejemplo de estructura modular",
        tipo: "Repositorio",
        enlace: "https://github.com/alan2207/bulletproof-react",
      },
    ],
    faq: [
      {
        pregunta: "¿Qué es mejor, organizar por tipo o por feature?",
        respuesta:
          "Depende del tamaño y necesidades del proyecto. Por feature es más escalable en proyectos grandes.",
      },
      {
        pregunta: "¿Para qué sirve un archivo index.js en una carpeta?",
        respuesta: "Para reexportar módulos y simplificar las importaciones.",
      },
      {
        pregunta: "¿Debo separar lógica y UI siempre?",
        respuesta: "Sí, mejora el mantenimiento y la reutilización del código.",
      },
      {
        pregunta: "¿Cómo nombro archivos y carpetas?",
        respuesta:
          "Usa minúsculas y guiones para carpetas, PascalCase para componentes.",
      },
      {
        pregunta: "¿Qué hago si la estructura actual no escala?",
        respuesta: "Refactoriza y documenta los cambios para el equipo.",
      },
      {
        pregunta: "¿Puedo combinar ambos enfoques?",
        respuesta: "Sí, puedes tener carpetas por tipo dentro de features.",
      },
      {
        pregunta: "¿Por qué evitar carpetas vacías?",
        respuesta: "Generan confusión y dificultan el mantenimiento.",
      },
    ],
    mitoYRealidad: {
      mito: "La estructura inicial del proyecto nunca debe cambiar.",
      realidad:
        "La estructura debe evolucionar según crecen las necesidades y el equipo.",
    },
  },
  {
    id: "web2-hooks",
    materia: "Web2",
    temaCentral: "Hooks",
    subtemas: [
      "useState",
      "useEffect",
      "useContext",
      "custom hooks",
      "reglas de hooks",
      "ciclo de vida",
      "reutilización de lógica",
    ],
    objetivos: [
      "Comprender el propósito y funcionamiento de los hooks en React.",
      "Utilizar hooks básicos como useState y useEffect.",
      "Crear y reutilizar custom hooks.",
      "Aplicar las reglas de los hooks correctamente.",
      "Gestionar el ciclo de vida de los componentes funcionales.",
      "Compartir lógica entre componentes usando hooks.",
      "Evitar errores comunes al usar hooks.",
    ],
    definiciones: [
      {
        concepto: "Hook",
        definicion:
          "Función especial de React que permite usar estado y otras características en componentes funcionales.",
      },
      {
        concepto: "useState",
        definicion:
          "Hook que permite agregar estado local a un componente funcional.",
      },
      {
        concepto: "useEffect",
        definicion:
          "Hook para manejar efectos secundarios como peticiones, suscripciones o cambios en el DOM.",
      },
      {
        concepto: "Custom hook",
        definicion:
          "Hook definido por el usuario para reutilizar lógica entre componentes.",
      },
      {
        concepto: "Reglas de hooks",
        definicion:
          "Normas que indican cómo y dónde deben usarse los hooks en React.",
      },
      {
        concepto: "Ciclo de vida",
        definicion:
          "Fases por las que pasa un componente desde su montaje hasta su desmontaje.",
      },
      {
        concepto: "useContext",
        definicion: "Hook que permite acceder a un contexto global en la app.",
      },
    ],
    buenasPracticas: [
      "Usar hooks solo en componentes funcionales o custom hooks.",
      "Seguir siempre las reglas de los hooks.",
      "Nombrar los custom hooks con el prefijo use.",
      "Extraer lógica repetida en custom hooks.",
      "Limitar el uso de useEffect a efectos realmente necesarios.",
      "Documentar la finalidad de cada custom hook.",
      "Evitar hooks anidados o condicionales.",
    ],
    erroresComunes: [
      "Usar hooks dentro de condicionales o bucles.",
      "No seguir el orden de los hooks en el renderizado.",
      "Olvidar limpiar efectos secundarios en useEffect.",
      "No inicializar correctamente el estado en useState.",
      "No reutilizar lógica con custom hooks.",
      "No documentar los hooks personalizados.",
      "Confundir el ciclo de vida de los hooks con el de los componentes de clase.",
    ],
    consejos: [
      "Lee la documentación oficial sobre hooks y sus reglas.",
      "Practica creando custom hooks para lógica repetitiva.",
      "Usa useContext para evitar prop drilling excesivo.",
      "Aprovecha useEffect para sincronizar datos y efectos externos.",
      "Utiliza herramientas como React DevTools para depurar hooks.",
      "No abuses de useEffect, busca alternativas como useMemo o useCallback.",
      "Refactoriza componentes grandes dividiendo la lógica en hooks.",
    ],
    tipos: [
      "básico",
      "custom",
      "estado",
      "efecto",
      "contexto",
      "ciclo de vida",
    ],
    ejemplo: {
      contexto: "Uso de useState y custom hook para contador.",
      codigo:
        "import { useState } from 'react';\nfunction useContador(inicial) {\n  const [valor, setValor] = useState(inicial);\n  const incrementar = () => setValor(v => v + 1);\n  return [valor, incrementar];\n}\n// Uso en componente:\nconst [contador, incrementar] = useContador(0);",
    },
    ejercicios: [
      {
        enunciado:
          "Crea un componente que use useState para manejar un input controlado.",
      },
      {
        enunciado:
          "Implementa un custom hook que gestione el estado de un formulario.",
      },
      {
        enunciado:
          "Utiliza useEffect para hacer una petición a una API al montar el componente.",
      },
      {
        enunciado:
          "Refactoriza lógica repetida en varios componentes usando un custom hook.",
      },
      {
        enunciado:
          "Usa useContext para compartir datos globales entre componentes.",
      },
    ],
    recursos: [
      {
        nombre: "Documentación oficial de React - Hooks",
        tipo: "Documentación",
        enlace: "https://es.react.dev/learn/reusing-logic-with-custom-hooks",
      },
      {
        nombre: "Reglas de los hooks",
        tipo: "Referencia",
        enlace: "https://es.react.dev/warnings/rules-of-hooks",
      },
      {
        nombre: "Custom hooks en React",
        tipo: "Tutorial",
        enlace:
          "https://www.freecodecamp.org/news/how-to-create-custom-react-hooks/",
      },
      {
        nombre: "React DevTools",
        tipo: "Herramienta",
        enlace: "https://react.dev/learn/react-developer-tools",
      },
      {
        nombre: "useContext y prop drilling",
        tipo: "Artículo",
        enlace:
          "https://kentcdodds.com/blog/how-to-use-react-context-effectively",
      },
    ],
    faq: [
      {
        pregunta: "¿Puedo usar hooks en componentes de clase?",
        respuesta:
          "No, los hooks solo funcionan en componentes funcionales o custom hooks.",
      },
      {
        pregunta: "¿Por qué debo seguir las reglas de los hooks?",
        respuesta:
          "Para que React pueda rastrear correctamente el estado y los efectos.",
      },
      {
        pregunta: "¿Qué es un custom hook?",
        respuesta:
          "Una función que usa hooks y permite reutilizar lógica entre componentes.",
      },
      {
        pregunta: "¿Cómo evito el prop drilling?",
        respuesta: "Usando useContext para compartir datos globales.",
      },
      {
        pregunta: "¿Qué pasa si uso un hook dentro de un condicional?",
        respuesta: "Puede causar errores y comportamientos inesperados.",
      },
      {
        pregunta: "¿Cómo depuro hooks en React?",
        respuesta: "Usa React DevTools y sigue las reglas de los hooks.",
      },
      {
        pregunta: "¿Puedo anidar hooks?",
        respuesta:
          "No, deben estar en el nivel superior del componente o custom hook.",
      },
    ],
    mitoYRealidad: {
      mito: "Los hooks solo sirven para el estado.",
      realidad:
        "Existen hooks para efectos, contexto, memoización, referencias y más.",
    },
  },
  {
    id: "web2-enrutamiento",
    materia: "Web2",
    temaCentral: "Enrutamiento en React",
    subtemas: [
      "react-router-dom",
      "rutas anidadas",
      "navegación programática",
      "params",
      "links",
      "redirecciones",
      "protección de rutas",
    ],
    objetivos: [
      "Implementar navegación entre páginas usando react-router-dom.",
      "Crear rutas anidadas y dinámicas.",
      "Utilizar parámetros de ruta y navegación programática.",
      "Proteger rutas privadas y manejar redirecciones.",
      "Diferenciar entre rutas absolutas y relativas.",
      "Configurar rutas 404 y manejo de errores.",
      "Optimizar la carga de componentes por ruta.",
    ],
    definiciones: [
      {
        concepto: "Enrutamiento",
        definicion:
          "Mecanismo para navegar entre diferentes vistas o páginas en una SPA.",
      },
      {
        concepto: "react-router-dom",
        definicion:
          "Librería estándar para manejar rutas en aplicaciones React.",
      },
      {
        concepto: "Ruta anidada",
        definicion:
          "Ruta definida dentro de otra, permitiendo jerarquía de vistas.",
      },
      {
        concepto: "Navegación programática",
        definicion: "Cambio de ruta mediante código JS, no solo enlaces.",
      },
      {
        concepto: "Params",
        definicion:
          "Parámetros dinámicos en la URL que permiten rutas flexibles.",
      },
      {
        concepto: "Redirección",
        definicion:
          "Envío automático del usuario a otra ruta según condiciones.",
      },
      {
        concepto: "Protección de rutas",
        definicion:
          "Restricción de acceso a ciertas rutas según autenticación o permisos.",
      },
    ],
    buenasPracticas: [
      "Definir rutas en un solo lugar para facilitar el mantenimiento.",
      "Usar componentes Link en vez de etiquetas <a> para navegación interna.",
      "Proteger rutas sensibles con autenticación.",
      "Manejar rutas 404 para mejorar la experiencia de usuario.",
      "Evitar rutas demasiado profundas o complejas.",
      "Documentar la estructura de rutas en el proyecto.",
      "Optimizar la carga de componentes con lazy loading.",
    ],
    erroresComunes: [
      "Usar etiquetas <a> en vez de Link, causando recarga completa de la página.",
      "No proteger rutas privadas.",
      "Olvidar pasar params requeridos en rutas dinámicas.",
      "No manejar rutas inexistentes (404).",
      "No actualizar la UI tras la navegación programática.",
      "Duplicar rutas o tener rutas ambiguas.",
      "No documentar la estructura de rutas.",
    ],
    consejos: [
      "Lee la documentación de react-router-dom y revisa ejemplos.",
      "Usa useNavigate para navegación programática.",
      "Implementa rutas protegidas con componentes wrapper.",
      "Aprovecha rutas anidadas para layouts complejos.",
      "Configura rutas 404 para mejorar la UX.",
      "Utiliza lazy loading para componentes de rutas pesadas.",
      "Refactoriza la estructura de rutas según crece la app.",
    ],
    tipos: ["básica", "anidada", "dinámica", "protegida", "redirección", "404"],
    ejemplo: {
      contexto: "Definición de rutas y navegación con react-router-dom.",
      codigo:
        "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to='/home'>Home</Link></nav>\n      <Routes>\n        <Route path='/home' element={<Home />} />\n        <Route path='/perfil/:id' element={<Perfil />} />\n        <Route path='*' element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    },
    ejercicios: [
      {
        enunciado:
          "Configura react-router-dom en un proyecto y crea al menos 3 rutas.",
      },
      {
        enunciado:
          "Implementa una ruta protegida que solo sea accesible si el usuario está autenticado.",
      },
      { enunciado: "Crea una ruta dinámica que reciba un parámetro por URL." },
      {
        enunciado:
          "Agrega una página 404 personalizada para rutas inexistentes.",
      },
      {
        enunciado:
          "Utiliza navegación programática para redirigir tras un evento.",
      },
    ],
    recursos: [
      {
        nombre: "react-router-dom - Documentación oficial",
        tipo: "Documentación",
        enlace: "https://reactrouter.com/en/main",
      },
      {
        nombre: "Rutas protegidas en React",
        tipo: "Tutorial",
        enlace: "https://ui.dev/react-router-protected-routes-authentication/",
      },
      {
        nombre: "Navegación programática",
        tipo: "Referencia",
        enlace: "https://reactrouter.com/en/main/hooks/use-navigate",
      },
      {
        nombre: "Lazy loading de rutas",
        tipo: "Tutorial",
        enlace: "https://react.dev/reference/react/lazy",
      },
      {
        nombre: "Ejemplo de rutas anidadas",
        tipo: "Repositorio",
        enlace:
          "https://github.com/remix-run/react-router/tree/main/examples/nested-routes",
      },
    ],
    faq: [
      {
        pregunta: "¿Por qué usar react-router-dom en vez de enlaces <a>?",
        respuesta: "Evita recargar la página y mantiene el estado de la SPA.",
      },
      {
        pregunta: "¿Cómo protejo una ruta privada?",
        respuesta:
          "Usando un componente wrapper que verifique autenticación antes de renderizar la ruta.",
      },
      {
        pregunta: "¿Qué es una ruta dinámica?",
        respuesta: "Ruta que recibe parámetros variables en la URL.",
      },
      {
        pregunta: "¿Cómo manejo rutas inexistentes?",
        respuesta:
          "Definiendo una ruta catch-all con path='*' y un componente 404.",
      },
      {
        pregunta: "¿Puedo anidar rutas en React?",
        respuesta:
          "Sí, react-router-dom permite rutas anidadas para layouts complejos.",
      },
      {
        pregunta: "¿Qué es la navegación programática?",
        respuesta:
          "Cambiar de ruta mediante código JS, por ejemplo tras un evento o acción.",
      },
      {
        pregunta: "¿Cómo optimizo la carga de rutas?",
        respuesta:
          "Usando lazy loading y code splitting para componentes pesados.",
      },
    ],
    mitoYRealidad: {
      mito: "El enrutamiento solo es necesario en apps grandes.",
      realidad:
        "Incluso apps pequeñas se benefician de una navegación estructurada y rutas bien definidas.",
    },
  },
  {
    id: "web2-peticiones-asincronas",
    materia: "Web2",
    temaCentral: "Peticiones asíncronas",
    subtemas: [
      "fetch",
      "axios",
      "async/await",
      "promesas",
      "manejo de errores",
      "loading state",
      "cancelación de peticiones",
    ],
    objetivos: [
      "Realizar peticiones HTTP desde componentes React.",
      "Utilizar fetch y axios para consumir APIs.",
      "Manejar el estado de carga y errores en peticiones asíncronas.",
      "Implementar async/await y promesas en la lógica de datos.",
      "Cancelar peticiones cuando el componente se desmonta.",
      "Evitar fugas de memoria y condiciones de carrera.",
      "Mostrar feedback al usuario durante la carga de datos.",
    ],
    definiciones: [
      {
        concepto: "Petición asíncrona",
        definicion:
          "Solicitud de datos a un servidor que no bloquea la ejecución del código.",
      },
      {
        concepto: "fetch",
        definicion:
          "API nativa de JS para hacer peticiones HTTP de forma asíncrona.",
      },
      {
        concepto: "axios",
        definicion:
          "Librería popular para hacer peticiones HTTP con una API sencilla y soporte para cancelación.",
      },
      {
        concepto: "async/await",
        definicion:
          "Sintaxis para escribir código asíncrono de forma más legible usando promesas.",
      },
      {
        concepto: "Promesa",
        definicion:
          "Objeto que representa el resultado eventual de una operación asíncrona.",
      },
      {
        concepto: "Manejo de errores",
        definicion:
          "Técnicas para capturar y gestionar errores en peticiones asíncronas.",
      },
      {
        concepto: "Cancelación de peticiones",
        definicion:
          "Interrupción de una petición HTTP antes de que termine, para evitar efectos secundarios.",
      },
    ],
    buenasPracticas: [
      "Manejar el estado de carga y error en el componente.",
      "Limpiar peticiones pendientes al desmontar el componente.",
      "Usar try/catch con async/await para capturar errores.",
      "Mostrar feedback visual durante la carga de datos.",
      "Evitar peticiones innecesarias o duplicadas.",
      "Documentar la lógica de manejo de datos asíncronos.",
      "Utilizar abort controllers para cancelar peticiones si es necesario.",
    ],
    erroresComunes: [
      "No manejar errores de red o respuesta inválida.",
      "No mostrar estado de carga al usuario.",
      "Dejar peticiones pendientes al desmontar el componente.",
      "No usar async/await correctamente.",
      "Duplicar peticiones por falta de dependencias en useEffect.",
      "No limpiar timers o suscripciones en efectos asíncronos.",
      "No documentar la lógica de peticiones complejas.",
    ],
    consejos: [
      "Lee la documentación de fetch y axios para conocer sus diferencias.",
      "Usa useEffect para disparar peticiones al montar el componente.",
      "Implementa loading y error states para mejorar la UX.",
      "Utiliza try/catch y finally para manejar el ciclo completo de la petición.",
      "Cancela peticiones con AbortController o cancel tokens en axios.",
      "Evita fugas de memoria limpiando efectos en useEffect.",
      "Refactoriza la lógica de peticiones en custom hooks si se repite.",
    ],
    tipos: [
      "fetch",
      "axios",
      "promesa",
      "async/await",
      "cancelación",
      "loading",
      "error",
    ],
    ejemplo: {
      contexto: "Petición asíncrona con fetch y manejo de loading/error.",
      codigo:
        "import { useState, useEffect } from 'react';\nfunction Usuarios() {\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  useEffect(() => {\n    fetch('https://api.example.com/users')\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, []);\n  if (loading) return <p>Cargando...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n  return <ul>{data.map(u => <li key={u.id}>{u.nombre}</li>)}</ul>;\n}",
    },
    ejercicios: [
      {
        enunciado:
          "Haz una petición a una API pública y muestra los datos en una lista.",
      },
      {
        enunciado:
          "Implementa manejo de loading y error en un componente que consume datos externos.",
      },
      {
        enunciado:
          "Cancela una petición si el componente se desmonta antes de completarse.",
      },
      {
        enunciado:
          "Refactoriza la lógica de peticiones en un custom hook reusable.",
      },
      {
        enunciado:
          "Muestra un mensaje personalizado si la API retorna un error 404.",
      },
    ],
    recursos: [
      {
        nombre: "fetch - MDN",
        tipo: "Documentación",
        enlace: "https://developer.mozilla.org/es/docs/Web/API/Fetch_API",
      },
      {
        nombre: "axios - Documentación",
        tipo: "Referencia",
        enlace: "https://axios-http.com/docs/intro",
      },
      {
        nombre: "Async/await en JS",
        tipo: "Tutorial",
        enlace:
          "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await",
      },
      {
        nombre: "AbortController para cancelar fetch",
        tipo: "Referencia",
        enlace: "https://developer.mozilla.org/es/docs/Web/API/AbortController",
      },
      {
        nombre: "Custom hooks para peticiones",
        tipo: "Tutorial",
        enlace: "https://usehooks.com/useFetch/",
      },
    ],
    faq: [
      {
        pregunta: "¿Cuál es la diferencia entre fetch y axios?",
        respuesta:
          "Axios tiene una API más sencilla, soporte para cancelación y transforma respuestas automáticamente.",
      },
      {
        pregunta: "¿Cómo manejo el estado de carga y error?",
        respuesta:
          "Usando useState para loading y error, y mostrándolos en la UI.",
      },
      {
        pregunta: "¿Por qué cancelar peticiones al desmontar el componente?",
        respuesta:
          "Para evitar fugas de memoria y errores de actualización de estado.",
      },
      {
        pregunta: "¿Qué es async/await?",
        respuesta:
          "Sintaxis para escribir código asíncrono de forma más legible usando promesas.",
      },
      {
        pregunta: "¿Cómo manejo errores en peticiones asíncronas?",
        respuesta: "Con try/catch o el método .catch() en promesas.",
      },
      {
        pregunta: "¿Puedo usar custom hooks para peticiones?",
        respuesta: "Sí, es una buena práctica para reutilizar lógica.",
      },
      {
        pregunta: "¿Qué es un loading state?",
        respuesta:
          "Estado que indica si una petición está en curso y se debe mostrar feedback al usuario.",
      },
    ],
    mitoYRealidad: {
      mito: "Las peticiones asíncronas solo son necesarias en apps grandes.",
      realidad:
        "Cualquier app que consuma datos externos necesita manejar peticiones asíncronas correctamente.",
    },
  },
  {
    id: "web2-endpoints",
    materia: "Web2",
    temaCentral: "Endpoints y APIs",
    subtemas: [
      "REST",
      "GraphQL",
      "endpoints públicos",
      "privados",
      "autenticación",
      "parámetros",
      "respuesta de la API",
    ],
    objetivos: [
      "Comprender qué es un endpoint y su función en una API.",
      "Diferenciar entre endpoints públicos y privados.",
      "Consumir endpoints REST y GraphQL desde React.",
      "Manejar autenticación y autorización en peticiones a APIs.",
      "Enviar parámetros y procesar respuestas de la API.",
      "Validar y documentar los endpoints consumidos.",
      "Evitar errores comunes al interactuar con APIs externas.",
    ],
    definiciones: [
      {
        concepto: "Endpoint",
        definicion:
          "URL específica de una API a la que se puede hacer una petición para obtener o modificar datos.",
      },
      {
        concepto: "REST",
        definicion:
          "Estilo de arquitectura para APIs basado en recursos y operaciones HTTP estándar.",
      },
      {
        concepto: "GraphQL",
        definicion:
          "Lenguaje de consulta para APIs que permite pedir solo los datos necesarios.",
      },
      {
        concepto: "Endpoint público",
        definicion: "Ruta de la API accesible sin autenticación especial.",
      },
      {
        concepto: "Endpoint privado",
        definicion:
          "Ruta de la API que requiere autenticación o permisos especiales.",
      },
      {
        concepto: "Parámetro de ruta",
        definicion:
          "Valor dinámico incluido en la URL del endpoint para filtrar o identificar recursos.",
      },
      {
        concepto: "Respuesta de la API",
        definicion:
          "Datos devueltos por el servidor tras una petición a un endpoint.",
      },
    ],
    buenasPracticas: [
      "Documentar todos los endpoints consumidos en el proyecto.",
      "Validar las respuestas de la API antes de usarlas en la UI.",
      "Manejar autenticación y tokens de forma segura.",
      "Separar la lógica de consumo de APIs en servicios o hooks.",
      "Evitar exponer claves o tokens en el frontend.",
      "Manejar errores y estados de la API de forma clara.",
      "Actualizar la documentación si cambian los endpoints.",
    ],
    erroresComunes: [
      "No validar la respuesta de la API antes de usarla.",
      "Exponer claves o tokens en el código fuente.",
      "No manejar errores de autenticación o permisos.",
      "Confundir endpoints públicos y privados.",
      "No documentar los endpoints usados.",
      "No actualizar la lógica si cambia la API externa.",
      "No manejar correctamente los parámetros de ruta o query.",
    ],
    consejos: [
      "Lee la documentación de la API antes de consumirla.",
      "Usa herramientas como Postman para probar endpoints antes de integrarlos.",
      "Implementa servicios o hooks para centralizar la lógica de consumo de APIs.",
      "Maneja autenticación con tokens seguros y variables de entorno.",
      "Valida siempre la estructura de la respuesta antes de renderizar datos.",
      "Actualiza la documentación del proyecto si cambian los endpoints.",
      "Evita hardcodear URLs, usa variables de entorno.",
    ],
    tipos: [
      "REST",
      "GraphQL",
      "público",
      "privado",
      "autenticado",
      "parámetro",
      "respuesta",
    ],
    ejemplo: {
      contexto:
        "Consumo de endpoint REST con autenticación y manejo de respuesta.",
      codigo:
        "fetch('https://api.example.com/usuarios', {\n  headers: { Authorization: 'Bearer TOKEN' }\n})\n  .then(res => res.json())\n  .then(data => console.log(data));",
    },
    ejercicios: [
      {
        enunciado:
          "Haz una petición a un endpoint público y muestra los datos en pantalla.",
      },
      {
        enunciado:
          "Implementa autenticación con token para consumir un endpoint privado.",
      },
      {
        enunciado:
          "Documenta todos los endpoints usados en el proyecto en un archivo markdown.",
      },
      {
        enunciado:
          "Valida la estructura de la respuesta de una API antes de mostrarla en la UI.",
      },
      {
        enunciado:
          "Refactoriza la lógica de consumo de APIs en un custom hook reusable.",
      },
    ],
    recursos: [
      {
        nombre: "REST APIs - MDN",
        tipo: "Documentación",
        enlace: "https://developer.mozilla.org/es/docs/Glossary/REST",
      },
      {
        nombre: "GraphQL - Documentación oficial",
        tipo: "Referencia",
        enlace: "https://graphql.org/learn/",
      },
      {
        nombre: "Postman para probar APIs",
        tipo: "Herramienta",
        enlace: "https://www.postman.com/",
      },
      {
        nombre: "Autenticación con JWT",
        tipo: "Tutorial",
        enlace: "https://jwt.io/introduction",
      },
      {
        nombre: "Variables de entorno en React",
        tipo: "Referencia",
        enlace:
          "https://create-react-app.dev/docs/adding-custom-environment-variables/",
      },
    ],
    faq: [
      {
        pregunta: "¿Qué es un endpoint en una API?",
        respuesta:
          "Es una URL específica a la que se puede hacer una petición para obtener o modificar datos.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre endpoint público y privado?",
        respuesta: "El público no requiere autenticación, el privado sí.",
      },
      {
        pregunta: "¿Qué es REST?",
        respuesta:
          "Un estilo de arquitectura para APIs basado en recursos y operaciones HTTP estándar.",
      },
      {
        pregunta: "¿Cómo manejo autenticación en peticiones a APIs?",
        respuesta:
          "Usando tokens o credenciales en los headers de la petición.",
      },
      {
        pregunta: "¿Qué es GraphQL?",
        respuesta:
          "Un lenguaje de consulta para APIs que permite pedir solo los datos necesarios.",
      },
      {
        pregunta: "¿Por qué validar la respuesta de la API?",
        respuesta:
          "Para evitar errores si la estructura cambia o los datos no son los esperados.",
      },
      {
        pregunta: "¿Cómo documento los endpoints usados?",
        respuesta: "En un archivo markdown o en la documentación del proyecto.",
      },
    ],
    mitoYRealidad: {
      mito: "Todos los endpoints son públicos y no requieren autenticación.",
      realidad:
        "La mayoría de las APIs modernas tienen endpoints privados que requieren autenticación y permisos.",
    },
  },
].map((t) => ({
  ...t,
  materiaId: "web2",
  materia: "Web 2",
}));

export default function CargarTemasWeb2() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role") || "");
  }, []);

  const handleCargar = async () => {
    setLoading(true);
    setMsg("");
    try {
      for (const tema of temasWeb2) {
        await setDoc(doc(collection(db, "temas"), tema.id), tema);
      }
      setMsg("Todos los temas Web2 cargados correctamente en Firebase.");
    } catch (e) {
      setMsg("Error: " + (e.message || e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      {role === "teacher" || role === "admin" ? (
        <button
          onClick={handleCargar}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow hover:bg-indigo-700 disabled:opacity-60"
        >
          Cargar temas Web2 en Firebase
        </button>
      ) : (
        <div className="text-red-600 font-bold text-center mb-2">
          Acceso solo para profesor o admin
        </div>
      )}
      {msg && (
        <div className="text-center text-indigo-700 font-semibold mt-2">
          {msg}
        </div>
      )}
      <div className="text-xs text-gray-500 mt-4 max-w-xs text-center">
        Este componente es solo para desarrollo. Carga <b>los temas Web2</b> en
        la colección <b>temas</b> de Firebase Firestore.
        <br />
        Puedes eliminarlo después de ejecutarlo una vez.
      </div>
    </div>
  );
}
