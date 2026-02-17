
# 🧪 Ejercicios - Programación Asíncrona en JavaScript

---

## 📝 Ejercicio 1: Manejo de Promesas con `.then()` y `.catch()`

### Contexto 🙌
Cuando trabajamos con datos de una API, a veces la respuesta puede tardar en llegar o puede fallar. 
Vamos a simular esto usando una Promesa.

---

### Consigna ✍️

Crea una función `obtenerUsuario()` que devuelva una Promesa que:

- Se resuelva correctamente con el mensaje **"👤 Usuario encontrado"** en 2 segundos.
- Se rechace con el mensaje **"❌ Error: Usuario no encontrado"** si el número aleatorio generado es menor a 0.5.
- Maneja la promesa con `.then()` y `.catch()`.

⏰ **Tiempo:** 15 minutos

---

### Paso a paso ⚙️

1. Crea una función `obtenerUsuario()`.
2. Dentro de la función, devuelve una Promesa que use `setTimeout()` para simular la espera de 2 segundos.
3. Genera un número aleatorio usando `Math.random()`.
4. Si el número es mayor o igual a 0.5:
   - Resuelve la promesa con `"👤 Usuario encontrado"`.
5. Si el número es menor a 0.5:
   - Rechaza la promesa con `"❌ Error: Usuario no encontrado"`.
6. Usa `.then()` para mostrar el mensaje si la promesa se resuelve.
7. Usa `.catch()` para manejar el error en caso de que la promesa sea rechazada.

---

# 🧪 Ejercicio 2: Ejecutando Varias Promesas con `Promise.all()`

### Contexto 🙌

A veces, en nuestras aplicaciones necesitamos ejecutar varias promesas al mismo tiempo 
(por ejemplo, cargar diferentes datos de una API).

`Promise.all()` nos permite esperar a que todas las promesas se completen antes de continuar.

---

### Consigna ✍️

Crea tres promesas llamadas:

- `cargarUsuario()` → tarda 2 segundos.
- `cargarPedidos()` → tarda 3 segundos.
- `cargarMensajes()` → tarda 1 segundo.

Luego:

- Usa `Promise.all()` para ejecutarlas en paralelo.
- Muestra `"✅ Todos los datos cargados"` cuando todas terminen correctamente.
- Maneja posibles errores con `.catch()`.

⏰ **Tiempo:** 20 minutos

---

### Paso a paso ⚙️

1. Define las tres funciones que devuelvan promesas con diferentes tiempos de espera.
2. Usa `setTimeout()` dentro de cada promesa para simular la carga.
3. Ejecuta todas juntas usando:

```javascript
Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
```

4. Maneja el resultado con `.then()`, mostrando:

```
✅ Todos los datos cargados
```

5. Maneja errores con `.catch()`.

---

💡 **Tip:**  
Si una sola promesa falla, `Promise.all()` rechazará todo el conjunto.

---

¡Mucho éxito! 🚀
