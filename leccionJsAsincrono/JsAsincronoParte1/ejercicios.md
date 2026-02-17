# 🧠 Ejercicio Práctico: Introducción a la Programación Asíncrona

---

## 📌 Introducción a la Programación Asíncrona

### Contexto 🙌

En JavaScript, el código puede ejecutarse de manera:

- **Síncrona** → línea por línea.
- **Asíncrona** → permitiendo que algunas operaciones tomen tiempo sin
  bloquear el resto del programa.

Aprenderemos cómo funciona la asincronía y su impacto en el rendimiento.

---

## ✍️ Consigna

1.  Crea dos funciones en JavaScript:
    - Una que imprima **"Inicio del programa"**
    - Otra que imprima **"Fin del programa"**

2.  Entre ambas, usa `setTimeout` para mostrar un mensaje con un retraso
    de **3 segundos**.

3.  Observa el comportamiento de la ejecución.

⏰ **Tiempo estimado:** 15 minutos

---

## ⚙️ Paso a paso

1.  Define la primera función `inicio()`, que imprime:

        Inicio del programa

2.  Usa `setTimeout` para imprimir:

        Mensaje con retraso

    después de 3 segundos.

3.  Define la función `fin()`, que imprime:

        Fin del programa

4.  Ejecuta las funciones en orden y observa los resultados.

---

## 🤔 Preguntas para reflexionar

- ¿Por qué "Fin del programa" aparece antes que el mensaje con
  retraso?
- ¿JavaScript ejecutó el código en orden?
- ¿Qué significa que JavaScript sea monohilo?

---

# 🔁 Ejercicio 2: Callbacks Asíncronos

---

## 📌 Contexto 🙌

Un **callback** es una función pasada como argumento a otra función.\
En programación asíncrona, los callbacks se usan para manejar eventos o
respuestas demoradas.

---

## ✍️ Consigna

1.  Crea una función llamada `procesar` que reciba:
    - Un número
    - Un callback
2.  La función debe:
    - Simular un proceso demorado usando `setTimeout`
    - Luego ejecutar el callback
3.  Llama a `procesar` pasando:
    - Un número
    - Una función que imprima el resultado

⏰ **Tiempo estimado:** 20 minutos

---

## ⚙️ Paso a paso

1.  Define la función:

    ```javascript
    procesar(numero, callback);
    ```

2.  Dentro de la función:
    - Usa `setTimeout`

    - Espera 2 segundos

    - Luego ejecuta:

          callback(numero * 2)

3.  Llama a `procesar` pasando:
    - Un número
    - Una función que imprima el resultado en consola

---

## 🤔 Preguntas para reflexionar

- ¿Qué pasaría si eliminamos el `setTimeout`?
- ¿Por qué el callback se ejecuta después?
- ¿Qué ventaja tiene usar callbacks en procesos demorados?

---

# 🎯 Objetivo Final

Al terminar este ejercicio deberías comprender:

- Qué es código síncrono vs asíncrono
- Cómo funciona `setTimeout`
- Qué es un callback
- Cómo JavaScript maneja tareas que toman tiempo sin bloquear la
  ejecución

---

🚀 ¡Listo! Ejecuta tu código y analiza el comportamiento.
