# 🧩 Ejercicios: Uso de APIs del Navegador

## 📌 Objetivo general

Explorar el uso de APIs nativas del navegador como: - Geolocalización -
LocalStorage - Clipboard

⚠️ Importante: Este documento contiene **pistas**, no la resolución
completa.

---

# 🌍 Ejercicio 1: Geolocalización + LocalStorage

## 🙌 Contexto

Las APIs del navegador permiten acceder a funcionalidades avanzadas como
almacenamiento, geolocalización y manipulación del DOM.

## ✍️ Consigna

Crea una página HTML con:

- Un botón que, al hacer clic, muestre la ubicación del usuario.
- Uso de **LocalStorage** para almacenar la última ubicación obtenida.
- Un mensaje que indique si la ubicación:
  - Fue obtenida del GPS
  - Fue cargada desde LocalStorage

⏳ Tiempo estimado: 25 minutos

---

## ⚙️ Paso a paso (Guía)

1.  Crea un archivo HTML con:
    - Un botón
    - Un contenedor para mostrar resultados

2.  Usa:

    ```js
    navigator.geolocation.getCurrentPosition();
    ```

    para obtener la ubicación.

3.  Guarda la ubicación en:

    ```js
    localStorage.setItem();
    ```

4.  Antes de llamar a geolocalización, verifica:

    ```js
    localStorage.getItem();
    ```

---

## 💡 Pistas clave

- La geolocalización requiere permiso del usuario.
- `getCurrentPosition` devuelve un objeto `position`.
- Las coordenadas están en:
  - `position.coords.latitude`
  - `position.coords.longitude`
- LocalStorage solo guarda strings.
- Usa condicionales para decidir si obtener nueva ubicación o usar la
  guardada.

---

# 📋 Ejercicio 2: API del Portapapeles (Clipboard)

## 🙌 Contexto

La API de Clipboard permite copiar y pegar contenido en una aplicación
web.

## ✍️ Consigna

Crea:

- Un input donde el usuario escriba texto.
- Un botón para copiar ese texto.
- Otro input donde se pueda pegar el texto.
- Un botón para pegar desde el portapapeles.

⏳ Tiempo estimado: 20 minutos

---

## ⚙️ Paso a paso (Guía)

1.  Crea un formulario con:
    - 2 inputs
    - 2 botones

2.  Para copiar usa:

    ```js
    navigator.clipboard.writeText();
    ```

3.  Para pegar usa:

    ```js
    navigator.clipboard.readText();
    ```

---

## 💡 Pistas clave

- `writeText()` devuelve una promesa.
- `readText()` es asíncrona → usa `async/await`.
- La API Clipboard funciona en:
  - Contextos seguros (https)
  - o localhost
- Puedes mostrar mensajes de confirmación al usuario.

---

# 🎯 Desafíos Extra (Opcional)

- Agregar botón para limpiar LocalStorage.
- Agregar manejo de errores con try/catch.
- Mostrar mensajes visuales (alertas o div dinámico).
- Validar si el navegador soporta las APIs antes de usarlas.

---

## 🧠 Preguntas de reflexión

- ¿Por qué la geolocalización requiere permiso?
- ¿Qué limitaciones tiene LocalStorage?
- ¿Por qué Clipboard solo funciona en HTTPS?
- ¿Qué ventajas tiene usar APIs nativas del navegador?

---

✍️ Desarrolla cada ejercicio respetando la consigna y utilizando
únicamente las pistas proporcionadas.
