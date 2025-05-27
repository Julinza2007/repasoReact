import './navegacion.css'
function Navegacion(){
    const links =  [
        {url: 'https://julinza2007.github.io/biograf-a/', text: 'Mi biografia'},
        {url: 'https://julinza2007.github.io/SAO', text: 'Página SAO'},
        {url: 'https://julinza2007.github.io/julinza/', text: 'Página Pessi'}
    ]
    const link = links.map((l, index) =>(
        <li key={index}>
            <a href= {l.url}>{l.text}</a>
        </li>
    ));

    return(
        <header>
            <h1>Ejercicio 1</h1>
            <nav>
                <ul>{link}</ul>
            </nav>
        </header>
    )
}
export default Navegacion;