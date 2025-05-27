# Frontend
## Ejercicio 1:
Crear un componente en React para mostrar una barra de navegación. Obtener los nombres de los links a partir de un array.

### <strong>Explicación</strong>
Lo primero que hacemos es crear el componente `Navegacion.jsx` (Empieza por mayúsculas debido a que React no va a poder diferenciar si es un componente o una etiqueta HTML) y lo guardamos dentro de src y en el repositorio creado llamado components junto a su estilo en css.

En el archivo `App.jsx` importamos el componente creado y lo usamos para mostrar la barra de navegación como se vé a continuación:

```jsx
import Navegacion from "./components/Navegacion.jsx"; ----> Acá se importa el componente

function App() {
    return (
        <>
            <Navegacion /> ----> Acá se utiliza el componente
        </>
    )
}

export default App;
```

Siguiendo con el ejercicio, deberemos crear en `Navegacion.jsx` un array con los nombres de los links para luego recorrerlos y mostrarlos en la barra de navegación.
Y se hace de la siguiente manera:

```jsx
import "./navegacion.css"; // Acá se importa el estilo

function Navegacion() {
    const links =  [
        {url: 'TuUrl', text: 'TuTexto'},
        {url: 'TuUrl', text: 'TuTexto'}, // Se declara el array de links como una lista de objetos donde se guarda la url y el texto de cada link
        {url: 'TuUrl', text: 'TuTexto'}
    ]


const link = links.map((l, index) =>( // Recorre el array de links con la función map que es equivalente a un for of en JavaScript
    // La key es importante para que React pueda identificar cada li ya que las renderiza constantemente
    <li key={index}>
        <a href= {l.url}>{l.text}</a> 
    </li>
));

    return (
            <header>
                <h1>TuTitulo</h1>
                <nav>
                    <ul>
                        {link}
                    </ul>
                </nav>
            </header>
    );
}

export default Navegacion;