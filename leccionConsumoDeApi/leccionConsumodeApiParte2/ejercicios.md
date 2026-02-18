# 🌐 Ejercicios: Consumo de APIs (OpenWeather + LibreTranslate)

## 📌 Objetivo

Practicar el consumo de APIs externas utilizando `fetch`, manejo de
promesas y control de errores.

⚠️ Este documento contiene únicamente **guía y pistas**, NO incluye la
resolución completa.

---

# 🌤️ Ejercicio 1: Consulta de Clima con OpenWeather API

## 🙌 Contexto

Las aplicaciones modernas necesitan datos en tiempo real.\
OpenWeather permite consultar información meteorológica de cualquier
ciudad.

## ✍️ Consigna

Desarrollar una aplicación web que permita:

- Ingresar una ciudad
- Obtener:
  - 🌡 Temperatura actual
  - ☁️ Condición climática
  - 💨 Velocidad del viento
- Manejar errores (ciudad inexistente o fallas de conexión)

⏳ Tiempo estimado: 30 minutos

---

## ⚙️ Paso a paso (Guía)

### 1️⃣ Obtener API Key

- Registrarse en OpenWeather.
- Generar una API Key.
- Guardarla en una constante en tu archivo JS.

💡 Pista:

```js
const API_KEY = 'TU_API_KEY';
```

---

### 2️⃣ Crear estructura HTML

Debes incluir:

- Un input para la ciudad
- Un botón para ejecutar la búsqueda
- Un contenedor para mostrar resultados

💡 Pista: usa `id` para poder capturar los elementos desde JavaScript.

---

### 3️⃣ Capturar la ciudad

- Usa `document.getElementById()`
- Obtén el valor con `.value`
- Valida que no esté vacío

---

### 4️⃣ Construir la URL

Endpoint base:

    https://api.openweathermap.org/data/2.5/weather

Parámetros necesarios:

- `q=` → ciudad
- `appid=` → API Key
- `units=metric`

💡 Usa template literals para construir la URL dinámicamente.

---

### 5️⃣ Realizar la petición

Puedes usar:

- `fetch()`
- `async/await`

Recuerda verificar:

```js
response.ok;
```

---

### 6️⃣ Procesar el JSON

Los datos que necesitas están en:

- `data.main.temp`
- `data.weather[0].description`
- `data.wind.speed`

---

### 7️⃣ Manejo de errores

Considera:

- Código 404 → Ciudad no encontrada
- Código 401 → API Key inválida
- Error de red → usar `catch()`

---

# 🌍 Ejercicio 2: Traducción con LibreTranslate

## 🙌 Contexto

Las APIs de traducción permiten convertir texto entre idiomas
fácilmente.\
LibreTranslate es una API gratuita para traducir frases.

## ✍️ Consigna

Crear una aplicación que:

- Permita ingresar texto en español
- Lo traduzca al inglés
- Muestre la traducción en pantalla
- Maneje errores de conexión

⏳ Tiempo estimado: 30 minutos

---

## ⚙️ Paso a paso (Guía)

### 1️⃣ Revisar documentación

Buscar en la documentación oficial:

- Endpoint para traducción
- Método HTTP requerido
- Formato del body

---

### 2️⃣ Crear formulario HTML

Debe incluir:

- Un `textarea` para ingresar texto
- Un botón para traducir
- Un contenedor para mostrar el resultado

---

### 3️⃣ Enviar la solicitud

💡 Pistas importantes:

- Método: `POST`

- Headers:

  ```js
  "Content-Type": "application/json"
  ```

- Body debe enviarse con:

  ```js
  JSON.stringify();
  ```

Parámetros típicos:

- `q` → texto
- `source` → idioma origen
- `target` → idioma destino
- `format` → tipo de texto

---

### 4️⃣ Procesar la respuesta

El texto traducido suele encontrarse en una propiedad similar a:

    data.translatedText

---

### 5️⃣ Manejo de errores

- Usar `try/catch`
- Validar si el texto está vacío
- Mostrar mensaje amigable en pantalla

---

# 🧠 Buenas prácticas

- Validar inputs antes de enviar la solicitud
- Mostrar mensaje de carga
- Limpiar resultados anteriores
- Separar HTML y JS en archivos distintos
- No exponer API Keys en producción

---

# 🚀 Desafíos Extra

- Permitir elegir idioma destino
- Agregar loader mientras se consulta
- Guardar última ciudad consultada en LocalStorage
- Detectar tecla Enter para ejecutar la acción
- Manejar distintos códigos de error con mensajes personalizados

---

# 🤔 Preguntas de reflexión

- ¿Qué diferencia hay entre método GET y POST?
- ¿Por qué algunas APIs requieren autenticación y otras no?
- ¿Qué sucede si la API deja de funcionar?
- ¿Cómo podrías proteger tu API Key en un proyecto real?

---

✍️ Desarrolla cada ejercicio usando únicamente las pistas
proporcionadas.
