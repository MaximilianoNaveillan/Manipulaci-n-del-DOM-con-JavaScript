# TaskFlow: Gestor de Tareas Profesional

TaskFlow es una aplicación de gestión de tareas (To-Do List) diseñada con un enfoque en la arquitectura de código limpia, utilizando Programación Orientada a Objetos (POO) en JavaScript y una metodología de estilos escalable.

## 🚀 Características

- **Persistencia de Datos**: Las tareas se guardan automáticamente en el `localStorage` del navegador.
- **Gestión Completa (CRUD)**: Permite crear, leer, editar y eliminar tareas.
- **Estados Dinámicos**: Cambio de estado entre "pendiente" y "completada" con un solo clic.
- **Diseño Profesional**: Interfaz moderna, responsiva y animada.
- **Código Escalable**: Estructura de estilos siguiendo la metodología **BEM** (Block Element Modifier).

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **Sass (SCSS)**: Preprocesador para estilos avanzados y mantenibles.
- **CSS3**: Variables, Flexbox y animaciones (`@keyframes`).
- **JavaScript (ES6+)**: 
  - Clases y POO.
  - Manipulación del DOM.
  - Fetch API para integración con datos externos.
  - LocalStorage para persistencia.

## 📂 Estructura del Proyecto

```text
proyecto5/
├── index.html          # Punto de entrada de la aplicación
├── css/
│   └── styles.css      # Estilos finales compilados
├── scss/
│   └── main.scss       # Código fuente de estilos (Sass)
├── js/
│   └── app.js          # Lógica de negocio y control del DOM
└── README.md           # Documentación del proyecto
```

## ✒️ Metodología BEM

El proyecto utiliza nombres de clases como `.task-list__item--completed` para asegurar que los estilos sean fáciles de entender y evitar conflictos:
- **Block**: `.task-list`
- **Element**: `__item`
- **Modifier**: `--completed`

---
Desarrollado como un ejemplo de arquitectura profesional para aplicaciones web modernas.
