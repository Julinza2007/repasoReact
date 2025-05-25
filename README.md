# React ⚛️ + Vite ⚡ + Julinza

## Requisitos para empezar:
- Saber utilizar [`Git`](#qué-es-git-y-para-qué-lo-usaremos) y algunas de sus herramientas (al menos las que se hacen mención acá).
- Utilizar un editor de código fuente, en mi caso utilizo VScode -> [acá tienen el link de descarga](https://code.visualstudio.com).
- Instalar [`Node.js`](#nodejs) (recomendado instalar la versión LTS para más estabilidad) para hacer proyetos con Vite y cosas del backend. -> [acá otro link](https://nodejs.org/es).

## Lo primero a realizar.
### 1) Abrir nuestra terminal preferida. Puede ser `CMD`, `GitBash`, etc.
### 2) Verificar que estén todos los programas bien instalados por las dudas, si muestra en cada uno la versión, significa que está todo ok.
#### Debería ser algo así:
```bash
$ npm -v
10.9.2

$ node -v
v22.16.0

$ git --version
git version 2.48.1.windows.1
```

## Crear entorno para trabajar.
### 3) Entrar al repositorio ya creado.
```bash
$ cd tuRepo
```
### 4) Crear proyecto con Vite.
```bash
$ npm create vite@latest
```
- Ponemos el nombre del proyecto y te crea el repositorio donde trabajaremos.
<details> 
<summary>Aclaración.</summary>

Como al Package Name le pone el mismo nombre que al del proyecto, si a este último le colocás espacios, mayusculas o tildes [`npm`](#qué-es-npm-y-para-qué-se-usa) no los reconocerá como caracteres válidos y te pedirá que vos nombres al Package Name con esas restricciones.
</details>

- Elegimos la opción de [`React`](#react) (obviamente).
- Luego apretamos en la opción de JavaScript que está solo (utiliza [`transpilador`](#de-qué-hablamos-cuando-decimos-transpilador) Babel).
- Finalmente se nos indicarán los siguientes pasos:
```bash
$ cd tuProyecto
$ npm install
$ npm run dev
```
- Siendo `$ npm install` el que instala las dependencias y `$ npm run dev` aquel que levanta el servidor local para desarrollar.

### 5) Programar (si sabés).

---
# Definiciones importantes
### JavaScript
* Es un lenguaje de programación interpretado de alto nivel.
* Se utiliza para desarrollar páginas web dinámicas.
* Permite manipular el contenido del sitio web por medio del [`DOM`](#qué-es-el-dichoso-dom).

### React
* Es una librería o framework de JavaScript pensada para construir Interfaces de Usuario (UI).
* Especialmente utilizada en aplicaciones web de una sola página o SPA (Single Page Applications).
* Divide la UI en `componentes` reutilizables.
* Usa una estructura similar al HTML llamada `JSX` (JavaScript XML).
* Administra los cambios en la UI utilizando un DOM virtual.

### Extensión JSX
* Es una extensión de JavaScript que permite escribir HTML dentro del código de JavaScript para trabajar de manera más cómoda.
* Ejemplo JavaScript puro sin JSX:
```js
const h1 = document.createElement("h1");
h1.textContent = "Hola mundo";
document.body.appendChild(h1);
```
* Ejemplo con JSX (con React):
```jsx
function App() {
  return <h1>Hola mundo</h1>;
}
```
Claramente es otra cosa.

### Node.js
* Es un entorno de ejecución para JavaScript del lado del servidor.
* En simples palabras, este nos permite ejecutar código JavaScript fuera del navegador, como en la consola o en un servidor.
* Lo vamos a usar más en el backend (aunque comandos de npm como `$ npm run dev` que trabajan con Node.js, se usan también en el frontend).

---
# Otras definiciones

### ¿Qué es Git y para qué lo usaremos?
* Es un Sistema de Control de Versiones Distribuido (DVCS).
* Una herramienta que nos permite registrar cambios realizados en archivos a lo largo del tiempo.
* Entonces se pueden recuperar versiones anteriores de esos archivos.

### ¿Qué es npm y para qué se usa?
* Significa `Node Package Manager`.
* Es un sistema de gestión de paquetes que a nosotros nos servirá para el entorno de ejecución de JavaScript llamado [`Node.js`](#nodejs).
* Este nos deja:
    * Instalar paquetes/librerías como la librería `express` a través de la expresión `$ npm install express`.
    * Gestionar dependencias de un proyecto JavaScript o Node.js como cuando hicimos un `$ npm install` al inicio luego de crear nuestro proyecto.
    * Ejecutar scripts definidos en el proyecto como el `$ npm run dev` explicado anteriormente.

### ¿Qué es el dichoso DOM?
* Significa `Document Object Model`.
* Es una interfaz de programación que representa un documento HTML como un árbol de objetos.
* Con este podemos acceder, modificar y manipular los elementos de una página web como por ejemplo desde JavaScript.

### ¿De qué hablamos cuando decimos Transpilador?
* A diferencia de un compilador que traduce código fuente a código máquina, un Transpilador es un software que traduce código fuente de un lenguaje a otro lenguaje. Es decir, traduce código fuente a otro código fuente.
* En este caso se convierte JavaScript moderno (como archivos JSX) en JavaScript compatible con el navegador.
* Los más conocidos son `Babel` y `SWC`. Siendo Babel el más usado hasta ahora. Aunque parece que SWC lo va a desterrar por su alta velocidad.

### ¿Qué es Vite ⚡ y por qué no me patrocinan?
* Es una herramienta de desarrollo moderno para aplicaciones frontend.
* Se integra bien con frameworks populares como `React`, `Angular`, `Vue`, etc.
* Básicamente surge como alternativa a otras herramientas tradicionales como `Webpack`. En este caso con `Create React App` que usa Webpack
<details><summary>Algo</summary>
No me patrocinan porque no soy conocido.
</details>