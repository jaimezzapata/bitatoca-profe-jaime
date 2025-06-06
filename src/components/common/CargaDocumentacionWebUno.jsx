import { useState, useEffect } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

// Temas Web1 para cargar en Firebase
const temasWeb1 = [
  {
    id: "web1-semana1-generalidades-js",
    semana: { numero: 1, fechas: "-" },
    temaCentral: "Generalidades JavaScript",
    subtemas: ["variables", "tipos de datos", "operadores aritméticos", "unarios", "NaN", "null", "typeof", "hoisting", "scope"],
    objetivos: [
      "Comprender los conceptos básicos de JavaScript.",
      "Identificar los diferentes tipos de datos y operadores.",
      "Diferenciar entre null, undefined y NaN.",
      "Entender el hoisting y el scope.",
      "Reconocer la importancia de la declaración de variables.",
      "Aplicar operadores aritméticos y unarios correctamente."
    ],
    definiciones: [
      { concepto: "Variable", definicion: "Espacio en memoria para almacenar un valor que puede cambiar durante la ejecución." },
      { concepto: "Hoisting", definicion: "Comportamiento de JavaScript que mueve las declaraciones al inicio del contexto de ejecución." },
      { concepto: "Scope", definicion: "Ámbito donde una variable es accesible." },
      { concepto: "NaN", definicion: "Valor especial que significa 'Not a Number', resultado de operaciones matemáticas inválidas." },
      { concepto: "typeof", definicion: "Operador que retorna el tipo de dato de una variable." },
      { concepto: "null", definicion: "Valor especial que representa la ausencia intencional de valor." }
    ],
    ejemplo: {
      contexto: "Declaración y uso de variables y operadores.",
      codigo: "let x = 5;\nconst y = 'hola';\nlet z = x / 'a'; // NaN\nconsole.log(typeof x); // 'number'\nconsole.log(typeof null); // 'object'\nconsole.log(typeof undefined); // 'undefined'"
    },
    buenasPracticas: [
      "Usar const y let en vez de var.",
      "Nombrar variables de forma descriptiva.",
      "Inicializar variables al declararlas.",
      "Evitar el uso innecesario de variables globales.",
      "Comentar el propósito de variables complejas.",
      "Evitar el uso de nombres de variables de una sola letra salvo en bucles simples."
    ],
    erroresComunes: [
      "Olvidar inicializar variables.",
      "Confundir null, undefined y NaN.",
      "Usar var en vez de let/const.",
      "No respetar el scope de las variables.",
      "Sobrescribir variables globales accidentalmente.",
      "No comprobar el tipo de dato antes de operar."
    ],
    consejos: [
      "Siempre declara tus variables al inicio del bloque.",
      "Prefiere const para valores que no cambian.",
      "Utiliza typeof para depurar errores de tipo.",
      "Evita usar variables globales, encapsula en funciones.",
      "Lee la documentación oficial sobre tipos y operadores."
    ],
    tipos: ["number", "string", "boolean", "object", "undefined", "symbol", "bigint", "function", "null"],
    ejercicios: [
      { enunciado: "Declara una variable para cada tipo de dato y muestra su tipo con typeof." },
      { enunciado: "Crea una variable con valor null y otra con undefined, muestra la diferencia." },
      { enunciado: "Realiza una operación aritmética inválida y analiza el resultado (NaN)." },
      { enunciado: "Demuestra el hoisting con var, let y const." },
      { enunciado: "Crea una función que reciba un valor y retorne su tipo usando typeof." }
    ],
    recursos: [
      { nombre: "MDN Variables", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraci%C3%B3n_de_variables" },
      { nombre: "MDN Tipos de datos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures" },
      { nombre: "MDN Operadores", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators" },
      { nombre: "JavaScript Hoisting", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/" },
      { nombre: "JavaScript Scope", tipo: "Tutorial", enlace: "https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript" },
      { nombre: "JavaScript NaN", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN" }
    ],
    faq: [
      { pregunta: "¿Cuál es la diferencia entre null y undefined?", respuesta: "null es una ausencia intencional de valor, undefined es una variable declarada pero sin valor asignado." },
      { pregunta: "¿Por qué typeof null retorna 'object'?", respuesta: "Es un bug histórico de JavaScript, pero null no es un objeto." },
      { pregunta: "¿Qué pasa si uso una variable sin declarar?", respuesta: "Obtendrás un ReferenceError." },
      { pregunta: "¿Qué es el hoisting?", respuesta: "Es el comportamiento de mover las declaraciones al inicio del contexto de ejecución." },
      { pregunta: "¿Puedo cambiar el tipo de una variable en JavaScript?", respuesta: "Sí, JavaScript es de tipado dinámico." },
      { pregunta: "¿Qué es NaN y cuándo aparece?", respuesta: "Es 'Not a Number', aparece en operaciones matemáticas inválidas." },
      { pregunta: "¿Qué tipos de datos existen en JavaScript?", respuesta: "number, string, boolean, object, undefined, symbol, bigint, function, null." }
    ],
    mitoYRealidad: {
      mito: "JavaScript es solo para páginas web simples.",
      realidad: "JavaScript es un lenguaje potente usado en frontend, backend, apps móviles y más."
    }
  },
  {
    id: "web1-semana2-condicionales",
    semana: { numero: 2, fechas: "-" },
    temaCentral: "Condicionales",
    subtemas: ["simples", "compuestos", "anidados", "múltiples", "ternarios"],
    objetivos: [
      "Aplicar estructuras condicionales para controlar el flujo del programa.",
      "Diferenciar entre if, else if, else y switch.",
      "Utilizar el operador ternario correctamente.",
      "Identificar condiciones simples y compuestas.",
      "Evitar la duplicación de código usando condicionales adecuadamente."
    ],
    definiciones: [
      { concepto: "Condicional", definicion: "Estructura que permite ejecutar código solo si se cumple una condición." },
      { concepto: "Operador ternario", definicion: "Sintaxis corta para condicionales: condición ? valorSi : valorNo." },
      { concepto: "Condición compuesta", definicion: "Condición que combina múltiples expresiones usando operadores lógicos." },
      { concepto: "Sentencia if", definicion: "Estructura que ejecuta un bloque de código si la condición es verdadera." },
      { concepto: "Sentencia switch", definicion: "Estructura que permite seleccionar entre múltiples opciones basadas en el valor de una variable." }
    ],
    ejemplo: {
      contexto: "Uso de if, else y operador ternario.",
      codigo: "let edad = 18;\nif (edad >= 18) {\n  console.log('Mayor de edad');\n} else {\n  console.log('Menor de edad');\n}\n// Ternario\nlet mensaje = edad >= 18 ? 'Mayor' : 'Menor';"
    },
    buenasPracticas: [
      "Usar llaves incluso en condicionales de una sola línea.",
      "Evitar condicionales anidados innecesarios.",
      "Comentar condiciones complejas.",
      "Usar el operador ternario para asignaciones simples.",
      "Mantener las condiciones simples y legibles."
    ],
    erroresComunes: [
      "Olvidar el else en casos necesarios.",
      "Confundir == con ===.",
      "No cubrir todos los casos en un switch.",
      "Crear condiciones demasiado complejas.",
      "Olvidar las llaves en condicionales de múltiples líneas."
    ],
    consejos: [
      "Prefiere === para comparar valores.",
      "Usa switch para múltiples opciones claras.",
      "Descompón condiciones complejas en variables descriptivas.",
      "Evita efectos secundarios en las condiciones.",
      "Lee sobre patrones de diseño como 'Command' para condicionales complejas."
    ],
    tipos: ["if", "else", "else if", "switch", "ternario"],
    ejercicios: [
      { enunciado: "Crea un programa que indique si un número es positivo, negativo o cero usando if-else." },
      { enunciado: "Utiliza el operador ternario para asignar un mensaje basado en la edad." },
      { enunciado: "Crea un programa que clasifique una nota en letras (A, B, C, D, F) usando switch." },
      { enunciado: "Implementa un sistema de validación de formulario básico usando condicionales." },
      { enunciado: "Desarrolla una función que reciba un número y retorne 'par' o 'impar'." }
    ],
    recursos: [
      { nombre: "MDN if...else", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else" },
      { nombre: "MDN switch", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch" },
      { nombre: "MDN Operador ternario", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" },
      { nombre: "JavaScript Conditional Statements", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_if_else.asp" },
      { nombre: "JavaScript Switch Case", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-switch-case-explained-with-examples/" }
    ],
    faq: [
      { pregunta: "¿Cuál es la diferencia entre == y ===?", respuesta: "== compara valores con conversión de tipo, === compara valores y tipos sin conversión." },
      { pregunta: "¿Puedo usar if sin else?", respuesta: "Sí, el bloque else es opcional." },
      { pregunta: "¿Qué hace el operador && en una condición?", respuesta: "Evalúa si ambas condiciones son verdaderas." },
      { pregunta: "¿Es obligatorio usar break en un switch?", respuesta: "Sí, para evitar que se ejecuten múltiples casos a menos que se use 'fall through' intencionalmente." },
      { pregunta: "¿Qué es el 'fall through' en switch?", respuesta: "Es cuando varios casos se ejecutan uno tras otro sin break." }
    ],
    mitoYRealidad: {
      mito: "El operador ternario es difícil de leer y no debe usarse.",
      realidad: "El ternario es útil para expresiones simples y mejora la legibilidad si se usa bien."
    }
  },
  {
    id: "web1-semana3-ciclos",
    semana: { numero: 3, fechas: "-" },
    temaCentral: "Ciclos",
    subtemas: ["while", "do-while", "for"],
    objetivos: [
      "Repetir acciones usando diferentes tipos de bucles.",
      "Diferenciar entre while, do-while y for.",
      "Identificar cuándo usar cada tipo de ciclo.",
      "Evitar la duplicación de código usando ciclos.",
      "Controlar el flujo de ejecución de un programa."
    ],
    definiciones: [
      { concepto: "Ciclo", definicion: "Estructura que repite un bloque de código mientras se cumpla una condición." },
      { concepto: "Bucle infinito", definicion: "Ciclo que nunca termina porque su condición nunca se vuelve falsa." },
      { concepto: "Variable de control", definicion: "Variable que se utiliza para controlar el número de iteraciones de un ciclo." },
      { concepto: "Sentencia break", definicion: "Instrucción que termina el ciclo actual y continúa con la siguiente instrucción después del ciclo." },
      { concepto: "Sentencia continue", definicion: "Instrucción que salta la iteración currente y continúa con la siguiente iteración del ciclo." }
    ],
    ejemplo: {
      contexto: "Uso de for y while.",
      codigo: "for(let i=0; i<5; i++){ console.log(i); }\nlet j=0; while(j<5){ console.log(j); j++; }"
    },
    buenasPracticas: [
      "Inicializar correctamente las variables de control.",
      "Evitar ciclos infinitos.",
      "Usar break y continue con moderación.",
      "Prefiere for...of y for...in para recorrer colecciones.",
      "Comentar la lógica de los ciclos complejos."
    ],
    erroresComunes: [
      "Olvidar actualizar la variable de control.",
      "Condiciones mal planteadas que generan bucles infinitos.",
      "No usar llaves en ciclos de una sola línea.",
      "Modificar la variable de control dentro del ciclo accidentalmente.",
      "No validar la salida del ciclo."
    ],
    consejos: [
      "Elige el ciclo según la necesidad: for para cantidad conocida, while para condición variable.",
      "Usa break para salir de ciclos anidados.",
      "Evita la lógica compleja dentro de las condiciones del ciclo.",
      "Lee sobre el patrón de diseño 'Iterator' para entender mejor los ciclos.",
      "Practica la conversión de bucles for en bucles while y viceversa."
    ],
    tipos: ["for", "while", "do-while"],
    ejercicios: [
      { enunciado: "Imprime los números del 1 al 10 usando un ciclo for." },
      { enunciado: "Usa un ciclo while para imprimir los números del 10 al 1." },
      { enunciado: "Crea un programa que sume los números del 1 al 100 usando un ciclo." },
      { enunciado: "Implementa un contador regresivo que imprima 'Despegue!' al llegar a 0." },
      { enunciado: "Desarrolla una función que reciba un arreglo y lo imprima usando un ciclo." }
    ],
    recursos: [
      { nombre: "MDN Ciclos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#ciclos" },
      { nombre: "MDN for...of", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of" },
      { nombre: "MDN for...in", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in" },
      { nombre: "JavaScript Loops", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_loop_for.asp" },
      { nombre: "JavaScript While Loop", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-while-loop-explained-with-examples/" }
    ],
    faq: [
      { pregunta: "¿Cuál es la diferencia entre for...of y for...in?", respuesta: "for...of itera sobre los valores de un iterable, for...in itera sobre las claves de un objeto." },
      { pregunta: "¿Puedo interrumpir un ciclo con una condición?", respuesta: "Sí, usando la sentencia break." },
      { pregunta: "¿Qué pasa si olvido actualizar la variable de control en un ciclo?", respuesta: "Podrías crear un bucle infinito." },
      { pregunta: "¿Es necesario usar break en un switch?", respuesta: "Sí, para evitar que se ejecuten múltiples casos a menos que se use 'fall through' intencionalmente." },
      { pregunta: "¿Qué es el 'fall through' en switch?", respuesta: "Es cuando varios casos se ejecutan uno tras otro sin break." }
    ],
    mitoYRealidad: {
      mito: "Los ciclos for y while son intercambiables siempre.",
      realidad: "Cada ciclo tiene su caso de uso ideal según la lógica del problema."
    }
  },
  {
    id: "web1-semana4-funciones",
    semana: { numero: 4, fechas: "-" },
    temaCentral: "Funciones",
    subtemas: ["flecha", "anónimas", "regulares", "de expresión", "declarativas", "parámetros", "argumentos"],
    objetivos: [
      "Definir y utilizar funciones de diferentes tipos.",
      "Comprender la diferencia entre parámetros y argumentos.",
      "Aplicar funciones flecha y anónimas.",
      "Evitar la duplicación de código usando funciones.",
      "Leer y entender código de otros usando funciones bien nombradas."
    ],
    definiciones: [
      { concepto: "Función", definicion: "Bloque de código reutilizable que realiza una tarea específica." },
      { concepto: "Función flecha", definicion: "Sintaxis corta para definir funciones usando =>." },
      { concepto: "Parámetro", definicion: "Variable en la declaración de una función que recibe un valor." },
      { concepto: "Argumento", definicion: "Valor que se pasa a una función cuando se llama." },
      { concepto: "Función anónima", definicion: "Función sin nombre, generalmente usada como argumento en otras funciones." }
    ],
    ejemplo: {
      contexto: "Declaración de función regular y flecha.",
      codigo: "function suma(a, b) { return a + b; }\nconst resta = (a, b) => a - b;"
    },
    buenasPracticas: [
      "Nombrar funciones de forma descriptiva.",
      "Evitar funciones demasiado largas.",
      "Comentar funciones complejas.",
      "Usar funciones puras siempre que sea posible.",
      "Evitar efectos secundarios en las funciones."
    ],
    erroresComunes: [
      "No retornar valor cuando se espera.",
      "Confundir parámetros con argumentos.",
      "No usar const para funciones de expresión.",
      "Crear funciones con demasiadas responsabilidades.",
      "Olvidar documentar el propósito y uso de las funciones."
    ],
    consejos: [
      "Divide funciones grandes en funciones más pequeñas y manejables.",
      "Usa funciones de orden superior para abstracciones comunes.",
      "Lee sobre patrones de diseño como 'Strategy' y 'Command' para funciones complejas.",
      "Practica la escritura de pruebas unitarias para tus funciones.",
      "Consulta la documentación de MDN sobre funciones avanzadas."
    ],
    tipos: ["declarativa", "expresión", "flecha", "anónima"],
    ejercicios: [
      { enunciado: "Crea una función que reciba dos números y retorne su suma." },
      { enunciado: "Implementa una función flecha que reciba un arreglo y retorne su primer elemento." },
      { enunciado: "Desarrolla una función que clasifique un número como positivo, negativo o cero." },
      { enunciado: "Crea una función que reciba un string y retorne cuántas vocales tiene." },
      { enunciado: "Implementa una función que genere un número aleatorio entre dos valores dados." }
    ],
    recursos: [
      { nombre: "MDN Funciones", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions" },
      { nombre: "MDN Funciones flecha", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions" },
      { nombre: "JavaScript Functions", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_functions.asp" },
      { nombre: "JavaScript Function Expressions", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-function-expressions-explained-with-examples/" },
      { nombre: "JavaScript Hoisting (Functions)", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Glossario/Hoisting" }
    ],
    faq: [
      { pregunta: "¿Cuál es la diferencia entre una función declarativa y una de expresión?", respuesta: "Una función declarativa es una declaración completa, una de expresión es parte de una expresión más grande." },
      { pregunta: "¿Puedo tener una función dentro de otra función?", respuesta: "Sí, eso se llama función anidada." },
      { pregunta: "¿Qué es una función de orden superior?", respuesta: "Es una función que recibe otra función como argumento o la retorna." },
      { pregunta: "¿Qué significa 'this' dentro de una función?", respuesta: "'this' se refiere al contexto de ejecución de la función." },
      { pregunta: "¿Puedo cambiar el valor de 'this'?", respuesta: "Sí, usando call(), apply() o bind()." }
    ],
    mitoYRealidad: {
      mito: "Las funciones flecha siempre reemplazan a las regulares.",
      realidad: "Las funciones flecha no tienen this propio y no siempre son adecuadas."
    }
  },
  {
    id: "web1-semana5-arreglos",
    semana: { numero: 5, fechas: "-" },
    temaCentral: "Arreglos",
    subtemas: ["métodos", "desestructuración"],
    objetivos: [
      "Manipular arreglos usando métodos nativos.",
      "Aplicar desestructuración para extraer valores.",
      "Comprender la diferencia entre mutar y no mutar arreglos.",
      "Usar arreglos para almacenar colecciones de datos.",
      "Iterar sobre arreglos de manera eficiente."
    ],
    definiciones: [
      { concepto: "Arreglo", definicion: "Colección ordenada de elementos accesibles por índice." },
      { concepto: "Desestructuración", definicion: "Sintaxis para extraer valores de un arreglo u objeto en variables independientes." },
      { concepto: "Método de arreglo", definicion: "Función que se puede aplicar a un arreglo, como push(), pop(), shift(), unshift()." },
      { concepto: "Mutación", definicion: "Cambio en el contenido o estructura de un arreglo." },
      { concepto: "Inmutabilidad", definicion: "Propiedad de un objeto o arreglo que no puede ser cambiado una vez creado." }
    ],
    ejemplo: {
      contexto: "Uso de métodos y desestructuración.",
      codigo: "const nums = [1,2,3];\nconst [a,b] = nums;\nconst dobles = nums.map(x => x*2);"
    },
    buenasPracticas: [
      "Usar métodos como map, filter y reduce para manipular arreglos.",
      "Evitar modificar el arreglo original si no es necesario.",
      "Nombrar arreglos en plural.",
      "Usar desestructuración para extraer múltiples valores a la vez.",
      "Comentar la lógica detrás de métodos complejos."
    ],
    erroresComunes: [
      "Confundir métodos que mutan con los que no mutan.",
      "Olvidar el índice al recorrer arreglos.",
      "No validar la longitud antes de acceder a un elemento.",
      "Modificar el arreglo mientras se está iterando sobre él.",
      "No usar desestructuración cuando es más claro."
    ],
    consejos: [
      "Aprovecha la desestructuración para escribir código más limpio.",
      "Usa spread operator (...) para copiar arreglos de forma superficial.",
      "Lee sobre programación funcional para entender mejor map, filter y reduce.",
      "Practica la conversión de bucles for en métodos de arreglo.",
      "Consulta la documentación de MDN sobre métodos de arreglo avanzados."
    ],
    tipos: ["array", "desestructuración"],
    ejercicios: [
      { enunciado: "Crea un arreglo de 5 nombres y usa map para convertirlos a mayúsculas." },
      { enunciado: "Usa filter para crear un nuevo arreglo con los números pares de otro arreglo." },
      { enunciado: "Implementa un programa que calcule la suma de todos los elementos de un arreglo." },
      { enunciado: "Desarrolla una función que reciba un arreglo de objetos y retorne un arreglo con un atributo específico." },
      { enunciado: "Crea un arreglo bidimensional y usa desestructuración para acceder a un elemento específico." }
    ],
    recursos: [
      { nombre: "MDN Arreglos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects#arreglos" },
      { nombre: "MDN Métodos de arreglo", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#metodos" },
      { nombre: "JavaScript Array Methods", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_array_methods.asp" },
      { nombre: "JavaScript Map, Filter, Reduce", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-map-filter-reduce-explained-with-examples/" },
      { nombre: "JavaScript Destructuring Assignment", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" }
    ],
    faq: [
      { pregunta: "¿Qué método debo usar para agregar un elemento al final de un arreglo?", respuesta: "Usa el método push()." },
      { pregunta: "¿Y para eliminar el primer elemento de un arreglo?", respuesta: "Usa el método shift()." },
      { pregunta: "¿Puedo recorrer un arreglo con un ciclo for normal?", respuesta: "Sí, pero es más común usar métodos de arreglo o for...of." },
      { pregunta: "¿Qué hace el método splice()?", respuesta: "Elimina o reemplaza elementos en un arreglo en una posición dada." },
      { pregunta: "¿Cómo puedo invertir un arreglo?", respuesta: "Usa el método reverse()." }
    ],
    mitoYRealidad: {
      mito: "Los arreglos solo sirven para listas simples.",
      realidad: "Los arreglos permiten manipular y transformar datos de muchas formas."
    }
  },
  {
    id: "web1-semana6-objetos",
    semana: { numero: 6, fechas: "-" },
    temaCentral: "Objetos",
    subtemas: ["literales", "constructor", "desestructuración", "atributos", "propiedades"],
    objetivos: [
      "Crear y manipular objetos literales y con constructor.",
      "Aplicar desestructuración de objetos.",
      "Diferenciar entre atributos y propiedades.",
      "Usar objetos para modelar entidades del mundo real.",
      "Entender el concepto de this en el contexto de objetos."
    ],
    definiciones: [
      { concepto: "Objeto", definicion: "Colección de pares clave-valor que representan una entidad." },
      { concepto: "Propiedad", definicion: "Atributo o característica de un objeto." },
      { concepto: "Método de objeto", definicion: "Función que es una propiedad de un objeto." },
      { concepto: "Constructor", definicion: "Función especial para crear objetos con la misma estructura." },
      { concepto: "Prototipo", definicion: "Objeto del cual otros objetos heredan propiedades y métodos." }
    ],
    ejemplo: {
      contexto: "Creación y acceso a objetos.",
      codigo: "const persona = { nombre: 'Ana', edad: 25 };\nconsole.log(persona.nombre);\nconst { edad } = persona;"
    },
    buenasPracticas: [
      "Nombrar objetos en singular.",
      "Usar const para objetos que no cambian de referencia.",
      "Comentar objetos complejos.",
      "Usar métodos de objeto para comportamientos relacionados.",
      "Evitar la mutación directa de propiedades, usa setters y getters."
    ],
    erroresComunes: [
      "Confundir atributos con propiedades.",
      "Modificar objetos directamente cuando no se debe.",
      "No usar desestructuración para extraer valores.",
      "Olvidar el contexto de this en funciones de objeto.",
      "Crear objetos con propiedades duplicadas accidentalmente."
    ],
    consejos: [
      "Utiliza la desestructuración para acceder rápidamente a propiedades clave.",
      "Lee sobre el patrón de diseño 'Module' para organizar mejor el código del objeto.",
      "Practica la creación de objetos con diferentes constructores.",
      "Consulta la documentación de MDN sobre objetos y clases.",
      "Explora el uso de Object.create() para crear objetos con prototipos personalizados."
    ],
    tipos: ["literal", "constructor", "desestructuración"],
    ejercicios: [
      { enunciado: "Crea un objeto libro con propiedades título y autor, y muestra ambos valores." },
      { enunciado: "Implementa un objeto contador con métodos para incrementar y decrementar." },
      { enunciado: "Desarrolla un objeto coche with propiedades y métodos que describan su comportamiento." },
      { enunciado: "Crea un objeto que represente una tarea con propiedades para el título, descripción y estado." },
      { enunciado: "Implementa un objeto que simule un reloj con métodos para iniciar, detener y reiniciar." }
    ],
    recursos: [
      { nombre: "MDN Objetos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects" },
      { nombre: "MDN Prototipos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" },
      { nombre: "JavaScript Objects", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_objects.asp" },
      { nombre: "JavaScript Object Constructors", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-object-constructors-explained-with-examples/" },
      { nombre: "JavaScript this Keyword", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this" }
    ],
    faq: [
      { pregunta: "¿Qué es un objeto en JavaScript?", respuesta: "Es una colección de propiedades, donde cada propiedad es un par clave-valor." },
      { pregunta: "¿Cómo accedo a las propiedades de un objeto?", respuesta: "Usando la notación de punto o la notación de corchetes." },
      { pregunta: "¿Qué es el prototipo de un objeto?", respuesta: "Es el objeto del cual hereda propiedades y métodos." },
      { pregunta: "¿Puedo cambiar el prototipo de un objeto existente?", respuesta: "Sí, usando Object.setPrototypeOf() o __proto__." },
      { pregunta: "¿Qué hace el método Object.create()?", respuesta: "Crea un nuevo objeto con el prototipo especificado." }
    ],
    mitoYRealidad: {
      mito: "Los objetos solo se usan para datos simples.",
      realidad: "Los objetos permiten modelar estructuras complejas y relaciones."
    }
  },
  {
    id: "web1-semana7-dom",
    semana: { numero: 7, fechas: "-" },
    temaCentral: "DOM",
    subtemas: ["querySelector", "getElement", "createElement", "setAttribute", "classList", "remove", "innerHTML"],
    objetivos: [
      "Manipular el DOM usando JavaScript.",
      "Crear, modificar y eliminar elementos dinámicamente.",
      "Aplicar buenas prácticas al interactuar con el DOM.",
      "Entender la estructura jerárquica del DOM.",
      "Optimizar la manipulación del DOM para mejorar el rendimiento."
    ],
    definiciones: [
      { concepto: "DOM", definicion: "Document Object Model, estructura jerárquica que representa los elementos de una página web." },
      { concepto: "querySelector", definicion: "Método para seleccionar el primer elemento que coincide con un selector CSS." },
      { concepto: "createElement", definicion: "Método para crear un nuevo elemento HTML en el DOM." },
      { concepto: "setAttribute", definicion: "Método para establecer el valor de un atributo en un elemento." },
      { concepto: "classList", definicion: "Propiedad que devuelve la lista de clases de un elemento como un objeto DOMTokenList." }
    ],
    ejemplo: {
      contexto: "Crear y modificar un elemento.",
      codigo: "const div = document.createElement('div');\ndiv.innerHTML = 'Hola';\ndocument.body.appendChild(div);"
    },
    buenasPracticas: [
      "Usar selectores específicos para evitar errores.",
      "Eliminar nodos que ya no se usan.",
      "Evitar modificar el DOM en exceso.",
      "Usar fragmentos de documento para manipulaciones masivas.",
      "Comentar la lógica detrás de manipulaciones complejas del DOM."
    ],
    erroresComunes: [
      "No validar si el elemento existe antes de modificarlo.",
      "Olvidar eliminar nodos creados dinámicamente.",
      "Abusar de innerHTML.",
      "Modificar el DOM mientras se está iterando sobre él.",
      "No usar createElement para crear nuevos nodos."
    ],
    consejos: [
      "Prefiere textContent sobre innerHTML si no necesitas HTML.",
      "Usa métodos de búsqueda eficientes como getElementById, querySelector.",
      "Lee sobre el patrón de diseño 'Observer' para entender mejor los eventos del DOM.",
      "Practica la creación de elementos y eventos dinámicamente.",
      "Consulta la documentación de MDN sobre el DOM y sus métodos."
    ],
    tipos: ["elemento", "atributo", "nodo"],
    ejercicios: [
      { enunciado: "Crea un botón que al hacer clic agregue un nuevo párrafo al body." },
      { enunciado: "Implementa una función que cambie el color de fondo de un div al hacer hover." },
      { enunciado: "Desarrolla un programa que cree una lista desordenada a partir de un arreglo." },
      { enunciado: "Crea un formulario dinámico que agregue nuevos campos de entrada al hacer clic en un botón." },
      { enunciado: "Implementa un reloj digital que muestre la hora actualizada cada segundo." }
    ],
    recursos: [
      { nombre: "MDN DOM", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model" },
      { nombre: "MDN querySelector", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/API/Document/querySelector" },
      { nombre: "JavaScript DOM Manipulation", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_htmldom.asp" },
      { nombre: "JavaScript Create Element", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-createelement-explained-with-explained-with-examples/" },
      { nombre: "JavaScript Event Listeners", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Event_Reference" }
    ],
    faq: [
      { pregunta: "¿Qué es el DOM?", respuesta: "Es un modelo de objetos que representa la estructura de un documento HTML o XML." },
      { pregunta: "¿Cómo accedo a un elemento del DOM?", respuesta: "Usando métodos como getElementById, querySelector, etc." },
      { pregunta: "¿Qué hace el método createElement?", respuesta: "Crea un nuevo elemento HTML en el DOM." },
      { pregunta: "¿Puedo modificar el contenido de un elemento?", respuesta: "Sí, usando propiedades como innerHTML o textContent." },
      { pregunta: "¿Qué es un evento en el contexto del DOM?", respuesta: "Es una acción que ocurre en el documento, como un clic o una carga." }
    ],
    mitoYRealidad: {
      mito: "Solo puedes modificar el DOM con jQuery.",
      realidad: "JavaScript puro permite manipular el DOM de forma eficiente y moderna."
    }
  },
  {
    id: "web1-semana8-localstorage",
    semana: { numero: 8, fechas: "-" },
    temaCentral: "localStorage",
    subtemas: ["getItem", "setItem", "remove"],
    objetivos: [
      "Almacenar y recuperar datos en el navegador.",
      "Eliminar datos almacenados.",
      "Comprender las limitaciones de localStorage.",
      "Usar localStorage para persistencia de datos simples.",
      "Evitar el almacenamiento de datos sensibles en localStorage."
    ],
    definiciones: [
      { concepto: "localStorage", definicion: "API de almacenamiento web que permite guardar datos clave-valor en el navegador de forma persistente." },
      { concepto: "setItem", definicion: "Método para guardar un par clave-valor en localStorage." },
      { concepto: "getItem", definicion: "Método para recuperar el valor asociado a una clave en localStorage." },
      { concepto: "removeItem", definicion: "Método para eliminar un par clave-valor de localStorage." },
      { concepto: "capacidad de almacenamiento", definicion: "Límite de espacio disponible para almacenar datos en localStorage." }
    ],
    ejemplo: {
      contexto: "Guardar y recuperar datos.",
      codigo: "localStorage.setItem('nombre', 'Ana');\nconst nombre = localStorage.getItem('nombre');\nlocalStorage.removeItem('nombre');"
    },
    buenasPracticas: [
      "Validar los datos antes de guardarlos.",
      "Eliminar datos que ya no se usan.",
      "No almacenar información sensible.",
      "Usar JSON.stringify y JSON.parse para objetos complejos.",
      "Comentar el propósito de los datos almacenados."
    ],
    erroresComunes: [
      "No validar la existencia de la clave antes de leer.",
      "Almacenar objetos sin serializar (usar JSON.stringify).",
      "No manejar el límite de almacenamiento.",
      "Sobrescribir datos importantes accidentalmente.",
      "No usar removeItem cuando los datos ya no son necesarios."
    ],
    consejos: [
      "Usa JSON.stringify y JSON.parse para guardar y leer objetos complejos.",
      "Lee sobre las diferencias entre sessionStorage y localStorage.",
      "Practica la implementación de un sistema de preferencias de usuario con localStorage.",
      "Consulta la documentación de MDN sobre almacenamiento web.",
      "Explora el uso de IndexedDB para almacenamiento más complejo en el navegador."
    ],
    tipos: ["getItem", "setItem", "removeItem"],
    ejercicios: [
      { enunciado: "Guarda el nombre de un usuario en localStorage y recupéralo para mostrarlo en pantalla." },
      { enunciado: "Implementa una función que recuerde la última página visitada usando localStorage." },
      { enunciado: "Desarrolla un programa que almacene las tareas de un usuario y permita marcarlas como completadas." },
      { enunciado: "Crea un contador que se mantenga incluso si recargas la página usando localStorage." },
      { enunciado: "Implementa un sistema de notas que se guarden en localStorage y se muestren al cargar la página." }
    ],
    recursos: [
      { nombre: "MDN localStorage", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/API/Window/localStorage" },
      { nombre: "MDN sessionStorage", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage" },
      { nombre: "JavaScript Web Storage", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_web_storage.asp" },
      { nombre: "JavaScript JSON.stringify()", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-json-stringify-explained-with-explained-with-examples/" },
      { nombre: "JavaScript JSON.parse()", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" }
    ],
    faq: [
      { pregunta: "¿Qué es localStorage?", respuesta: "Es una API que permite almacenar datos clave-valor en el navegador de forma persistente." },
      { pregunta: "¿localStorage es seguro para almacenar datos sensibles?", respuesta: "No, nunca almacenes contraseñas o datos sensibles en localStorage." },
      { pregunta: "¿Cuál es la diferencia entre localStorage y sessionStorage?", respuesta: "localStorage persiste incluso después de cerrar el navegador, sessionStorage no." },
      { pregunta: "¿Puedo almacenar objetos en localStorage?", respuesta: "Sí, pero debes serializarlos a JSON primero." },
      { pregunta: "¿Qué límite de almacenamiento tiene localStorage?", respuesta: "Depende del navegador, pero generalmente es de varios megabytes." }
    ],
    mitoYRealidad: {
      mito: "localStorage es seguro para guardar cualquier dato.",
      realidad: "Nunca guardes contraseñas ni datos sensibles en localStorage."
    }
  },
  {
    id: "web1-semana9-modulos",
    semana: { numero: 9, fechas: "-" },
    temaCentral: "Módulos",
    subtemas: ["importaciones", "exportaciones"],
    objetivos: [
      "Dividir el código en módulos reutilizables.",
      "Importar y exportar funciones y variables.",
      "Comprender la diferencia entre export default y export nombrado.",
      "Organizar el código de manera lógica y mantenible.",
      "Evitar la contaminación del ámbito global."
    ],
    definiciones: [
      { concepto: "Módulo", definicion: "Archivo de JavaScript que exporta funciones, objetos o variables para ser usados en otros archivos." },
      { concepto: "Exportación por defecto", definicion: "Exportación que permite que un módulo tenga un valor o función principal." },
      { concepto: "Exportación nombrada", definicion: "Exportación que permite que un módulo exporte múltiples valores o funciones." },
      { concepto: "Importación", definicion: "Instrucción que permite usar funciones, objetos o variables de otro módulo." },
      { concepto: "Ámbito de módulo", definicion: "El contexto en el que un módulo es evaluado, separado del ámbito global." }
    ],
    ejemplo: {
      contexto: "Exportar e importar una función.",
      codigo: "// modulo.js\nexport function saludar() { return 'Hola'; }\n// main.js\nimport { saludar } from './modulo.js';"
    },
    buenasPracticas: [
      "Dividir el código en archivos según funcionalidad.",
      "Usar nombres descriptivos para los módulos.",
      "Evitar dependencias circulares.",
      "Comentar la funcionalidad de cada módulo.",
      "Usar exportaciones nombradas para mayor claridad."
    ],
    erroresComunes: [
      "Olvidar exportar funciones o variables necesarias.",
      "Confundir export default con export nombrado.",
      "Importar rutas incorrectas.",
      "Crear módulos con demasiadas responsabilidades.",
      "No actualizar las importaciones al renombrar archivos."
    ],
    consejos: [
      "Prefiere export nombrado para mayor claridad y autocompletado.",
      "Lee sobre patrones de diseño como 'Facade' y 'Singleton' para módulos.",
      "Practica la creación de módulos pequeños y cohesivos.",
      "Consulta la documentación de MDN sobre módulos de JavaScript.",
      "Explora el uso de herramientas como Webpack o Rollup para empaquetar módulos."
    ],
    tipos: ["export", "import", "export default", "export nombrado"],
    ejercicios: [
      { enunciado: "Crea un módulo que exporte una función y un objeto, e impórtalos en otro archivo." },
      { enunciado: "Implementa un sistema de gestión de usuarios usando módulos para separar la lógica." },
      { enunciado: "Desarrolla un módulo que maneje la conexión a una API y exporte funciones para interactuar con ella." },
      { enunciado: "Crea un módulo de utilidades con funciones generales que puedan ser reutilizadas." },
      { enunciado: "Implementa un módulo que cargue y guarde preferencias de usuario en localStorage." }
    ],
    recursos: [
      { nombre: "MDN Módulos", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules" },
      { nombre: "MDN export", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export" },
      { nombre: "MDN import", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import" },
      { nombre: "JavaScript Modules", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_modules.asp" },
      { nombre: "JavaScript Module Pattern", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-module-pattern-explained-with-explained-with-examples/" }
    ],
    faq: [
      { pregunta: "¿Qué es un módulo en JavaScript?", respuesta: "Es un archivo que contiene código JavaScript que puede ser reutilizado en otros archivos." },
      { pregunta: "¿Cómo exporto una función de un módulo?", respuesta: "Usando la palabra clave export antes de la declaración de la función." },
      { pregunta: "¿Y cómo importo esa función en otro módulo?", respuesta: "Usando la palabra clave import seguida del nombre de la función y la ruta del módulo." },
      { pregunta: "¿Qué es el ámbito de módulo?", respuesta: "Es el contexto en el que un módulo es evaluado, separado del ámbito global." },
      { pregunta: "¿Puedo tener múltiples exportaciones por defecto en un módulo?", respuesta: "No, solo puede haber una exportación por defecto por módulo." }
    ],
    mitoYRealidad: {
      mito: "Los módulos solo sirven en proyectos grandes.",
      realidad: "Usar módulos mejora la organización y escalabilidad en cualquier proyecto."
    }
  },
  {
    id: "web1-semana10-validacion-formularios",
    semana: { numero: 10, fechas: "-" },
    temaCentral: "Validación de formularios",
    subtemas: ["validación", "eventos", "mensajes de error"],
    objetivos: [
      "Validar datos de entrada en formularios.",
      "Mostrar mensajes de error claros.",
      "Aplicar validaciones personalizadas.",
      "Mejorar la experiencia del usuario con formularios interactivos.",
      "Prevenir el envío de datos incorrectos o incompletos."
    ],
    definiciones: [
      { concepto: "Validación de formularios", definicion: "Proceso de comprobar que los datos ingresados cumplen ciertos requisitos antes de ser enviados." },
      { concepto: "Evento submit", definicion: "Evento que se dispara cuando se envía un formulario." },
      { concepto: "Mensaje de error", definicion: "Texto que informa al usuario sobre un problema con los datos ingresados." },
      { concepto: "Campo requerido", definicion: "Campo que debe ser completado obligatoriamente en un formulario." },
      { concepto: "Expresión regular", definicion: "Secuencia de caracteres que forma un patrón de búsqueda, utilizada para validar datos." }
    ],
    ejemplo: {
      contexto: "Validar un campo requerido.",
      codigo: "<form>\n  <input id='nombre' required />\n  <button>Enviar</button>\n</form>"
    },
    buenasPracticas: [
      "Validar tanto en frontend como en backend.",
      "Mostrar mensajes de error específicos.",
      "Evitar validaciones excesivamente restrictivas.",
      "Usar expresiones regulares para validaciones complejas.",
      "Comentar la lógica de validación."
    ],
    erroresComunes: [
      "No validar campos obligatorios.",
      "No mostrar mensajes de error claros.",
      "Confiar solo en la validación del frontend.",
      "Crear validaciones demasiado complejas.",
      "Olvidar validar en el servidor los datos recibidos."
    ],
    consejos: [
      "Usa el atributo required y valida con JavaScript para mayor robustez.",
      "Descompón las validaciones complejas en validaciones más simples.",
      "Lee sobre patrones de diseño como 'Decorator' para validaciones.",
      "Practica la escritura de pruebas para tus funciones de validación.",
      "Consulta la documentación de MDN sobre eventos y validación de formularios."
    ],
    tipos: ["requerido", "expresiones regulares", "eventos"],
    ejercicios: [
      { enunciado: "Crea un formulario con validación de campo obligatorio y muestra un mensaje si está vacío." },
      { enunciado: "Implementa una validación que verifique el formato de un correo electrónico." },
      { enunciado: "Desarrolla un formulario que solo permita el envío si todos los campos son válidos." },
      { enunciado: "Crea un sistema de mensajes de error que indique qué campo es incorrecto." },
      { enunciado: "Implementa una validación de contraseña que requiera al menos 8 caracteres, una letra y un número." }
    ],
    recursos: [
      { nombre: "MDN Validación de formularios", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation" },
      { nombre: "MDN Eventos de formulario", tipo: "Documentación", enlace: "https://developer.mozilla.org/es/docs/Web/Events/form" },
      { nombre: "JavaScript Form Validation", tipo: "Tutorial", enlace: "https://www.w3schools.com/js/js_form_validation.asp" },
      { nombre: "JavaScript Regular Expressions", tipo: "Artículo", enlace: "https://www.freecodecamp.org/news/javascript-regular-expressions-explained-with-explained-with-examples/" },
      { nombre: "JavaScript Error Messages", tipo: "Referencia", enlace: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error" }
    ],
    faq: [
      { pregunta: "¿Qué es la validación de formularios?", respuesta: "Es el proceso de comprobar que los datos ingresados en un formulario son correctos y completos." },
      { pregunta: "¿Por qué es importante validar los formularios?", respuesta: "Para asegurar que los datos recibidos son útiles y no causarán errores en el procesamiento." },
      { pregunta: "¿Qué pasa si un campo es requerido y está vacío?", respuesta: "El formulario no se enviará y se mostrará un mensaje de error." },
      { pregunta: "¿Puedo validar un formulario sin JavaScript?", respuesta: "Sí, usando solo HTML5 es posible, pero con JavaScript se tiene más control." },
      { pregunta: "¿Qué son las expresiones regulares?", respuesta: "Son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas de texto." }
    ],
    mitoYRealidad: {
      mito: "La validación en el frontend es suficiente.",
      realidad: "Siempre valida también en el backend para mayor seguridad."
    }
  }
].map(t => ({
  ...t,
  materiaId: "web1",
  materia: "Web 1"
}));

export default function CargarTemasWeb1() {
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
      for (const tema of temasWeb1) {
        await setDoc(doc(collection(db, "temas"), tema.id), tema);
      }
      setMsg("Todos los temas Web1 cargados correctamente en Firebase.");
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
          type="submit"
          className="w-full px-3 py-2 bg-pink-600 text-white rounded font-semibold shadow-sm hover:bg-pink-700 transition-colors text-sm"
        >
          Cargar documentación
        </button>
      ) : (
        <div className="text-red-600 font-bold text-center mb-2">Acceso solo para profesor o admin</div>
      )}
      {msg && (
        <div className="text-center text-purple-700 font-semibold mt-2">{msg}</div>
      )}
      <div className="text-xs text-gray-500 mt-4 max-w-xs text-center">
        Este componente es solo para desarrollo. Carga <b>los temas Web1</b> en la colección <b>temas</b> de Firebase Firestore.<br />Puedes eliminarlo después de ejecutarlo una vez.
      </div>
    </div>
  );
}
