import { useState } from 'react';

function RandomNumber(){
    const [number, setNumber] = useState(0);
    function handleClick(){
        const n = Math.floor(Math.random() * 1000 + 1);
        setNumber(n);
        console.log(n);
    }
    

    return(
        <>
            <h1 onClick={handleClick}>Presiona este texto para obtener un numero aleatorio entre el 1 al 1000<span>{number}</span></h1>
        </>

    )
}

export default RandomNumber