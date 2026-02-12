# 🚀 Demo: Manipulación del DOM con JavaScript

Esta es una guía práctica y técnica sobre cómo interactuar con el **DOM (Document Object Model)** utilizando JavaScript puro (Vanilla JS). El proyecto cubre desde la selección básica de elementos hasta la creación y eliminación dinámica de nodos.

## 📋 Contenidos de la Lección

El código incluido demuestra las siguientes capacidades:

### 1. Selección de Elementos

- `getElementById()`: Acceso directo por ID único.
- `getElementsByClassName()` & `getElementsByTagName()`: Uso de colecciones HTML.
- `querySelector()` & `querySelectorAll()`: Selección flexible mediante selectores CSS.

### 2. Modificación de Atributos y Contenido

- Uso de `textContent` para cambios de texto seguros.
- Modificación directa de propiedades (`src`, `alt`, `href`).
- Uso de `setAttribute()` para atributos personalizados y estándar.
- Gestión de **Custom Data Attributes** mediante el objeto `dataset`.

### 3. Alteración de la Estructura (Nodos)

- **Creación:** `document.createElement()`.
- **Inserción:** `appendChild()` e `insertBefore()`.
- **Eliminación:** Método moderno `remove()`.

### 4. Estilos y Clases

- Manipulación de estilos en línea mediante la propiedad `style`.
- Gestión eficiente de diseño con `classList` (`add`, `remove`, `toggle`).

---

## 🛠️ Estructura del Proyecto

```bash
├── index.html   # Estructura base y elementos de prueba.
├── style.css    # Clases auxiliares (.resaltado, .activo).
└── script.js    # Lógica comentada con todos los métodos del DOM.
```

---

## 🚀 Cómo ejecutar la demo

1. **Clona o descarga** los archivos en una misma carpeta.
2. Abre el archivo `index.html` en tu navegador preferido.
3. Abre las **Herramientas de Desarrollador** (`F12` o `Ctrl+Shift+I`) y revisa la **Consola** para ver los resultados.

---

> [!TIP]
> **Dato curioso:** Modificar clases con `classList` es mucho más performante y limpio que manipular estilos individuales con `element.style`.
